import React, {useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
            props.getPetList();
          })

    }


  return (
    <div className="row" id="add-pet">
      <form className="new-pet" onSubmit={newPet}>
        <hr />
        <h4>Add New Pet</h4>
        
          
          <TextField
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="pet-name" placeholder="name" name="name"/>
        
         {/* <!--last name--> */}
         
          
          <TextField
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="animal_type" placeholder="Type" name="animal_type"/>
        
        {/* <!--address--> */}
        
          <TextField
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="breed" placeholder="Breed" name="breed"/>
        
        {/* <!--city--> */}
       
          
          <TextField
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="birthdate" placeholder="Birthdate" name="birthdate"/>
       
        {/* <!--state--> */}
        
          
          <TextField
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="color" placeholder="Color" name="color"/>
        
        <span>{message}</span>
        <div style={{ width: "100%", textAlign: "center", justifyContent: "center"}}><Button
                    type="submit"
                    color="primary" variant="contained"
                >
                    Create Pet
                </Button></div>
      </form>
    </div>
  );
}

export default AddPet;
