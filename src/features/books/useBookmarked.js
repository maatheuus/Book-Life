import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser.js";

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export function useBookmarked() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: bookmarked, isPending: isSaving } = useMutation({
    onMutate(arrBooks, err) {
      if (err) throw new Error("Something went wrong", err);

      queryClient.setQueryData(["favorites-books"], (oldValue) => {
        const favorites = oldValue ? [...oldValue, arrBooks] : arrBooks;
        const flatArray = flattenArray(favorites);
        const uniqueArray = removeDuplicates(flatArray);

        const filterArray = uniqueArray.filter(
          (item) => item.isBookmarked === true
        );

        const data = {
          user: user.user,
          favoriteBooks: filterArray,
          totalBooks: filterArray.length,
        };
        postBookmarked(data);

        return filterArray;
      });
    },
  });

  return { bookmarked, isSaving };
}
