import axios from "axios";

export const request = axios.create({
  baseURL: "https://ltnc-server.tickflow.net",
  //baseURL: "http://localhost:3001"
});