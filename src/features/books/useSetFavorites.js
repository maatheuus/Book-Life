import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBook } from "./useBook";

export function useSetFavorites() {
  const queryClient = useQueryClient();
  const [value, setValue] = useState();
  const { data } = useBook();

  const { mutate: setFavorite } = useMutation({
    mutationFn: (book) => setValue(book),
    onSuccess: () => {
      queryClient.setQueryData(["books"], () => {
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

  return { setFavorite };
}
