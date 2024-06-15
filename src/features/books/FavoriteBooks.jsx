import { Suspense, lazy } from "react";
import { HiHeart } from "react-icons/hi";
import { useFavorite } from "./useFavorite";

import Spinner from "../../components/Spinner";
import { useUser } from "../authentication/useUser";
const Heading = lazy(() => import("../../components/Heading"));
const Empty = lazy(() => import("../../components/Empty"));
const BookCard = lazy(() => import("./BookCard"));

function FavoriteBooks() {
  const { user } = useUser();
  const { email } = user?.user || {};
  const { favoriteBooks } = useFavorite(email);

  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-4">
      <Suspense fallback={<Spinner />}>
        {favoriteBooks.length === 0 ? (
          <Empty
            icon={<HiHeart />}
            title="Bookmark some of your favorites books..."
          />
        ) : (
          <Heading title="Favorites books" />
        )}
      </Suspense>

      <ul
        className="list-none mx-auto grid grid-cols-4 flex-wrap gap-x-3 gap-y-3 md:gap-x-3 xl:grid-cols-5 min-[830px]:grid-cols-4 sm:grid-cols-3"
        key={Math.random() * 2}
      >
        {favoriteBooks.length !== 0 &&
          favoriteBooks.map((entry) => {
            const book = entry.volumeInfo;
            const smallImage = book.imageLinks?.smallThumbnail;
            const price = entry.saleInfo?.listPrice?.amount;
            return (
              <Suspense fallback={<Spinner />}>
                <BookCard
                  key={entry.id}
                  id={entry.id}
                  title={book.title}
                  image={smallImage}
                  price={price}
                  linkTo={entry.saleInfo.buyLink}
                />
              </Suspense>
            );
          })}
      </ul>
    </div>
  );
}

export default FavoriteBooks;
