import { lazy, Suspense } from "react";
import { useBook } from "../features/books/useBook";
import Empty from "./Empty";
import Spinner from "./Spinner";
import Pagination from "./Pagination";

const BookCard = lazy(() => import("../features/books/BookCard"));
const BookPlaceholderCard = lazy(() =>
  import("../features/books/BookPlaceholderCard")
);
const Heading = lazy(() => import("./Heading"));

function Main() {
  const { data, isLoading, isFetching } = useBook();
  let books = [];

  if (data?.items) {
    books = data.items;
  }

  if (isLoading || isFetching) {
    return (
      <Suspense>
        <BookPlaceholderCard />
      </Suspense>
    );
  }

  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-4">
      {books.length === 0 && <Empty />}
      <Suspense fallback={<Spinner />}>
        {books.length !== 0 && <Heading totalResults={data.totalItems} />}
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
              />
            );
          })}
      </ul>
      {books.length !== 0 && <Pagination totalResults={data?.totalItems} />}
    </div>
  );
}

export default Main;
