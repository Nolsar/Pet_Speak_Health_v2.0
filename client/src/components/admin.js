import React from "react";
import {Redirect} from "react-router-dom";

function admin(props) {
  return (
    <div id="home">
        {!props.user && <Redirect to="/Login"/>}
        <div className="intro">
            I'm SALFO BANDE
            <br/>
            I'm a Full Stact Web Developer
            <br/>
            <a href="/about" className="btn btn-outline-success intro1" >Find More About My Works</a>
        </div>
    </div>
  );
}

export default admin;