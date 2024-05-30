import { lazy, Suspense } from "react";
// import Spinner from "./Spinner";
import BookCard from "../features/books/BookCard";
// const Heading = lazy(() => import("./Heading"));
// const BookCard = lazy(() => import("../features/books/BookCard"));
// const Empty = lazy(() => import("./Empty"));
// import BookPlaceholderCard from "../features/books/BookPlaceholderCard";
import { useBook } from "../features/books/useBook";
import { getBook } from "../services/apiBooks";
const BookPlaceholderCard = lazy(() =>
  import("../features/books/BookPlaceholderCard")
);

function Main() {
  // const { isLoading, book = [] } = useBook();

  // if (isLoading) return <BookPlaceholderCard />;
  // const data = book?.items;

  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-5">
      {/* <Suspense fallback={<Spinner />}>
        <Empty />
      </Suspense> */}
      <ul className="list-none flex flex-wrap gap-5">
        {/* {data.map((entry) => {
          const book = entry.volumeInfo;
          const smallImage = book.imageLinks?.smallThumbnail;
          const price = entry.saleInfo?.listPrice?.amount;
          return (
            <BookCard
              key={book.id}
              title={book.title}
              image={smallImage}
              price={price}
            />
          );
        })} */}
      </ul>
      {/* <Heading /> */}
    </div>
  );
}

export default Main;
