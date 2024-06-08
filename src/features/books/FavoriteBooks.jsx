import { Suspense, lazy } from "react";
import { HiHeart } from "react-icons/hi";

import { useBookmarked } from "./useBookmarked";

import Heading from "../../components/Heading";
import Spinner from "../../components/Spinner";
const Empty = lazy(() => import("../../components/Empty"));

function FavoriteBooks() {
  const { favorites, isLoading } = useBookmarked();
  let books = [];

  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-4">
      <Suspense fallback={<Spinner />}>
        {books.length === 0 ? (
          <Empty
            icon={<HiHeart />}
            title="Bookmark some of your favorites books..."
          />
        ) : (
          // </Suspense>
          //   <Suspense fallback={<Spinner />}>
          <Heading title="Favorites books" />
        )}
      </Suspense>

      <ul
        className="list-none mx-auto grid grid-cols-2 flex-wrap gap-x-3 gap-y-3 md:gap-x-3 xl:grid-cols-5 min-[830px]:grid-cols-4 sm:grid-cols-3"
        key={Math.random() * 2}
      >
        {books.length !== 0 &&
          books.map((entry) => {
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
              />
            );
          })}
      </ul>
      <Suspense>
        {/* {books.length !== 0 && <Pagination totalResults={data?.totalItems} />} */}
      </Suspense>
    </div>
  );
}

export default FavoriteBooks;
