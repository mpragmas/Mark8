import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from "../../services/authServices";

export const useAuth = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (data) => {
      // console.log(data.token);
      localStorage.setItem("token", data.token);
      toast.success("Login successful!");

      navigate("/home");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
};
