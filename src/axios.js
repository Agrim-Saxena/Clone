import axios from "axios";

// * base url to make requests to the movie databases */ 
const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
});

export default instance;