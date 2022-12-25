import axios from "axios";
import { BASE_URL } from "../utils/";

export const getSizes = async () => {
  try {
    return await (
      await axios.get(`${BASE_URL}/sizes`)
    ).data.sizes;
  } catch (error) {
    console.error(error);
  }
};
