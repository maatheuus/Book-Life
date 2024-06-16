import { useQuery } from "@tanstack/react-query";
import { getBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser";

export function useFavorite() {
  const { user } = useUser();
  const { email } = user?.user || {};

  const { data: favoriteBooks, isPending: isLoading } = useQuery({
    queryKey: ["favorites-book"],
    queryFn: () => getBookmarked({ email }),
  });

  return { isLoading, favoriteBooks };
}
