import { useQuery } from "@tanstack/react-query";
import { getBook } from "../../services/apiBooks";

export function useBook() {
  const { isLoading, data: book } = useQuery({
    queryKey: ["books"],
    queryFn: getBook,
  });

  return { isLoading, book };
}
