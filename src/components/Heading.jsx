import Filter from "./Filter";
import Sort from "./Sort";

function Heading({ title, filters, children }) {
  return (
    <div className="bg-stone-50 w-full mb-4 h-auto px-4 py-3 rounded-xl gap-3 flex flex-wrap md:grid md:grid-cols-2 items-center justify-between md:col-span-full md:gap-x-5">
      <div className="flex col-span-2 gap-2 items-center justify-start md:col-span-1">
        <h2 className="uppercase text-lg font-semibold text-stone-600">
          {title}
        </h2>
        {children}
      </div>
      {filters && (
        <div className="flex col-span-2 gap-4 justify-around md:justify-end w-full md:col-span-1 min-[500px]:w-auto">
          <Filter />
          <Sort />
        </div>
      )}
    </div>
  );
}

export default Heading;
