import axios from "axios";
import API_CONFIG from "./apiConfig";

 const apiUrl = API_CONFIG.url;

export const  login = (userData) => {
    return axios.post(apiUrl + "/admin/login", userData);
};

export const getAccount = (accountId) => {
    return axios.get(apiUrl + "/auth/account/"+accountId);
};

export const getArtists = () => {
    return axios.get(apiUrl + "/auth/artists");
};

export const getOneArtists = (artistId) => {
    return axios.get(apiUrl + "/auth/artists/"+artistId);
};

