import Filter from "./Filter";
import Sort from "./Sort";

function Heading() {
  return (
    <div className="bg-stone-50 mb-4 h-16 rounded-xl grid grid-cols-8 items-center justify-between px-4">
      <div className="flex col-span-1 gap-2 items-center">
        <h2 className="uppercase text-lg font-semibold text-stone-600">All</h2>
        <span className="text-gray-primary text-base">796 results</span>
      </div>
      <Filter />
      <Sort />
    </div>
  );
}

export default Heading;
