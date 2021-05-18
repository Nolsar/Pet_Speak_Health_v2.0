import axios from "axios";

export default {
  // Gets all clients
  getClients: function() {
    return axios.get("/api/client");
  },
  // Gets the client with the given id
  getClient: function(id) {
    return axios.get("/api/client/" + id);
  },
  // Deletes the client with the given id
  deleteClient: function(id) {
    return axios.delete("/api/client/" + id);
  },
  // Saves a client to the database
  saveClient: function(clientData) {
    return axios.post("/api/client", clientData);
  },


  testUserRouter: function(){
    return axios.get("/api/user/test");
  },
  login: function(userData){
    return axios.post("/api/user/login", userData);
  },
  logout: function(){
    return axios.get("/api/user/logout");
  },
  signup: function(userData){
    return axios.post("/api/user/signup", userData);
  },
  getUser: function(){
    return axios.get("/api/user/data");
  }
};
