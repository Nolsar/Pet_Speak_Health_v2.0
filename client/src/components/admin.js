import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import CreateClient from "./createClient";
import ClientListe from "./clientListe";
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Admin(props) {

    const [addMember, setAddMember] = useState(false);

  return (
    <div id="home">
        {!props.user && <Redirect to="/Login"/>}
        {addMember == false ? <Button color="primary" variant="contained" onClick={() => {setAddMember(true)}}>Add New Client <PersonAddIcon style={{color:"white", marginLeft:"7px"}}/> </Button> : null}
        {addMember == true ? <CreateClient /> : null}
        
        {addMember == true ? <Button  color="secondary" variant="contained" onClick={() => {setAddMember(false)}}>Close </Button> : null}
        <ClientListe/>
        
    </div>
  );
}

export default Admin;