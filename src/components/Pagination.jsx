import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import Button from "./Button";

const PAGE_SIZE = 10;
function Pagination({ totalResults }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(totalResults / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function goTo(page) {
    let goToPage;

    if (page === "last") goToPage = pageCount;
    if (page === "first") goToPage = 1;
    searchParams.set("page", goToPage);
    setSearchParams(searchParams);
  }

  const treeDots = (
    <span className="flex items-center px-4 py-2 text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
      ...
    </span>
  );

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t w-full rounded-lg border-gray-200 bg-white px-4 py-3 sm:px-6">
      {/* Button in SMALL SCREEN */}
      <div className="flex flex-1 justify-between sm:hidden">
        <ButtonIcon
          variation="secondary"
          onClick={previousPage}
          className={currentPage === 1 && "cursor-not-allowed"}
          disabled={currentPage === 1}
        >
          Previous
        </ButtonIcon>
        <ButtonIcon
          variation="secondary"
          onClick={nextPage}
          className={currentPage === pageCount && "cursor-not-allowed"}
          disabled={currentPage === pageCount}
        >
          Next
        </ButtonIcon>
      </div>

      {/* Label TOTAL RESULTS */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-base text-gray-700">
            Showing{" "}
            <span className="font-bold">
              {(currentPage - 1) * (PAGE_SIZE + 1)}
            </span>{" "}
            to{" "}
            <span className="font-bold">
              {currentPage === pageCount
                ? totalResults
                : currentPage * PAGE_SIZE}
            </span>{" "}
            of <span>{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {/* if currentPage is NOT the first one, show previous button */}
            {currentPage !== 1 && (
              <ButtonIcon
                onClick={previousPage}
                className="ring-1 px-2 py-2 rounded-md ring-gray-300"
              >
                <span className="sr-only">Previous</span>
                <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </ButtonIcon>
            )}

            {/* if currentPage is greater than 20, show PAGE 1 button */}
            {currentPage > 20 && (
              <>
                <Button
                  onClick={() => goTo("first")}
                  className={`ring-1 px-4 py-2 rounded-sm ring-gray-300 ring-inset ${
                    currentPage === 1 && "cursor-not-allowed"
                  }`}
                >
                  1
                </Button>

                {treeDots}
              </>
            )}

            <span
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-stone-800"
            >
              {currentPage}
            </span>

            {/* if currentPage is the LAST page, show NOTHING */}
            {currentPage === pageCount ? null : (
              <span className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 md:inline-flex">
                {currentPage + 1}
              </span>
            )}

            {/* if currentPage is FAR from the last one, show the LAST PAGE button */}
            {currentPage <= pageCount - 10 && (
              <>
                {treeDots}
                <Button
                  onClick={() => goTo("last")}
                  className={`ring-1 px-2 py-2 rounded-md ring-gray-300 ${
                    currentPage === pageCount && "cursor-not-allowed"
                  }`}
                >
                  {pageCount}
                </Button>
              </>
            )}

            {/* if currentPage is NOT in the last, show next button */}
            {currentPage !== pageCount && (
              <ButtonIcon
                onClick={nextPage}
                className="ring-1 px-2 py-2 rounded-md ring-gray-300"
              >
                <span className="sr-only">Next</span>
                <HiChevronRight className="h-5 w-5" aria-hidden="true" />
              </ButtonIcon>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
