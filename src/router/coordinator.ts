import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToSignUp = () => {
    navigate(`/signup`);
  };
  return { goToLogin, goToHome, goToSignUp };
};
