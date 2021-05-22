const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

fs = require('fs');
const watson = require('ibm-watson/sdk');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

  // //  apply to /api/*
  // app.use('/api/');


app.use(express.static(__dirname + '/static'));
app.use(cors());



const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator
  ({ apikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY}),
  serviceUrl: process.env.SPEECH_TO_TEXT_URL,
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

// speechToText.method(params)
//   .catch(err => {
//     console.log('error:', err);
//   });

  app.use('/api/speech-to-text/token', function(req, res) {
    const authorization = new watson.AuthorizationV1({
      authenticator: new IamAuthenticator({ apikey:  process.env.SPEECH_TO_TEXT_IAM_APIKEY }),
      url: process.env.SPEECH_TO_TEXT_URL
    });
    authorization.getToken(
      // {
      //   url: IamAuthenticator.serviceUrl
      // },
      function(err, token) {
        if (err) {
          console.log('Error retrieving token: ', err);
          res.status(500).send('Error retrieving token');
          return;
        }
  
        console.log('token from server.js is ', token);
  
  
        res.send(token);
      }
    );
  });
  
  


const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "the secret that always changes", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/proj3");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on "http://localhost:${PORT}"!`);
});
