import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';

import AddRecord from "./addRecord";
import ViewRecord from "./viewRecord";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ViewPets(props) {
  // setting state
  const [record, setRecord] = useState(false);

  // stting state for viewing records
  const [viewingRecord, setViewingRecord] = useState(null);

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              name: {props.pet.name}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              animal-type: {props.pet.animal_type}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              birthday: {props.pet.birthday}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              breed: {props.pet.breed}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              color: {props.pet.color}
            </Typography>
            {record === true ? <AddRecord pet_id={props.pet.id} getPetList={() =>{props.getPetList()}}/> : null}
            {record === true ? (
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  setRecord(false);
                }}
              >
                Close
              </Button>
            ) : null}
          </CardContent>
          <CardActions>
            {!record ? (
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => {
                  setRecord(true);
                }}
              >
                Add Record <NoteAddIcon style={{color:"white", marginLeft:"7px"}}/>
              </Button>
            ) : null}

            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                setViewingRecord(true);
              }}
            >
              View Records <VisibilityIcon style={{color:"white", marginLeft:"7px"}}/>
            </Button>
          </CardActions>
        </Card>
        {viewingRecord === true && <ViewRecord rcord={props.pet.records} />}
      </CardContent>
    </Card>
  );
}
