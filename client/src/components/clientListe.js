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

  // from material-ui

  const [expanded, setExpanded] = React.useState(false);

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
    <div id="home">
      <form className="sndsearch" onSubmit={searchFirst}>
        <div className="form-row">
          <div className="col-3 col-md-3 col-sm-6 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter client name"
              id="search-fname"
              name="search_firstname"
            />
          </div>
          <div className="col-3 col-md-3 col-sm-6">
            <Button type="submit" color="primary" variant="contained">
              Search By firstname
            </Button>
          </div>
        </div>
      </form>

      <form className="search" onSubmit={searchLast}>
        <div className="form-row">
          <div className="col-3 col-md-3 col-sm-6 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter client name"
              id="search-name"
              name="search_lastname"
            />
          </div>
          <div className="col-3 col-md-3 col-sm-6">
            <Button type="submit" color="primary" variant="contained">
              Search By lastname
            </Button>
          </div>
        </div>
      </form>
      

      {liste.map((list, id) => {
        return (
          <div key={id} className={classes.root} style={{ margin: "7px 0px"}}>
            <Accordion expanded={expanded === id} onChange={handleChange(id)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {list.first_name} {list.last_name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{display: "flex", flexDirection: "column"}}>
                
                 {!addingPet ? (<div> <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      setAddingPet(true);
                      setSelectedClient(list);
                    }}
                  >
                    Add Pet
                  </Button>
                  <Button color="primary" variant="contained">
                    View Pets
                  </Button>
                  </div>) :  null}

                  {addingPet === true ? (<Button color="secondary" variant="contained" onClick={() =>{setAddingPet(false)}}>Close</Button>) :  null}

                  {addingPet == true ? <AddPet client={selectedClient} /> : null}
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
