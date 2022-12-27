import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../common";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./validator";
import { Box } from "@chakra-ui/react";

export const LoginForm = () => {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box w="300px" marginTop="20px">
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <FormInput
            placeholder="Insira seu e-mail"
            htmlFor="email"
            label="E-mail"
            name="email"
            id="name"
          />
          <FormInput
            placeholder="Insira sua senha"
            htmlFor="password"
            label="Senha"
            name="password"
            id="password"
          />
          <input type="submit" />
        </FormProvider>
      </form>
    </Box>
  );
};
