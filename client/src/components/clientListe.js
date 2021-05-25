import React, { useState } from "react";
import api from "../utils/api";
import AddPet from "./AddPet";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Paper from '@material-ui/core/Paper';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhoneIcon from '@material-ui/icons/Phone';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

import ViewPets from "./ViewPets";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function ClientListe() {
    // from material-ui
    const classes = useStyles();

    const [liste, setListe] = useState([]);

    // creating satate for new pet
    const [addingPet, setAddingPet] = useState(false);

    // creating state to keep the selecting client
    const [selectedClient, setSelectedClient] = useState(null);

    // creating state for view Pets
    const [viewingPet, setViewingPet] = useState(null);

    // creating state for pets list
    const [petList, setPetList] = useState([]);

    // from material-ui

    const [expanded, setExpanded] = React.useState(false);

    const getPetList = (client_id) => {
        api.pList(client_id).then((response) => {
            console.log(response);
            setPetList(response.data);
        });
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const searchFirst = (event) => {
        event.preventDefault();

        api.fName(event.target.search_firstname.value).then((response) => {
            console.log(response);
            setListe(response.data);
        });
    };

    const searchLast = (event) => {
        event.preventDefault();

        api.lName(event.target.search_lastname.value).then((response) => {
            console.log(response);
            setListe(response.data);
        });
    };

    return (
        <div id="home" style={{ paddingTop: "20px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between"
                }}
            >
                <form
                    className="sndsearch"
                    style={{ display: "flex", flexDirection: "row" }}
                    onSubmit={searchFirst}
                >

                    <div>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter client name"
                            id="search-fname"
                            name="search_firstname"
                        />
                    </div>
                    <div>
                        <Button type="submit" color="primary" variant="contained">
                            Search By firstname
              </Button>
                    </div>

                </form>

                <form
                    className="search"
                    style={{ display: "flex", flexDirection: "row" }}
                    onSubmit={searchLast}
                >

                    <div>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter client name"
                            id="search-name"
                            name="search_lastname"
                        />
                    </div>
                    <div>
                        <Button type="submit" color="primary" variant="contained">
                            Search By lastname
              </Button>
                    </div>

                </form>
            </div>

            {liste.map((list, id) => {
                return (
                    <div key={id} className={classes.root} style={{ margin: "7px 0px", width: "100%" }}>
                        <Accordion expanded={expanded === id} onChange={handleChange(id)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading} style={{fontSize: "1.5rem", fontWeight: "bold"}}>
                                    {list.first_name} {list.last_name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    {!addingPet ? (
                                        <div>
                                            {/* client info */}

                                            <Paper style={{ display: "flex", flexDirection: 'column', marginBottom:"20px", padding:"15px" }} elevation={3}>
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "7px 0px"}}>
                                                    <div>
                                                        <PhoneIphoneIcon /> Mobile Number
                                                    </div>
                                                    <div style={{ marginLeft:"15px"}}>
                                                        {list.cell_phone}
                                                    </div>
                                                </div>
                                                {/* house phoe */}
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "7px 0px"}}>
                                                    <div>
                                                        <PhoneIcon /> House Number:
                                                    </div>
                                                    <div style={{ marginLeft:"15px"}}>
                                                        {list.house_phone}
                                                    </div>
                                                </div>
                                                {/* work phone */}
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "7px 0px"}}>
                                                    <div>
                                                        <HeadsetMicIcon /> Work Phone:
                                                    </div>
                                                    <div style={{ marginLeft:"15px"}}>
                                                        {list.work_phone}
                                                    </div>
                                                </div>
                                                {/* email */}
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "7px 0px"}}>
                                                    <div>
                                                        <EmailIcon /> Email:
                                                    </div>
                                                    <div style={{ marginLeft:"15px"}}>
                                                        {list.email}
                                                    </div>
                                                </div>
                                                {/* address */}
                                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "7px 0px"}}>
                                                    <div>
                                                        <HomeIcon  /> Address:
                                                    </div>
                                                    <div style={{ marginLeft:"15px"}}>
                                                        {list.address + " " + list.city + ", " + list.state + ", " + list.zipcode}
                                                    </div>
                                                </div>
                                            </Paper>

                                            <Button
                                                style={{ marginRight: "15px" }}
                                                color="primary"
                                                variant="contained"
                                                onClick={() => {
                                                    setAddingPet(true);
                                                    setSelectedClient(list);
                                                }}
                                            >
                                                Add Pet <AddCircleOutlineIcon style={{ color: "white", marginLeft: "7px" }} />
                                            </Button>
                                            {!viewingPet ? (
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    onClick={() => {
                                                        setViewingPet(true);
                                                        getPetList(list.id);
                                                    }}
                                                >
                                                    View Pets <VisibilityIcon style={{ color: "white", marginLeft: "7px" }} />
                                                </Button>
                                            ) : null}
                                            {/* creating  */}
                                            {viewingPet === true && (
                                                <div style={{ width: "100%", display: "flex", flexDirection: 'row', flexWrap: 'wrap' }}>
                                                    {petList.map((pet, index) => {
                                                        return (
                                                            <ViewPets
                                                                pet={pet}
                                                                key={index}
                                                                getPetList={() => {
                                                                    getPetList(selectedClient.id);
                                                                }}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            )}
                                            
                                        </div>
                                    ) : null}

                                    {addingPet === true ? (
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            onClick={() => {
                                                setAddingPet(false);
                                            }}
                                        >
                                            Close
                                        </Button>
                                    ) : null}

                                    {addingPet == true ? (
                                        <AddPet
                                            client={selectedClient}
                                            getPetList={() => {
                                                getPetList(selectedClient.id);
                                            }}
                                        />
                                    ) : null}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                );
            })}
        </div>
    );
}

export default ClientListe;
