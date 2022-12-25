import axios from "axios";
import { BASE_URL } from "../utils";

export const getCombos = async () => {
  try {
    return await (
      await axios.get(`${BASE_URL}combos`)
    ).data.combos;
  } catch (error) {
    console.error(error);
  }
};
