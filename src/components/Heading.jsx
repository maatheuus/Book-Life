import Filter from "./Filter";
import Sort from "./Sort";

function Heading({ totalResults }) {
  return (
    <div className="bg-stone-50 mb-4 h-16 rounded-xl grid grid-cols-8 items-center justify-between px-4">
      <div className="flex col-span-1 gap-2 items-center">
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
