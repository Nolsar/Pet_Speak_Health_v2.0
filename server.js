require("dotenv").config();

var path = require("path");
// require("./Develop/dialogapi/STT.js"); need that back
// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");



// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
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




// Requiring our routes

require("./Develop/routes/api-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

// we need that back

// Imports the Google Cloud client library

// const {AccessApprovalClient} = require('@google-cloud/access-approval');

// // TODO(developer): replace with your prefered project ID.
// const projectId = 'pet_health_speak'

// // Creates a client
// const client = new AccessApprovalClient();

// async function listRequests() {
//   const requests = await client.listApprovalRequests({
//     parent: `projects/${projectId}`,
//   });
//   console.info(requests);
// }
// listRequests();