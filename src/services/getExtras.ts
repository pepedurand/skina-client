import axios from "axios";
import { BASE_URL } from "../utils";

export const getExtras = async () => {
  try {
    return await (
      await axios.get(`${BASE_URL}extras`)
    ).data.extras;
  } catch (error) {
    console.error(error);
  }
};
