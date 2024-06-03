import { HiOutlineFilter } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";

function FilterLayout({}) {
  return (
    <div className="group relative col-start-7 col-end-8 justify-self-end">
      <ButtonIcon
        className="text-stone-600 gap-x-6 bg-transparent border border-gray-primary/40 hover:border-gray-primary/80 font-medium rounded-md text-md px-2 py-2.5 flex items-center"
        type="button"
      >
        <span>Filter By</span>
        <HiOutlineFilter />
        <div className="absolute z-20 bg-stone-50 rounded-md shadow px-2 py-3 group-hover:animate-toggle invisible group-hover:visible">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 py-2">
              <div className="flex items-center gap-1 ">
                <input
                  id="none"
                  type="radio"
                  value="none"
                  name="filter"
                  className="btn-radio checked:btn-gradient"
                  // onChange={handleFilterChange}
                  // checked={selectedFilter === "none"}
                />
                <label
                  htmlFor="none"
                  className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
                >
                  None
                </label>
              </div>
            </li>
          </ul>
        </div>
      </ButtonIcon>
    </div>
  );
}

export default FilterLayout;
