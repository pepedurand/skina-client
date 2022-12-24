import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, SingUpPage } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SingUpPage />} />
    </Routes>
  );
};
