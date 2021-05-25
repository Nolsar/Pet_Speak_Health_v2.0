import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ViewRecord(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} style={{width: "500px"}}>
      {props.rcord.map((record, index) => {
       return ( <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className={classes.heading}
              color="textSecondary"
              gutterBottom
            >
              medication: {record.medication_list}
            </Typography>
            
            <Typography
              className={classes.secondaryHeading}
              color="textSecondary"
              gutterBottom
            >
              vaccines: {record.vaccine_records}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              className={classes.heading}
              color="textSecondary"
              gutterBottom
            >
              client education: {record.client_education}
            </Typography>
            <Typography
              className={classes.heading}
              color="textSecondary"
              gutterBottom
            >
              physical exam: {record.physical_exam}
            </Typography>
          </AccordionDetails>
        </Accordion>)
      })}
    </div>
  );
}
