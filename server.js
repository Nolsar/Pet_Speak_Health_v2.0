
require("dotenv").config();

var path = require("path");
// require("./Develop/dialogapi/STT.js"); need that back
// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");

const cors = require('cors');



fs = require('fs');
const watson = require('ibm-watson/sdk');
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

  // //  apply to /api/*
  // app.use('/api/');







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

  

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8081;
var db = require("./Develop/models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));


app.use(cors());

// Requiring our routes

require("./Develop/routes/api-routes")(app);


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






// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

