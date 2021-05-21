import React, { Component } from 'react';

// import './App.css';

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class STT extends Component {
  constructor(){
    super();
    this.state = {};
  }

  onClickButton(){

    fetch('http://localhost:3001/api/speech-to-text/token')
    .then((response) =>{
        return response.text();
    }).then((token) => {

      console.log(token)
      var stream = recognizeMic({
          token: token,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });

      /**
       * Prints the users speech to the console
       * and assigns the text to the state.
       */
      stream.on('data',(data) => {
        this.setState({
          text: data.alternatives[0].transcript
        })

        // console.log(data.alternatives[0].transcript)
      });
      stream.on('error', function(err) {
          console.log(err);
      });
      document.querySelector('#stop').onclick = stream.stop.bind(stream);
    }).catch(function(error) {
        console.log(error);
    });
  };
    render() {
      return (
        <div className="App">
          <button id="button" onClick={this.onClickButton.bind(this)}>Listen To Microphone</button>
        <div className="App-Text">{this.state.text}</div> 
        <button id="stop">stop</button>
        </div>
      );
    }
}

export default STT;