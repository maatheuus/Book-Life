import { useBook } from "./useBook";
import { useUser } from "../../features/authentication/useUser";
import { addFavorites } from "../../services/utils";
import { useAddFavorite } from "./useAddFavorite";
import { useRemoveFavorite } from "./useRemoveFavorite";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

import SpinnerMini from "../../components/SpinnerMini";
import ButtonIcon from "../../components/ButtonIcon";
import { useNavigate } from "react-router-dom";

function BookmarkButton({ id, checkData, favoriteBooks, children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const { books: data } = useBook();
  const { removeFavorite, isDeleting } = useRemoveFavorite();
  const { bookmarked, isSaving } = useAddFavorite();

  let books = [];
  let filteredBook = [];

  checkData ? (books = favoriteBooks) : (books = data);
  filteredBook = books?.find((book) => book.id === id);

  function handleBookmark() {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const { favoriteBooks } = addFavorites(
      books,
      filteredBook.id,
      filteredBook.isBookmarked
    );
    bookmarked(favoriteBooks);
  }

  function handleRemoveFavorite() {
    const { favoriteBooks } = addFavorites(
      books,
      filteredBook.id,
      filteredBook.isBookmarked
    );

    removeFavorite(favoriteBooks);
  }

  return (
    <div className="flex">
      <ButtonIcon
        onClick={() => {
          checkData ? handleRemoveFavorite() : handleBookmark();
        }}
        variation="primary"
        className="ml-auto rounded-full gap-2 p-2 cursor-pointer text-gray-primary hover:animate-pulse"
      >
        {filteredBook?.isBookmarked ? (
          isSaving || isDeleting ? (
            <SpinnerMini className="text-primary w-4" />
          ) : (
            <HiHeart className="fill-primary" />
          )
        ) : isSaving || isDeleting ? (
          <SpinnerMini className="text-primary w-4" />
        ) : (
          <HiOutlineHeart className="hover:text-primary" />
        )}
        {children}
      </ButtonIcon>
    </div>
  );
}

export default BookmarkButton;
