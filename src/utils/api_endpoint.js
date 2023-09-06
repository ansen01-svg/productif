import axios from "axios";

const API = axios.create({
  // baseURL: process.env.REACT_APP_URL
  baseURL: "https://sanva.onrender.com/",
});

export default API;
