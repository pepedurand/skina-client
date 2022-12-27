import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface FormInputProps extends InputProps {
  htmlFor: string;
  label: string;
  name: string;
  hasError: boolean;
  errorMessage: string;
}

export const FormInput = ({
  htmlFor,
  label,
  name,
  placeholder,
  hasError,
  errorMessage,
}: FormInputProps) => {
  const { register } = useFormContext(); // retrieve all hook methods
  return (
    <FormControl>
      <FormLabel fontFamily={"Inria Sans"} htmlFor={htmlFor}>
        {label}
      </FormLabel>
      <Input id={name} placeholder={placeholder} {...register(name)} />
      <FormHelperText color="red">
        {hasError && <>{errorMessage}</>}
      </FormHelperText>
    </FormControl>
  );
};
