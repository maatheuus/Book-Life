import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser.js";

export function useBookmarked() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { mutate: bookmarked, isPending: isSaving } = useMutation({
    mutationFn: (bookmarked) => {
      const data = {
        user: user.user,
        favoriteBooks: bookmarked,
        totalBooks: bookmarked.length,
      };
      return postBookmarked(data);
    },
    onMutate(value, err) {
      if (err) throw new Error(err);
      console.log(value);
      const data = value?.filter((item = item.isBookmarked === true));
      queryClient.setQueryData(["favorites-book"], () => data);
    },
  });

  return { bookmarked, isSaving };
}
