import { useQuery } from "@tanstack/react-query";
import { fetchAllShops } from "../../services/apiProduct";

export function useShops() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["shop"],
    queryFn: fetchAllShops,
  });
  return { isLoading, data, error };
}
