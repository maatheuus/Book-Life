import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { setBookmarked } from "../../services/apiBooks";

export function useBookmarked() {
  const [favorites, setFavorites] = useState([]);
  const queryClient = useQueryClient();

  const { isLoading: isSearching, mutate } = useMutation({
    mutationFn: (book) => setFavorites(book),
    onMutate: (book, error) => {
      console.log("favorites", favorites);
      console.log("book", book);
      //   queryClient.setQueriesData(["user", "favorites-books"], () => favorites);
      //   queryClient.invalidateQueries({
      //     queryKey: ["books"],
      //   });
    },
    onError: (err) => console.log(err),
  });

  return { favorites, setFavorites, mutate };
}
