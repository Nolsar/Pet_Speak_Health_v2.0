// Requiring our models and passport as we've configured it
var db = require("../models");
const axios = require("axios");
const user = require("../models/user");


module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", function(req, res) {
    var userId = req.body.uid;
      db.Users.findOne({
        where: {
          uid: userId
        },
      }).then(function(dbclient) {
        res.json(dbclient);
      });
    
  });

  // app.get("/api/movieApiTest/:movie", function(req, res){
    
  //   let query = `http://www.omdbapi.com/?apikey=${process.env.movieKey}&t=${req.params.movie}`;
  //   console.log(query);

  //   axios.get(query).then( results => {
  //     console.log(results.data);
  //     res.json(results.data);
  //   });
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    
    db.Users.create({
      email: req.body.email,
      uid: req.body.uid,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    })
      .then(function(results) {
        res.json(results);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });


  app.post("/api/new_members", function(req, res) {
    
    db.Clients.create({
      email: req.body.email,
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      cell_phone: req.body.cell_phone,
      work_phone: req.body.work_phone,
      house_phone: req.body.house_phone,
      // user_type: req.body.user_type || "client",
    })
      .then(function() {
        // res.redirect(307, "/api/login");
        res.json({
          message: "client added"
        })
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });



  app.post("/api/new_pet", function(req, res) {
    
    db.Pets.create({
      name: req.body.name,
      animal_type: req.body.animal_type,
      birthdate: req.body.birthdate,
      breed: req.body.breed,
      color: req.body.color,
      client_id: req.body.client_id
    })
      .then(function() {
        // res.redirect(307, "/api/login");
        res.json({
          message: "pet added"
        })
      })
      .catch(function(err) {
        res.json(err);
      });
  });

// MEDICAL-RECORDS
app.post("/api/new_medical_record", function(req, res) {
  
  db.Medical_Records.create({
    pet_id: req.body.pet_id,
    vaccine_records: req.body.vaccine_records,
    medication_list: req.body.medication_list,
    physical_exam: req.body.physical_exam,
    client_education: req.body.client_education
  })
    .then(function() {
      // res.redirect(307, "/api/login");
      res.json({
        message: "medical record added"
      })
    })
    .catch(function(err) {
      res.json(err);
    });
});


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (false) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // search client api
  app.get("/api/search-firstname/client/:name", function(req, res){
    if(false){
      res.json({
        message: "please login"
      });
      return;
    }
    else{
      var clientName = req.params.name;
      db.Clients.findAll({
        where: {
          first_name: {
            [db.Sequelize.Op.like]: '%' + clientName + '%'
          }
        }
      }).then(function(dbsearch) {
        res.json(dbsearch);
      });
     }
  });

  // search by last name
  app.get("/api/search-lastname/client/:name", function(req, res){
    if(false){
      res.json({
        message: "please login"
      });
      return;
    }
    else{
      var clientName = req.params.name;
      db.Clients.findAll({
        where: {
          last_name: {
            [db.Sequelize.Op.like]: '%' + clientName + '%'
          }
        }
      }).then(function(dbsearch) {
        res.json(dbsearch);
      });
     }
  });


  app.get("/api/client_data/:id", function(req, res){
    if(false){
      res.json({
        message: "please login"
      });
      return;
    }
    else{
      var clientId = req.params.id;
      db.Clients.findOne({
        where: {
          id: clientId
        },
      }).then(function(dbclient) {
        res.json(dbclient);
      });
     }
  });
// pet data api
  app.get("/api/pet_data/:id", function(req, res){
    if(false){
      res.json({
        message: "please login"
      });
      return;
    }
    else{
      var clientId = req.params.id;
      console.log(req.params);
      db.Pets.findAll({
        where: {
          client_id: clientId
        },
      }).then(async function(dbpet) {
        if(dbpet){
          console.log('dbpet: ', dbpet);
          for(let i = 0; i < dbpet.length; i++){
            await db.Medical_Records.findAll({
              where: {
                pet_id: dbpet[i].id
              },
            }).then((dbrecord) =>{
              dbpet[i].dataValues.records = dbrecord;
              console.log('dbpet: ', dbpet);
              if(i+1 == dbpet.length){
                console.log('here0000');
                res.json(dbpet);
              }
            });
          }
        }
      });
    }
  });
//pet record  api
  app.get("/api/medical_record/:id", function(req, res){
    if(false){
      res.json({
        message: "please login"
      });
      return;
    }
    else{
      var recordId = req.params.id;
      db.Medical_Records.findAll({
        where: {
          id: recordId
        },
      }).then(function(dbrecord) {
        res.json(dbrecord);
      });
    }
  });

  // update client

  app.put("/api/update/client", function(req, res) {
    db.Clients.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbclient) {
      res.json(dbclient);
    });
  });

  //update pet
  app.put("/api/update/pet", function(req, res) {
    db.Pets.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbpet) {
      res.json(dbpet);
    });
  });
};
