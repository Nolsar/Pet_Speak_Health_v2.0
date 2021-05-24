import axios from "axios";

let api = {
    signup: (data) => {
        return axios.post("/api/signup", data).then((response) =>{
            return response;
        }).catch((error) =>{
            return error;
        })
    },

    login: (data) => {
        return axios.post("/api/login", data).then((response) =>{
            return response;
        }).catch((error) =>{
            return error;
        })
    },

    newClient: (data) => {
        return axios.post("/api/new_members", data).then((response) =>{
            return response;
        }).catch((error) =>{
            return error;
        })
    },

    fName: (data) => {
        return axios.get("/api/search-firstname/client/"+data).then((response) =>{
            return response;
        }).catch((error) =>{
            return error;
        })
    },

    lName: (data) => {
        return axios.get("/api/search-lastname/client/"+data).then((response) =>{
            return response;
        }).catch((error) =>{
            return error;
        })
    },

    addNewPet: (data) => {
        return axios.post("/api/new_pet", data).then((response) =>{
            return response;
        }).catch((error) =>{
            return error;
        })
    }
}

export default api;