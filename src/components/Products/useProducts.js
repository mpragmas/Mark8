import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/apiProduct";

export function useProducts() {
  const { isLoading, data, error } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["products"],
  });

  return {
    isLoading,
    data,
    error,
  };
}
