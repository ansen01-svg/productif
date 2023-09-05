import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

const ProtectedRoute = ({ children }) => {
  const currentUser = useAuth();

  if (!currentUser) return <Navigate to="/login" replace={true} />;

  return children;
};

export default ProtectedRoute;
