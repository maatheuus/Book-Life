import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { postBookmarked } from "../../services/apiBooks";
import { flattenArray, removeDuplicates } from "../../services/utils";
import toast from "react-hot-toast";

export function useAddFavorite() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: bookmarked, isPending: isSaving } = useMutation({
    mutationKey: ["addFavorite"],
    mutationFn: () => {
      const queryData = queryClient.getQueryData(["favorites-books"]);
      return postBookmarked({
        user: user,
        favoriteBooks: queryData,
        totalBooks: queryData.length,
      });
    },
    onMutate(arrBooks, err) {
      if (err) throw new Error("Something went wrong", err);

      queryClient.setQueryData(["favorites-books"], (oldValue) => {
        const favorites = oldValue ? [...oldValue, arrBooks] : arrBooks;
        const flatArray = flattenArray(favorites);
        const uniqueArray = removeDuplicates(flatArray);

        const filterArray = uniqueArray.filter(
          (item) => item.isBookmarked === true
        );

        return filterArray;
      });
    },
    onSuccess: () => toast.success("Bookmarked!"),
    onError: () => toast.error("Something went wrong, try again later please!"),
  });

  return { bookmarked, isSaving };
}
