import { RxCaretSort } from "react-icons/rx";
import ButtonIcon from "./ButtonIcon";

function Sort() {
  return (
    <div className="group relative col-start-8 col-end-9 justify-self-end">
      <ButtonIcon variation="secondary" type="button">
        <span>Sort By</span>
        <RxCaretSort />
      </ButtonIcon>

      <div className="absolute z-20 bg-stone-50 rounded-md shadow px-2.5 py-3  invisible group-hover:animate-toggle group-hover:visible">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 py-2">
            <div className="flex items-center gap-1 ">
              <input
                id="relevance"
                type="radio"
                value=""
                name="sort"
                className="btn-radio checked:btn-gradient"
              />
              <label
                htmlFor="relevance"
                className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Relevance
              </label>
            </div>
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="flex items-center gap-1">
              <input
                id="newest"
                type="radio"
                value=""
                name="sort"
                className="btn-radio checked:btn-gradient"
              />
              <label
                htmlFor="newest"
                className="ml-2 text-sm font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Newest
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
