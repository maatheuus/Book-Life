import Filter from "./Filter";
import Sort from "./Sort";

function Heading({ totalResults }) {
  return (
    <div className="bg-stone-50 w-full mb-4 h-auto px-4 py-3 rounded-xl gap-3 flex flex-wrap sm:grid sm:grid-cols-4 items-center justify-between md:col-span-full md:gap-x-5">
      <div className="flex col-span-1 gap-2 items-center justify-start">
        <h2 className="uppercase text-lg font-semibold text-stone-600">
          About
        </h2>
        <span className="text-gray-primary text-base">
          {totalResults} results
        </span>
      </div>
      <Filter />
      <Sort />
    </div>
  );
}

export default Heading;
