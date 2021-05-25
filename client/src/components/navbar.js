import React from "react";
import {Link} from "react-router-dom";
import firebase from "../utils/firebase";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar(props) {

    const classes = useStyles();

    const logoutButton = () =>{
        firebase.logout();

        // console.log(user);
        props.setUser(null);
    }

  return (
    <>

<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {props.user ? (<Typography variant="h6" className={classes.title}>
          <Link className="navbar-brand" to="/admin">{props.user.first_name} {props.user.last_name}</Link>
          </Typography>) :  null}

          {!props.user ? (<Button color="inherit">
          <Link className="navbar-brand" to="/signup">Signup</Link>
          </Button>) :  null}

          {!props.user ? (<Button color="inherit">
          <Link className="navbar-brand" to="/login">Login</Link>
          </Button>) :  null}

            {props.user ? (
          <Button color="inherit" onClick={logoutButton}>
          Logout
          </Button>) :  null}
        </Toolbar>
      </AppBar>
    </div>
  </>                  

  );
}

export default Navbar;