import { lazy, Suspense } from "react";
import { useBook } from "../features/books/useBook";
import { LuLibrary } from "react-icons/lu";

import Empty from "./Empty";

const Spinner = lazy(() => import("./Spinner"));
const Pagination = lazy(() => import("./Pagination"));
const BookCard = lazy(() => import("../features/books/BookCard"));
const BookPlaceholderCard = lazy(() =>
  import("../features/books/BookPlaceholderCard")
);
const Heading = lazy(() => import("./Heading"));

function Main() {
  const { books, totalItems, isLoading } = useBook();

  if (isLoading) {
    return (
      <div className="h-auto flex flex-wrap gap-4 justify-evenly">
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
          <Empty
            icon={<LuLibrary />}
            title="Search for some books..."
            className="text-lg"
          />
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
        className="list-none grid grid-cols-1 gap-3 xl:grid-cols-5 md:gap-x-3 min-[870px]:grid-cols-4 min-[590px]:grid-cols-3 min-[450px]:grid-cols-2 mx-auto"
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
        {books !== undefined && <Pagination totalResults={totalItems} />}
      </Suspense>
    </div>
  );
}

export default Main;
