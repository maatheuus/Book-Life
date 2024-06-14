import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBook } from "./useBook";
import { useState } from "react";

export function useSetFavorites() {
  const queryClient = useQueryClient();
  const [value, setValue] = useState();
  const { data } = useBook();

  const { mutate: setFavorite, isPending } = useMutation({
    mutationFn: (book) => setValue(book),
    onSuccess: () => {
      queryClient.setQueriesData(["books"], () => {
        const findValue = data.findIndex((query) => query.id === value.id);
        const updateBooks = [...data];

        if (findValue > -1) {
          const item = data[findValue];
          const updateBook = {
            ...item,
            isBookmarked: item.isBookmarked,
          };
          updateBooks[findValue] = updateBook;
        }
        return updateBooks;
      });
    },
  });

  console.log(isPending);
  return { setFavorite };
}
