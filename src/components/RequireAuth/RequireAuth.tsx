import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROLES } from "../../utils/roles";
import jwt from "jwt-decode";

export interface AllowedRolesProps {
  allowedRoles: "admin" | "normal";
}

interface TokenData {
  exp: number;
  iat: number;
  role: string;
  user_id: string;
}

const token = localStorage.getItem("token");

export const RequireAuth = ({ allowedRoles }: AllowedRolesProps) => {
  const { auth } = useAuth();
  const location = useLocation();

  const data: TokenData | undefined = token ? jwt(token) : undefined;

  return data?.role === ROLES.ADMIN ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

  // quando tiver loggin de regular user, esse codigo vai facilitar o controle do acesso
  // : auth?.user ? (
  //   <Navigate to="/" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/admin" state={{ from: location }} replace />
  // );
};
