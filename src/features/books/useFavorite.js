import { useQuery } from "@tanstack/react-query";
import { getBookmarked } from "../../services/apiBooks";

export function useFavorite(email) {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["favorites-book"],
    // queryFn: () => getBookmarked(email),
  });

  console.log(data);

  const filterBookmark = data?.filter((book) => book.isBookmarked === true);

  const favoriteBooks = filterBookmark || [];

  return { isLoading, favoriteBooks };
}
