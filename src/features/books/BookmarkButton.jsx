import { useNavigate } from "react-router-dom";
import { useBook } from "./useBook";

import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useUser } from "../../features/authentication/useUser";
import { useBookmarked } from "../../features/books/useBookmarked";
import { addFavorites } from "../../services/addFavorites";

import SpinnerMini from "../../components/SpinnerMini";
import ButtonIcon from "../../components/ButtonIcon";
import { useFavorite } from "./useFavorite";
import { useLocation } from "react-router-dom";

function BookmarkButton({ id, children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  // const { bookmarked, isSaving } = useBookmarked();
  const { favoriteBooks, bookmarked, isSaving } = useFavorite();
  const { books: data } = useBook();
  const { pathname } = useLocation();

  const checkData = pathname.includes("favorite");
  let books = [];

  checkData ? (books = favoriteBooks) : (books = data);

  const filteredBook = books.find((book) => book.id === id);

  function handleBookmark() {
    if (!isAuthenticated) navigate("/login");

    const { favoriteBooks } = addFavorites(
      books,
      filteredBook.id,
      filteredBook.isBookmarked
    );

    bookmarked(favoriteBooks);
  }

  return (
    <div className="flex">
      <ButtonIcon
        onClick={() => handleBookmark(id)}
        variation="primary"
        className="ml-auto  rounded-full p-2 cursor-pointer text-gray-primary hover:animate-pulse"
      >
        {filteredBook?.isBookmarked ? (
          isSaving ? (
            <SpinnerMini className="text-primary w-4" />
          ) : (
            <HiHeart className="fill-primary" />
          )
        ) : isSaving ? (
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
