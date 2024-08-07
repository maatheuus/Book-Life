import { lazy, Suspense } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useBook } from "./useBook";
import { useFavorite } from "./useFavorite";
import {
  HiOutlineShoppingCart,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { HiArrowSmLeft } from "react-icons/hi";

import BookmarkButton from "./BookmarkButton";
import ButtonIcon from "../../components/ButtonIcon";
import StarIcons from "../../components/StarIcons ";
const BookPlaceholder = lazy(() => import("./BookPlaceholder"));
const image = lazy(() => import("../../assets/images/image-not-found.jpeg"));
const Empty = lazy(() => import("../../components/Empty"));

function BookDetail() {
  const { books: data, isLoading } = useBook();
  const { bookId } = useParams();
  const { favoriteBooks } = useFavorite();
  const { pathname } = useLocation();
  const checkData = pathname.includes("favorite");

  let books = [];
  checkData ? (books = favoriteBooks) : (books = data);

  const curBook = books?.filter((book) => book.id === bookId);

  if (isLoading) {
    return (
      <Suspense>
        <BookPlaceholder />
      </Suspense>
    );
  }
  if (curBook === undefined) {
    return (
      <Suspense>
        <Empty title="No details could be found about the book, select another on please! 🙁" />
      </Suspense>
    );
  }

  return (
    <>
      <div className="bg-primary rounded-full w-6 h-6 my-3">
        <ButtonIcon
          to="../"
          variation="primary"
          className="text-stone-200 hover:text-white transition"
        >
          <HiArrowSmLeft className="w-6 h-6" />
        </ButtonIcon>
      </div>
      <section className="bg-stone-50 rounded-lg relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          {curBook.map((entry, index) => {
            const book = entry.volumeInfo;
            const imgCover = book.imageLinks?.smallThumbnail || image;
            const price = entry.saleInfo?.listPrice?.amount;
            const averageRating = book.averageRating;

            return (
              <div key={index} className="flex flex-col min-[840px]:flex-row">
                <img
                  className="shadow-sm flex-1 rounded-sm overflow-hidden object-fill p-24 max-[500px]:p-10 min-[840px]:p-0 min-[840px]:min-w-64 min-[840px]:max-w-36"
                  src={imgCover}
                  alt="image of the book selected"
                />

                <div className="mt-6 ml-6 px-3">
                  <h1 className="text-xl font-extrabold text-stone-800">
                    {book.title}
                  </h1>
                  {price === undefined ? (
                    <p className="text-sm text-stone-800 font-normal">
                      Not for sale
                    </p>
                  ) : (
                    <p className="text-sm text-stone-800 font-normal">
                      R${" "}
                      <span className="font-semibold text-stone-700">
                        {price}
                      </span>
                    </p>
                  )}
                  <p className="text-sm text-stone-800 font-normal">
                    Author:{" "}
                    <span className="font-semibold text-stone-700">
                      {book.authors?.join(", ")}
                    </span>
                  </p>
                  <p className="text-sm text-stone-800 font-normal">
                    Category:{" "}
                    <span className="font-semibold text-stone-700">
                      {book.categories?.join(", ")}
                    </span>
                  </p>
                  <p className="text-sm text-stone-800 font-normal">
                    N° of pages:{" "}
                    <span className="font-semibold text-stone-700">
                      {book.pageCount}
                    </span>
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <StarIcons rating={averageRating} />
                    </div>
                    {averageRating && (
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        ({averageRating?.toFixed(1)})
                      </p>
                    )}
                  </div>
                  <div className="mt-3 mb-2 flex flex-1 items-center gap-3 flex-col md:gap-6 min-[340px]:flex-row">
                    <div className="flex border min-w-fit">
                      <BookmarkButton id={entry.id}>
                        Add to favorites
                      </BookmarkButton>
                    </div>
                    <div className="flex border min-w-fit">
                      {price !== undefined && (
                        <ButtonIcon
                          variation="primary"
                          className="p-2"
                          to={entry.saleInfo.buyLink}
                          target="_blank"
                        >
                          <HiOutlineShoppingCart className="w-4 h-4" />
                          Add to cart
                        </ButtonIcon>
                      )}
                    </div>
                  </div>
                  {book.description === undefined ? (
                    <p className="mb-6 text-gray-primary hyphens-auto">
                      No description available
                    </p>
                  ) : (
                    <p className="mb-6 text-gray-primary hyphens-auto">
                      {book.description}
                    </p>
                  )}
                  <div className="mb-3">
                    <ButtonIcon
                      variation="primary"
                      className="bg-primary w-28 justify-center py-1 gap-1 rounded-full shadow-sm text-stone-200 lowercase transition duration-300 hover:-translate-y-1 hover:text-white"
                      to={book.previewLink}
                      target="_blank"
                    >
                      See preview
                      <HiArrowTopRightOnSquare className="w-4 h-4" />
                    </ButtonIcon>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default BookDetail;
