import axios from "axios";

export const request = axios.create({
  baseURL: "https://zany-luxurious-rattlesnake.glitch.me"
  //baseURL: "http://localhost:3001"
});