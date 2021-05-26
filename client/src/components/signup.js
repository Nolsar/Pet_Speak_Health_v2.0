import React from "react";
import {Redirect} from "react-router-dom";


import firebase from "../utils/firebase";
import Button from '@material-ui/core/Button';

function signup(props) {
  const submit = async (event) => {
    event.preventDefault();
    console.log(event.target.first_name.value);

    var userEmail = event.target.emailAddress.value;
    var userPassword = event.target.password.value;
    var userfirst_name = event.target.first_name.value;
    var userlast_name = event.target.last_name.value;

   const user = await firebase.createUserWithEmailAndPassword({
      email: userEmail,
      password: userPassword,
      first_name: userfirst_name,
      last_name: userlast_name
    });
    console.log(user);
  };

  return (
    <div className="container">
        {props.user && <Redirect to="/Admin"/>}
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Sign Up Form</h2>
          <form className="signup" onSubmit={submit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="first name"
                name="first_name"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="last name"
                name="last_name"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
                name="emailAddress"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                name="password"
              />
            </div>
            <div
              style={{ display: "none" }}
              id="alert"
              className="alert alert-danger"
              role="alert"
            >
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Error:</span>{" "}
              <span className="msg"></span>
            </div>
            <Button type="submit" color="primary" variant="contained">
              Sign Up
            </Button>
          </form>
          <br />
          <p>
            Or log in <a href="/login">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signup;
