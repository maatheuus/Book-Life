import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBook } from "./useBook";

export function useSetQuery() {
  const { setQuery } = useBook();
  const queryClient = useQueryClient();

  const { isLoading: isSearching, mutate: searchBooks } = useMutation({
    mutationFn: ({ query }) => setQuery(query),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (err) => {
      throw new Error(err);
    },
  });

  return { isSearching, searchBooks };
}
