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
    }
}

export default api;