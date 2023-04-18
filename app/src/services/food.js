import { request } from "../utils/request";

export const getFood = () => {
  return request.get("/food");
};