import axios from "axios";
import { LoginData } from "../types";
import { BASE_URL } from "../utils";

export const login = async (body: LoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}login`, body);
    localStorage.setItem("token", response.data.token);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Revise seus dados");
  }
};
