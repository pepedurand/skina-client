import axios from "axios";
import { BASE_URL } from "../utils/";

export const getPizzas = async () => {
  try {
    return await axios.get(`${BASE_URL}pizzas`);
  } catch (error) {
    console.error(error);
  }
};
