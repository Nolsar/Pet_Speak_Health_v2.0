import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import CreateClient from "./createClient";
import ClientListe from "./clientListe";

function Admin(props) {

    const [addMember, setAddMember] = useState(false);

  return (
    <div id="home">
        {!props.user && <Redirect to="/Login"/>}
        {addMember == true ? <CreateClient /> : null}
        {addMember == false ? <button onClick={() => {setAddMember(true)}}>Add New Client </button> : null}
        {addMember == true ? <button onClick={() => {setAddMember(false)}}>Close </button> : null}
        <ClientListe/>
        
    </div>
  );
}

export default Admin;