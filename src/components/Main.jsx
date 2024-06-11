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
  const { data, isLoading } = useBook();
  let books = [];

  if (data?.items) {
    books = data.items;
  }

  if (isLoading) {
    return (
      <div className="flex gap-4">
        <Suspense>
          <BookPlaceholderCard />
          <BookPlaceholderCard />
          <BookPlaceholderCard />
          <BookPlaceholderCard />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-4">
      {books.length === 0 && (
        <Empty icon={<LuLibrary />} title="Search for some books..." />
      )}
      <Suspense fallback={<Spinner />}>
        {books.length !== 0 && (
          <Heading title="About">
            <span className="text-gray-primary text-base">
              {data?.totalItems} results
            </span>
          </Heading>
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
        {books.length !== 0 && <Pagination totalResults={data?.totalItems} />}
      </Suspense>
    </div>
  );
}

export default Main;
