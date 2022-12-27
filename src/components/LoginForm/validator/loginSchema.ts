import * as yup from "yup";
import { LoginData } from "../../../types";

const INPUT_PASSWORD_MESSAGE = "A senha deve ter pelo menos 6 caracteres";
const INPUT_INVALID_EMAIL = "Insira um e-mail válido";
const REQUIRED_VALIDATION = (label: string) => {
  return `${label} é obrigatório.`;
};

export const loginSchema: yup.SchemaOf<LoginData> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email(INPUT_INVALID_EMAIL)
      .required(REQUIRED_VALIDATION("Email")),
    password: yup
      .string()
      .required(REQUIRED_VALIDATION("Senha"))
      .min(6, INPUT_PASSWORD_MESSAGE),
  })
  .required();
