import { useQuery } from "@tanstack/react-query";
import { fetchShop } from "../../services/apiProduct";

export function useShop(id) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shop", id], // Unique key for each shop
    queryFn: () => fetchShop(id), // Fetch function with id
    enabled: !!id, // Prevents query from running if id is null/undefined
    retry: false,
  });

  return { isLoading, data, error };
}
