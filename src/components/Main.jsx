import { lazy, Suspense } from "react";
import { useBook } from "../features/books/useBook";

import Empty from "./Empty";
import Spinner from "./Spinner";
import { LuLibrary } from "react-icons/lu";

const Pagination = lazy(() => import("./Pagination"));
const BookCard = lazy(() => import("../features/books/BookCard"));
const BookPlaceholderCard = lazy(() =>
  import("../features/books/BookPlaceholderCard")
);
const Heading = lazy(() => import("./Heading"));

function Main() {
  const { books, isLoading, totalItems } = useBook();

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
        {books === undefined ? (
          <Empty icon={<LuLibrary />} title="Search for some books..." />
        ) : (
          <Heading title="About" filters>
            <span className="text-gray-primary text-base">
              {totalItems} results
            </span>
          </Heading>
        )}
      </Suspense>
      <ul
        key={Math.random() * 2}
        className="list-none mx-auto grid grid-cols-2 flex-wrap gap-x-3 gap-y-3 md:gap-x-3 xl:grid-cols-5 min-[830px]:grid-cols-4 sm:grid-cols-3"
      >
        {books !== undefined &&
          books.map((entry) => {
            const book = entry.volumeInfo;
            const smallImage = book.imageLinks?.smallThumbnail;
            const price = entry.saleInfo?.listPrice?.amount;
            const averageRating = book.averageRating;

            return (
              <BookCard
                key={entry.id}
                id={entry.id}
                averageRating={averageRating}
                title={book.title}
                image={smallImage}
                price={price}
                linkTo={entry.saleInfo.buyLink}
              />
            );
          })}
      </ul>
      <Suspense>
        {books !== undefined && <Pagination totalResults={books?.totalItems} />}
      </Suspense>
    </div>
  );
}

export default Main;
