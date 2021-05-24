import React, {useState, useEffect} from "react";
import api from "../utils/api";

function AddPet(props) {

    useEffect(() =>{
        console.log(" here", props);
    })

    const [message, setMessage] = useState(null);

    const newPet = (event) =>{
        event.preventDefault();

        // callint a function from another component
        api.addNewPet({
            name: event.target.name.value,
            animal_type: event.target.animal_type.value,
            birthdate: event.target.birthdate.value,
            breed: event.target.breed.value,
            color: event.target.color.value,
            client_id: props.client.id
          }).then((response) =>{
            setMessage(response.data.message);
          })

    }


  return (
    <div className="row" id="add-pet">
      <form className="new-pet" onSubmit={newPet}>
        <hr />
        <h4>Add New Pet</h4>
        <div className="form-group col-md-5 col-sm-12">
          <label >Pet Name</label>
          <input type="text" className="form-control" id="pet-name" placeholder="name" name="name"/>
        </div>
         {/* <!--last name--> */}
         <div className="form-group col-md-5 col-sm-12">
          <label >Animal Type</label>
          <input type="text" className="form-control" id="animal_type" placeholder="Type" name="animal_type"/>
        </div>
        {/* <!--address--> */}
        <div className="form-group col-md-5 col-sm-12">
          <label >Breed</label>
          <input type="text" className="form-control" id="breed" placeholder="Breed" name="breed"/>
        </div>
        {/* <!--city--> */}
        <div className="form-group col-md-5 col-sm-12">
          <label >Birthdate</label>
          <input type="text" className="form-control" id="birthdate" placeholder="Birthdate" name="birthdate"/>
        </div>
        {/* <!--state--> */}
        <div className="form-group col-md-5 col-sm-12">
          <label >Color</label>
          <input type="text" className="form-control" id="color" placeholder="Color" name="color"/>
        </div>
        <span>{message}</span>
        <button type="submit" style={{display: "block", width: "80%"}} className="btn btn-default btn-primary">Create Pet</button>
      </form>
    </div>
  );
}

export default AddPet;
