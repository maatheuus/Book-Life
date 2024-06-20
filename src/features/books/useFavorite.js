import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookmarked, postBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser";
import { useLocation } from "react-router-dom";

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

export function useFavorite() {
  const { user } = useUser();
  const { pathname } = useLocation();
  const { email } = user?.user || {};

  const { data: favoriteBooks, isLoading } = useQuery({
    queryKey: ["favorites-books"],
    queryFn: () => {
      if (pathname.includes("favorite")) return getBookmarked({ email });
    },
    keepPreviousData: true,
  });

  const queryClient = useQueryClient();

  // const data = ;

  const { mutate: bookmarked, isPending: isSaving } = useMutation({
    mutationFn: () => {
      const queryData = queryClient.getQueryData(["favorites-books"]);
      console.log(queryData);
      return postBookmarked({
        user: user?.user,
        favoriteBooks: queryData,
        totalBooks: favoriteBooks?.length,
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

        // const data = {
        //   user: user.user,
        //   favoriteBooks: filterArray,
        //   totalBooks: filterArray.length,
        // };
        // postBookmarked(data);

        return filterArray;
      });
    },
  });
  // console.log(favoriteBooks);

  return { isLoading, favoriteBooks, bookmarked, isSaving };
}
