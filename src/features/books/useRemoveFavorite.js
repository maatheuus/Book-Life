import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser";
import { flattenArray, removeDuplicates } from "../../services/utils";
import toast from "react-hot-toast";

export function useRemoveFavorite() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: removeFavorite, isPending: isDeleting } = useMutation({
    mutationKey: ["removeFavorite"],
    mutationFn: () => {
      const queryData = queryClient.getQueryData(["favorites-books"]);
      return removeBookmarked({
        user: user,
        favoriteBooks: queryData,
        totalBooks: queryData?.length,
      });
    },
    onMutate(newBook, err) {
      if (err)
        toast.error("Something went wrong, try again later please!", err);

      queryClient.cancelQueries({ queryKey: ["favorites-books"] });

      queryClient.setQueryData(["favorites-books"], (old) => {
        const favorites = old ? [...old, newBook] : newBook;
        const flatArray = flattenArray(favorites);
        const uniqueArray = removeDuplicates(flatArray);

        const filterArray = uniqueArray.filter(
          (item) => item.isBookmarked === true
        );

        return filterArray;
      });
    },
    onSuccess: () => {
      toast.success("Removed!");
      queryClient.invalidateQueries({
        queryKey: ["favorites-books"],
      });
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError() {
      toast.error("Something went wrong, try again later please!");
    },
  });

  return { removeFavorite, isDeleting };
}
