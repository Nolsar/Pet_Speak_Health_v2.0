import React, { Component } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

// import './App.css';

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class STT extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  onClickButton() {

    fetch('/api/speech-to-text/token')
      .then((response) => {
        return response.text();
      }).then((token) => {

        // console.log(token)
        var stream = recognizeMic(Object.assign({
          url: "wss://api.us-east.speech-to-text.watson.cloud.ibm.com/instances/1cda85a8-e378-498d-967e-dc13234aef77/v1/recognize",
          accessToken: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false, // optional - performs basic formatting on the results such as capitals an periods
          // outputElement:  "#output"
        }));

        /**
         * Prints the users speech to the console
         * and assigns the text to the state.
         */
        stream.on('data', (data) => {
          // console.log('this is my data');
          console.log(data);
          // this.setState({
          //   text: data.alternatives[0].transcript
          // })

          this.props.setText(data.alternatives[0].transcript)

          console.log(data.alternatives[0].transcript)
        });
        stream.on('error', function (err) {
          console.log(err);
        });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
        setTimeout(function(stream){
          stream.stop()
        }, 10000, stream);
      }).catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        {/* <button id="button" onClick={this.onClickButton.bind(this)}>Begin Transcription</button> */}
        <MicIcon style={{margin:"0px 5px", cursor: "pointer", color: "blue"}} onClick={this.onClickButton.bind(this)}/>
        {/* <button id="stop">Stop Transcribing</button> */}
        <MicOffIcon style={{margin:"0px 5px", cursor: "pointer", color: "red"}} id="stop"/>
        {/* <h5> Medical Notes: </h5> */}
        {/* <p className="App-Text">{this.state.text}</p> */}
      </div>
    );
  }
}

export default STT;