import axios from "axios";

export const request = axios.create({
  baseURL: "http://tickflow.net:3030",
  //baseURL: "http://localhost:3001"
});