import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import api from "../utils/api";
import InputAdornment from '@material-ui/core/InputAdornment';

import IBMWatson from "../utils/IBMWatson";

function AddRecord(props) {
    const [message, setMessage] = useState(null);

    const [medSpeech, setMedSpeech] = useState(null);

    const [physicalSpeech, setPhysicalSpeech] = useState(null);

    const [eduSpeech, setEduSpeech] = useState(null);


    const [selectedInput, setSelectedInput] = useState(null);

    const newRecord = (event) => {
        event.preventDefault();

        // callint a function from another component
        api.adRecord({
            pet_id: props.pet_id,
            vaccine_records: event.target.vaccines.value,
            medication_list: event.target.medication_list.value,
            physical_exam: event.target.physical_exam.value,
            client_education: event.target.client_education.value,
        }).then((response) => {
            setMessage(response.data.message);
            props.getPetList();
        })

    }



    return (
        <form className="new-record" onSubmit={newRecord}>
            <hr />
            <h4>Add New record</h4>
            
            <TextField
            value={medSpeech}
            onFocus={() =>{setSelectedInput("med")}}
            // onBlur={() =>{setSelectedInput(null)}}
            InputProps={{
                endAdornment:<InputAdornment position="end">{selectedInput == "med" ? <IBMWatson text={medSpeech} setText={(t) =>{setMedSpeech(t)}}/> : null }</InputAdornment>
              }}
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="medication_list" placeholder="medication list" />

            {/* <!--last name--> */}
            <TextField
            value={physicalSpeech}
            onFocus={() =>{setSelectedInput("physic")}}
            // onBlur={() =>{setSelectedInput(null)}}
            InputProps={{
                endAdornment:<InputAdornment position="end">{selectedInput == "physic" ? <IBMWatson text={physicalSpeech} setText={(t) =>{setPhysicalSpeech(t)}}/> : null }</InputAdornment>
              }}
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="physical_exam" placeholder="physical exam" />

            {/* <!--address--> */}
            <InputLabel id="v">Select the Vaccine</InputLabel>
            <Select
            style={{ width: "100%", marginBottom:"15px" }}
                labelId="v"
                id="vaccines"
                name="vaccines"
            >

                <MenuItem value="Rabies">Rabies</MenuItem>
                <MenuItem value="DAPP">DAPP</MenuItem>
                <MenuItem value="Bordetella">Bordetella</MenuItem>
                <MenuItem value="Leptospirosis">Leptospirosis</MenuItem>
                <MenuItem value="Lyme">Lyme</MenuItem>
                <MenuItem value="Influenza">Influenza</MenuItem>
            </Select>
            <TextField
            value={eduSpeech}
            onFocus={() =>{setSelectedInput("edu")}}
            // onBlur={() =>{setSelectedInput(null)}}
            InputProps={{
                endAdornment:<InputAdornment position="end">{selectedInput == "edu" ? <IBMWatson text={eduSpeech} setText={(t) =>{setEduSpeech(t)}}/> : null }</InputAdornment>
              }}
                style={{ width: "100%", marginBottom:"15px" }}
                variant="filled" type="text" className="form-control" id="client_education" placeholder="client education" />

            <span>{message}</span>
            <div style={{ width: "100%", textAlign: "center", justifyContent: "center"}}><Button
                    type="submit"
                    color="primary" variant="contained"
                >
                    Create Record
                </Button></div>
        </form>
    );
}

export default AddRecord;
