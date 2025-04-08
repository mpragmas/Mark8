import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      toast.success("Account created successful ");
      localStorage.setItem("token", data.token);
      navigate("/home");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    mutate,
    isLoading,
  };
}
