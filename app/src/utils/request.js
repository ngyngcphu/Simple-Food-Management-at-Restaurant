import axios from "axios";

export const request = axios.create({
  baseURL: "https://tickflow.net",
  //baseURL: "http://localhost:3001"
});