import React from "react";
import SearchForm from "../components/SearchForm";

function Search() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>Search for a client to access records</h1>
            </div>
            <div>
                <SearchForm />
            </div>
        </div>
    );
};



export default Search;