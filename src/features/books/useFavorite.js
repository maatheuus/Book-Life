import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookmarked, postBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { user, isAuthenticated } = useUser();
  const { pathname } = useLocation();
  const { email } = user?.user || {};

  const {
    data: favoriteBooks,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["favorites-books"],
    queryFn: () => {
      if (pathname.includes("favorite") && !isAuthenticated) navigate("/login");
      else if (isAuthenticated) return getBookmarked({ email });

      return [];
    },
    keepPreviousData: true,
  });

  console.log(isFetching);

  const { mutate: bookmarked, isPending: isSaving } = useMutation({
    mutationFn: () => {
      const queryData = queryClient.getQueryData(["favorites-books"]);
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

        return filterArray;
      });
    },
    onSuccess() {
      toast.success("Success!");
    },
    onError() {
      toast.error("Something went wrong, try again later please!");
    },
  });

  return { isLoading, favoriteBooks, bookmarked, isSaving };
}
