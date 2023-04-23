import axios from "axios";

export const request = axios.create({
  baseURL: "http://tickflow.net",
  //baseURL: "http://localhost:3001"
});