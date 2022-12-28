import axios from "axios";
import { LoginData } from "../types";
import { BASE_URL } from "../utils";

export const login = async (body: LoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}login`, body);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Revise seus dados");
  }
};
