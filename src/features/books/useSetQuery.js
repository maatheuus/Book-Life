import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBook } from "./useBook";
import toast from "react-hot-toast";

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
      toast.error(
        "Sorry, something went wrong with your request! Try again later."
      );
      throw new Error(err);
    },
  });

  return { isSearching, searchBooks };
}
