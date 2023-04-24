import axios from "axios";

export const request = axios.create({
  baseURL: "https://ltnc-server.tickflow.net",
  //baseURL: "https://zany-luxurious-rattlesnake.glitch.me"
});