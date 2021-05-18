import React from "react";
import {Link} from "react-router-dom";

function navbar() {
  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light bg-light" id="flex">
        <div class="container-fluid">
            <button class="navbar-toggler" id="toggler1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                        <Link className="navbar-brand" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/login">Login</Link>
                    </li>
                    {/* <!-- <li className="nav-item">
                        <a className="navbar-brand" to="#skills">Skills</a>
                    </li> --> */}
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/admin">Admin</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="navbar-brand" href="/contact">Contacts</a>
                    </li> */}
                    
                </ul>
            </div>
        </div>
    </nav>
  </>                  

  );
}

export default navbar;