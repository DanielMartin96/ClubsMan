import axios from "axios";

const rapidApi = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v2",
  headers: {
    "x-rapidapi-key": "6b8e03b314msh8e37cb04ca92089p12830fjsn576c76fdbd3a",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  },
});

export default rapidApi;
