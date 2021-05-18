import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Admin from "./components/admin";
import Navbar from "./components/navbar";
// import logo from './logo.svg';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    console.log("App user: " + user);
  }, [user]);

  const updateUser = (user) =>{
    console.log(user);
    setUser(user);
  }

  return (
    <Router>
      <Navbar/>
    <div>
      <Route exact path="/Login" render={() =>(<Login user={user} setUser={(u) => updateUser(u)}/>) } />
      <Route exact path="/Signup" render={() =>(<Signup user={user} setUser={(u) => updateUser(u)}/>) } />
      <Route exact path="/Admin" render={() =>(<Admin user={user} setUser={(u) => updateUser(u)}/>) } />
    </div>
    </Router>
  );
}

export default App;
