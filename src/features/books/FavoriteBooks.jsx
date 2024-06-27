import { Suspense, lazy } from "react";
import { HiHeart } from "react-icons/hi";
import { useFavorite } from "./useFavorite";

const Spinner = lazy(() => import("../../components/Spinner"));
const BookPlaceholderCard = lazy(() => import("./BookPlaceholderCard"));
const Heading = lazy(() => import("../../components/Heading"));
const Empty = lazy(() => import("../../components/Empty"));
const BookCard = lazy(() => import("./BookCard"));

function FavoriteBooks() {
  const { favoriteBooks = [], isLoading } = useFavorite();

  if (isLoading) {
    return (
      <div className="h-auto flex flex-wrap gap-4">
        <Suspense>
          <BookPlaceholderCard />
        </Suspense>
      </div>
    );
  }
  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-4">
      <Suspense fallback={<Spinner />}>
        {favoriteBooks.length === 0 ? (
          <Empty
            icon={<HiHeart className="w-16 h-6" />}
            title="Bookmark some of your favorites books..."
            className="text-base px-8"
          />
        ) : (
          <Heading title="Favorites">
            <span className="text-gray-primary text-base">
              {favoriteBooks.length} bookmarks
            </span>
          </Heading>
        )}
      </Suspense>

      <ul
        key={Math.random() * 2}
        className="list-none mx-auto grid grid-cols-4 flex-wrap gap-x-3 gap-y-3 md:gap-x-3 xl:grid-cols-6 min-[830px]:grid-cols-4 sm:grid-cols-3"
      >
        {favoriteBooks.length !== 0 &&
          favoriteBooks.map((entry) => {
            const book = entry.volumeInfo;
            const smallImage = book.imageLinks?.smallThumbnail;
            const price = entry.saleInfo?.listPrice?.amount;

            return (
              <BookCard
                key={entry.id}
                id={entry.id}
                title={book.title}
                image={smallImage}
                price={price}
                linkTo={entry.saleInfo.buyLink}
                isPageFavorite
              />
            );
          })}
      </ul>
    </div>
  );
}

export default FavoriteBooks;
