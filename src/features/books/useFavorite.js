import { useQuery } from "@tanstack/react-query";

export function useFavorite() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["favorites-book"],
  });

  const filterBookmark = data?.filter((book) => book.isBookmarked === true);

  const favoriteBooks = filterBookmark || [];

  return { isLoading, favoriteBooks };
}
