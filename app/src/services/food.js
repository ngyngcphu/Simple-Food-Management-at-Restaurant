import { request } from "../utils/request";

export const getFood = () => {
  return request.get("/food", {
    maxContentLength: 1000000,
    maxBodyLength: 1000000,
  });
};