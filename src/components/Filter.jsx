import { useSearchParams } from "react-router-dom";
import { HiOutlineFilter } from "react-icons/hi";
import FilterLayout from "./FiltersLayout";
import ButtonIcon from "./ButtonIcon";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilterChange(e) {
    searchParams.set("filterBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="group relative col-start-7 col-end-8 justify-self-end">
      <ButtonIcon
        className="text-stone-600 gap-x-6 bg-transparent border border-gray-primary/40 hover:border-gray-primary/80 font-medium rounded-md text-md px-2 py-2.5 flex items-center"
        type="button"
      >
        <span>Filter by</span>
        <HiOutlineFilter />
      </ButtonIcon>
      <div className="absolute z-20 bg-stone-50 rounded-md shadow px-2 py-3 group-hover:animate-toggle invisible group-hover:visible">
        <ul className="space-y-2 text-sm">
          <FilterLayout
            id="noFilter"
            onChange={handleFilterChange}
            label="None"
            name="filter"
          />

          <FilterLayout
            id="free-ebooks"
            name="filter"
            label="Free ebooks"
            onChange={handleFilterChange}
          />

          <FilterLayout
            id="paid-ebooks"
            name="filter"
            label="Paid ebooks"
            onChange={handleFilterChange}
          />

          <FilterLayout
            id="ebooks"
            name="filter"
            label="Ebooks"
            onChange={handleFilterChange}
          />
        </ul>
      </div>
    </div>
  );
}

export default Filter;
