import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../components";
import { LoginPage, HomePage, SingUpPage, AdminHomePage } from "../pages";
import { ROLES } from "../utils/";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/admin" element={<LoginPage />} />
      <Route path="/signup" element={<SingUpPage />} />
      <Route element={<RequireAuth allowedRoles={ROLES.ADMIN} />}>
        <Route path="/admin/edit" element={<AdminHomePage />} />
      </Route>
    </Routes>
  );
};
