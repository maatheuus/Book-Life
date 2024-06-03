import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBook } from "./useBook";
import { useSearchParams } from "react-router-dom";

export function useSetQuery() {
  const { setQuery } = useBook();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryClient = useQueryClient();

  const { isLoading: isSearching, mutate: searchBooks } = useMutation({
    mutationFn: ({ query }) => setQuery(query),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isSearching, searchBooks };
}
