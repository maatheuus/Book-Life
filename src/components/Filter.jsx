import { HiOutlineFilter } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";

function Filter() {
  return (
    <div className="group relative col-start-7 col-end-8 justify-self-end">
      <ButtonIcon
        className="text-stone-600 gap-x-6 bg-transparent border border-gray-primary/40 hover:border-gray-primary/80 font-medium rounded-md text-md px-2 py-2.5 flex items-center"
        type="button"
      >
        <span>Filter By</span>
        <HiOutlineFilter />
      </ButtonIcon>

      <div className="absolute z-20 bg-stone-50 rounded-md shadow px-2 py-3 group-hover:animate-toggle invisible group-hover:visible">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 py-2">
            <div className="flex items-center gap-1 ">
              <input
                id="none"
                type="radio"
                value=""
                name="filter"
                className="btn-radio checked:btn-gradient"
              />
              <label
                htmlFor="none"
                className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                None
              </label>
            </div>
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="flex items-center gap-1">
              <input
                id="free"
                type="radio"
                value=""
                name="filter"
                className="btn-radio checked:btn-gradient"
              />
              <label
                htmlFor="free"
                className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Free ebooks
              </label>
            </div>
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="flex items-center gap-1">
              <input
                id="paid"
                type="radio"
                value=""
                name="filter"
                className="btn-radio checked:btn-gradient"
              />
              <label
                htmlFor="paid"
                className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Paid ebooks
              </label>
            </div>
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="flex items-center gap-1">
              <input
                id="ebooks"
                type="radio"
                value=""
                name="filter"
                className="btn-radio checked:btn-gradient"
              />
              <label
                htmlFor="ebooks"
                className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Ebooks
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
