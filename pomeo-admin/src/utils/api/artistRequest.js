import axios from "axios";
import API_CONFIG from "./apiConfig";

 const apiUrl = API_CONFIG.url;

 export const getArtists = () => {
    return axios.get(apiUrl + "/auth/artists");
};