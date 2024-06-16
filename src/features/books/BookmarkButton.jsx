import { useNavigate } from "react-router-dom";
import { useBook } from "./useBook";
import { useSetFavorites } from "./useSetFavorites";

import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { useUser } from "../../features/authentication/useUser";
import { useBookmarked } from "../../features/books/useBookmarked";
import { addFavorites } from "../../services/addFavorites";

import SpinnerMini from "../../components/SpinnerMini";
import ButtonIcon from "../../components/ButtonIcon";
import { useFavorite } from "./useFavorite";
import { useLocation } from "react-router-dom";

function BookmarkButton({ id }) {
  const navigate = useNavigate();
  const { favoriteBooks = [] } = useFavorite();
  const { data } = useBook();
  const { isAuthenticated } = useUser();
  const { bookmarked, isSaving } = useBookmarked();
  const { setFavorite } = useSetFavorites();
  const { pathname } = useLocation();

  let books = [];
  const checkData = pathname.includes("favorite");

  checkData ? (books = favoriteBooks) : (books = data);

  const filteredBook = books.find((book) => book.id === id);

  function handleBookmark() {
    if (!isAuthenticated) navigate("/login");

    const { favoriteBooks } = addFavorites(
      books,
      filteredBook.id,
      filteredBook.isBookmarked
    );

    if (favoriteBooks.length === 0) return;

    setFavorite({ ...filteredBook });
    bookmarked(favoriteBooks);
  }

  return (
    <div className="flex">
      <ButtonIcon
        onClick={() => handleBookmark(id)}
        className="ml-auto bg-white rounded-full p-2 cursor-pointer text-stone-800 hover:animate-pulse"
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
      </ButtonIcon>
    </div>
  );
}

export default BookmarkButton;
//   // if (favorites.length === 0) return;
//   // setFavorites(favorites);
// }
// if (bookToUpdate.isBookmarked === false) {
// }

// const bookmarkCopy = { ...bookToUpdate };
// let newBook = {};

// if (bookToUpdate) {
//   newBook = {
//     ...bookmarkCopy,
//     isBookmarked: true,
//   };
// }
// console.log(newBook);

// setIsBookmarked((isSave) => !isSave);

// if (bookToUpdate.isBookmarked) {
//   console.log("Bookmarked", bookToUpdate);
//  const favorites = addFavorites(data, id, isSave);
