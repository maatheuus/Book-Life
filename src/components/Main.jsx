import { lazy, Suspense } from "react";
// import Spinner from "./Spinner";
// import BookCard from "../features/books/BookCard";
// const Heading = lazy(() => import("./Heading"));
// const BookCard = lazy(() => import("../features/books/BookCard"));
// const Empty = lazy(() => import("./Empty"));
// import BookPlaceholderCard from "../features/books/BookPlaceholderCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useBook } from "../features/books/useBook";
// import { getBook } from "../services/apiBooks";
// const BookPlaceholderCard = lazy(() =>
//   import("../features/books/BookPlaceholderCard")
// );

import Empty from "./Empty";
import { useSetQuery } from "../features/books/useSetQuery";

function Main() {
  // console.log(isLoading);
  const { data, fetchStatus } = useBook();
  // const books = data?.data;
  // console.log(fetchStatus);

  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

  // if (isSearching)
  //   return (
  //     <Suspense fallback>
  //       <BookPlaceholderCard />
  //     </Suspense>
  //   );
  // // const data = book?.items;
  // const { book, isLoading } = useSetQuery();
  // console.log(book);
  // if (isLoading || book === undefined) return;

  return (
    <div className="rounded-xl h-auto flex flex-wrap gap-5">
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      {/* <Empty /> */}
      {/* <pre>{JSON.stringify(books)}</pre> */}
      {/* </Suspense> */}
      {/*book === undefined ? (
        <Empty />
      ) : (
        <>
          <ul className="list-none flex flex-wrap gap-5">
             {data.map((entry) => {
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
            })} *
          </ul>
        </>
      )*/}
      {/* </Suspense> */}

      {/* <Heading /> */}
    </div>
  );
}

export default Main;
