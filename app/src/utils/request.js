import axios from "axios";

export const request = axios.create({
  //baseURL: "https://my-json-server.typicode.com/ngyngcphu/Simple-Food-Management-at-Restaurant"
  baseURL: "http://localhost:3001"
});