import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import api from "../utils/api2";

function CreateClient(props) {
    const [message, setMessage] = useState(null);

    const creatNewClient = (event) => {
        event.preventDefault();

        api
            .newClient({
                email: event.target.email.value,
                last_name: event.target.last_name.value,
                first_name: event.target.first_name.value,
                address: event.target.address.value,
                city: event.target.city.value,
                state: event.target.state.value,
                zipcode: event.target.zipcode.value,
                cell_phone: event.target.cell_phone.value,
                work_phone: event.target.work_phone.value,
                house_phone: event.target.house_phone.value,
            })
            .then((response) => {
                setMessage(response.data.message);
            });

        console.log(event.target.first_name.value);
    };

    return (
        <div style={{ paddingBottom: "20px" }}>
            {/* {!props.user && <Redirect to="/Login"/>} */}
            <h4>Add New Client</h4>
            <form
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
                onSubmit={creatNewClient}
            >
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="text"
                        id="firstname"
                        placeholder="first name"
                        name="first_name"
                    />
                </div>
                {/* <!--last name--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="text"
                        id="lastname"
                        placeholder="last name"
                        name="last_name"
                    />
                </div>
                {/* <!--address--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="text"
                        id="address"
                        placeholder="address"
                        name="address"
                    />
                </div>
                {/* <!--city--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="text"
                        id="city"
                        placeholder="city"
                        name="city"
                    />
                </div>
                {/* <!--state--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="text"
                        id="state"
                        placeholder="state"
                        name="state"
                    />
                </div>
                {/* <!--zipcode--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="number"
                        id="zipcode"
                        placeholder="zip code"
                        name="zipcode"
                    />
                </div>
                {/* <!--cell phone--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="number"
                        id="cell-phone"
                        placeholder="cell phone"
                        name="cell_phone"
                    />
                </div>
                {/* <!--work phone--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="number"
                        id="work-phone"
                        placeholder="work phone"
                        name="work_phone"
                    />
                </div>
                {/* <!--house phone--> */}
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="number"
                        id="house-phone"
                        placeholder="house phone"
                        name="house_phone"
                    />
                </div>
                <div style={{ minWidth: "40%", margin: "7px 0px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        variant="filled"
                        type="email"
                        id="email-input"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div
                    style={{ display: "none" }}
                    id="alert"
                    class="alert alert-danger"
                    role="alert"
                >
                    <span
                        class="glyphicon glyphicon-exclamation-sign"
                        aria-hidden="true"
                    ></span>
                    <span class="sr-only">Error:</span> <span class="msg"></span>
                </div>
                <div style={{ width: "100%", textAlign: "center", justifyContent: "center"}}><Button
                    type="submit"
                    color="primary" variant="contained"
                >
                    Create Client
                </Button></div>
                <span>{message}</span>
            </form>
        </div>
    );
}

export default CreateClient;
