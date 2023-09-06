import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

const ProtectedRoute = ({ children }) => {
  const token = useAuth();

  if (!token) return <Navigate to="/login" replace={true} />;

  return children;
};

export default ProtectedRoute;
