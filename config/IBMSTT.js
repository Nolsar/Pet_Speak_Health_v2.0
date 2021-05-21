// https://cloud.ibm.com/apidocs/speech-to-text?code=node

fs = require('fs');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator
  ({ apikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY}),
  serviceUrl: process.env.SPEECH_TO_TEXT_URL,
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

speechToText.method(params)
  .catch(err => {
    console.log('error:', err);
  });


const params = {
  // From file
  objectMode: true,
  audio: fs.createReadStream('./resources/speech.wav'),
  contentType: 'audio/l16; rate=44100'
};

const recognizeStream = speechToText.recognizeUsingWebSocket(params);

// Pipe in the audio.
fs.createReadStream('audio/l16').pipe(recognizeStream);

// Listen for events.
recognizeStream.on('data', function(event) { onEvent('Data:', event); });
recognizeStream.on('error', function(event) { onEvent('Error:', event); });
recognizeStream.on('close', function(event) { onEvent('Close:', event); });

// Display events on the console.
function onEvent(name, event) {
    console.log(name, JSON.stringify(event, null, 2));
};


// speechToText.recognize(params)
//   .then(response => {
//     console.log(JSON.stringify(response.result, null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // or streaming
// fs.createReadStream('./resources/speech.wav')
//   .pipe(speechToText.recognizeUsingWebSocket({ contentType: 'audio/l16; rate=44100' }))
//   .pipe(fs.createWriteStream('./transcription.txt'));