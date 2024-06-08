import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useBookmarked() {
  const [favorites, setFavorites] = useState([]);
  const queryClient = useQueryClient();

  const {
    isLoading: isSearching,
    mutate,
    data,
  } = useMutation({
    mutationFn: (book) => setFavorites(book),
    onSuccess: () => {
      console.log(favorites);
      //   queryClient.setQueriesData(["user", "favorites-books"], () => favorites);
      //   queryClient.invalidateQueries({
      //     queryKey: ["books"],
      //   });
    },
    onError: (err) => console.log(err),
  });
  console.log(data);

  return { favorites, setFavorites, mutate };
}
