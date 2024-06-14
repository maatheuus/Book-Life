import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser.js";

export function useBookmarked() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: bookmarked, isPending: isSaving } = useMutation({
    mutationFn: ({ favoriteBooks }) => {
      const data = {
        user: user.user,
        favoriteBooks,
        totalBooks: favoriteBooks.length,
      };
      // return postBookmarked(data);
    },
    onMutate(data, err) {
      if (err) throw new Error(err);

      queryClient.setQueryData(["favorites-book"], () => data);
    },
  });

  return { bookmarked, isSaving };
}
