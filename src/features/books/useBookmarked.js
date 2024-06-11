import { useMutation } from "@tanstack/react-query";
import { postBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser.js";

export function useBookmarked() {
  const { user } = useUser();

  const { mutate: setFavorites, isPending: isSaving } = useMutation({
    mutationFn: ({ favoriteBooks }) => {
      const data = {
        user: user.user,
        favoriteBooks,
        totalBooks: favoriteBooks.length,
      };
      return postBookmarked(data);
    },
  });

  return { setFavorites, isSaving };
}
