import axios from "axios";
import { BASE_URL } from "../utils";

export const getDrinks = async () => {
  try {
    return await axios.get(`${BASE_URL}drinks`);
  } catch (error) {
    console.error(error);
  }
};
