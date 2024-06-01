import { useState } from "react";
import { getBook as getBookApi } from "../../services/apiBooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "axios";

export function useSetQuery() {
  const queryClient = useQueryClient();

  const apiKey = import.meta.env.VITE_API_KEY;

  const { isLoading: isSearching, mutate: searchBooks } = useMutation({
    mutationFn: ({ query }) =>
      axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=${apiKey}`
      ),
    onSuccess: (data) => {
      queryClient.setQueryData(["books"], data);
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (err) => console.log(err),
  });

  return { isSearching, searchBooks };
}
