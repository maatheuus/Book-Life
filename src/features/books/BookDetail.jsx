import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import {
  HiStar,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { useBook } from "./useBook";
import image from "../../assets/images/image-not-found.jpeg";
import ButtonIcon from "../../components/ButtonIcon";
import { HiArrowSmLeft } from "react-icons/hi";
const BookPlaceholder = lazy(() => import("./BookPlaceholder"));

function BookDetail() {
  const { data, isLoading, isFetching } = useBook();
  const { bookId } = useParams();
  const curBook = data.items.filter((book) => book.id === bookId);

  if (isLoading || isFetching) {
    return (
      <Suspense>
        <BookPlaceholder />
      </Suspense>
    );
  }

  return (
    <>
      <div className="bg-primary rounded-full w-6 h-6 my-3">
        <ButtonIcon
          to="/"
          variation="primary"
          className="text-stone-200 hover:text-white transition"
        >
          <HiArrowSmLeft className="w-6 h-6" />
        </ButtonIcon>
      </div>
      <section className="bg-stone-50 rounded-lg relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex" key={Math.random() * 3}>
            {curBook.map((entry) => {
              const book = entry.volumeInfo;
              const imgCover = book.imageLinks?.smallThumbnail || image;
              const price = entry.saleInfo?.listPrice?.amount;

              return (
                <>
                  <img
                    className="shadow-sm w-full min-w-64 max-w-36 rounded-sm overflow-hidden object-fill"
                    src={imgCover}
                    alt="image of the book selected"
                  />

                  <div className="mt-6 ml-6">
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

                    {book.averageRating !== undefined && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <HiStar className="fill-primary" />
                          <HiStar className="fill-primary" />
                          <HiStar className="fill-primary" />
                          <HiStar className="fill-primary" />
                        </div>
                        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                          {book.averageRating?.toFixed(1)}
                        </p>
                      </div>
                    )}
                    <div className="mt-3 mb-2 flex items-center gap-4">
                      <ButtonIcon variation="primary">
                        <HiOutlineHeart className="w-4 h-4" />
                        Add to favorites
                      </ButtonIcon>

                      {price !== undefined && (
                        <ButtonIcon
                          variation="primary"
                          to={entry.saleInfo.buyLink}
                        >
                          <HiOutlineShoppingCart className="w-4 h-4" />
                          Add to cart
                        </ButtonIcon>
                      )}
                    </div>

                    <p className="mb-6 text-gray-primary hyphens-auto">
                      {book.description}
                    </p>

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
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default BookDetail;
