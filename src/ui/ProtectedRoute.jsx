import { useNavigate } from "react-router-dom";
import { useUser } from "../components/auth/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { data: isAuthenticated, isLoading } = useUser();
  console.log(isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <p className="text-center">Loading</p>;

  return children;

  // return  isAuthenticated ? children : null;
}

export default ProtectedRoute;
