import React from "react";
import firebase from "../utils/firebase";
import {Redirect} from "react-router-dom";
// import './App.css';

import Button from '@material-ui/core/Button';

function login(props) {

    const userSubmit = async (event) => {
        event.preventDefault();
        // console.log(event.target.firstName.value);
    
        var userEmail = event.target.emailAddress.value;
        var userPassword = event.target.password.value;
    
       const user = await firebase.signInWithEmailAndPassword({
          email: userEmail,
          password: userPassword,
        });
        console.log(user);
        props.setUser(user.data);
      };

  return (
    <div className="container">
        {props.user && <Redirect to="/admin"/>}
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Login Form</h2>
        <form className="login" onSubmit={userSubmit}>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" name="emailAddress"/>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" name="password"/>
          </div>
          <Button type="submit" color="primary" variant="contained">Login</Button>
        </form>
        <br />
        {/* <!-- <p>Or sign up <a href="/">here</a></p> --> */}
      </div>
    </div>
  </div>
  );
}

export default login;
