import axios from "axios";
import { BASE_URL } from "../utils";

export const getCombos = async () => {
  try {
    return await axios.get(`${BASE_URL}combos`);
  } catch (error) {
    console.error(error);
  }
};
