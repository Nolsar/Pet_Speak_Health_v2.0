import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import api from "../utils/api";

function    CreateClient(props) {

    const [message, setMessage] = useState(null);

    const creatNewClient = (event) =>{
        event.preventDefault();

        api.newClient({email: event.target.email.value,
            last_name: event.target.last_name.value,
            first_name: event.target.first_name.value,
            address: event.target.address.value,
            city: event.target.city.value,
            state: event.target.state.value,
            zipcode: event.target.zipcode.value,
            cell_phone: event.target.cell_phone.value,
            work_phone: event.target.work_phone.value,
            house_phone: event.target.house_phone.value,}).then((response) =>{
                setMessage(response.data.message);
            });

        console.log(event.target.first_name.value);

    }

  return (

    <div id="home">
        {/* {!props.user && <Redirect to="/Login"/>} */}
        <form onSubmit={creatNewClient}>
        <h4>Add New Client</h4>
        <div class="form-group col-md-5 col-sm-12">
          <label >First Name</label>
          <input type="text" class="form-control" id="firstname" placeholder="first name" name="first_name"/>
        </div>
         {/* <!--last name--> */}
         <div class="form-group col-md-5 col-sm-12">
          <label >Last Name</label>
          <input type="text" class="form-control" id="lastname" placeholder="last name" name="last_name"/>
        </div>
        {/* <!--address--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >Address</label>
          <input type="text" class="form-control" id="address" placeholder="address" name="address"/>
        </div>
        {/* <!--city--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >City</label>
          <input type="text" class="form-control" id="city" placeholder="city" name="city"/>
        </div>
        {/* <!--state--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >State</label>
          <input type="text" class="form-control" id="state" placeholder="state" name="state"/>
        </div>
        {/* <!--zipcode--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >Zip Code</label>
          <input type="number" class="form-control" id="zipcode" placeholder="zip code" name="zipcode"/>
        </div>
        {/* <!--cell phone--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >Cell Phone</label>
          <input type="number" class="form-control" id="cell-phone" placeholder="cell phone" name="cell_phone"/>
        </div>
        {/* <!--work phone--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >Work Phone</label>
          <input type="number" class="form-control" id="work-phone" placeholder="work phone" name="work_phone"/>
        </div>
        {/* <!--house phone--> */}
        <div class="form-group col-md-5 col-sm-12">
          <label >House Phone</label>
          <input type="number" class="form-control" id="house-phone" placeholder="house phone" name="house_phone"/>
        </div>
        <div class="form-group col-md-5 col-sm-12">
          <label >Email address</label>
          <input type="email" class="form-control" id="email-input" placeholder="Email" name="email"/>
        </div>
        <div style={{display: "none"}} id="alert" class="alert alert-danger" role="alert">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span class="sr-only">Error:</span> <span class="msg"></span>
        </div>
        <button type="submit" style={{display: "block", width: "80%"}}class="btn btn-default btn-primary">Create Client</button>
        <span>{message}</span>
        </form>
    </div>

  )
}

export default CreateClient;