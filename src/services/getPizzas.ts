import axios from "axios";
import { BASE_URL } from "../utils/";

export const getPizzas = async () => {
  try {
    return await (
      await axios.get(`${BASE_URL}`)
    ).data.pizzas;
  } catch (error) {
    console.error(error);
  }
};
