import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authServices";

export const useUser = () => {
  // Simulate authentication check
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    // queryFn: async () => {
    //   console.log(getUser());

    //   const token = localStorage.getItem("token");
    //   if (!token) {
    //     isAuthenticated = false;
    //     throw new Error("No token found");
    //   }
    //   let isAuthenticated = true; // Default to authenticated
    //   return isAuthenticated;
    // },
    retry: false, // Don't retry if there's no token
  });

  console.log(data);

  return { isLoading, data };
};
