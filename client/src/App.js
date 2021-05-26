
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Admin from "./components/admin";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import logo from './logo.svg';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import firebase from "./utils/firebase";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() =>{
    console.log("App user: " + user);
    checkUserSession();
  }, [user]);

  const updateUser = (user) =>{
    console.log(user);
    setUser(user);
  }

const checkUserSession = async () =>{
  // const u = await firebase.getUserData();
  // if(u.status){
  //   setUser(u.data)
  // }
}

  return (
    <Router>
      <Navbar user={user} setUser={(u) => updateUser(u)}/>
    <div>
    <Card >
      <CardContent>
      <Route exact path="/login" render={() =>(<Login user={user} setUser={(u) => updateUser(u)}/>) } />
      <Route exact path="/signup" render={() =>(<Signup user={user} setUser={(u) => updateUser(u)}/>) } />
      <Route exact path="/admin" render={() =>(<Admin user={user} setUser={(u) => updateUser(u)}/>) } />
      <Route exact path="/" render={() =>(<Home user={user} setUser={(u) => updateUser(u)}/>) } />
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>

    </Router>
  );
}

export default App;
