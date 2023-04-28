import { request } from "../utils/request";

export const getFood = () => {
  return request.get("/food");
};

export const putFood = (id, editFood) => {
  return request.put(`/food/${id}`, editFood);
};

export const deleteFood = (id) => {
  return request.delete(`/food/${id}`);
};
export const addFood = (newFood) => {
  return request.post("/food", newFood);
};
