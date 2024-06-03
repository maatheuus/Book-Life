import { useSearchParams } from "react-router-dom";
import { RxCaretSort } from "react-icons/rx";
import FilterLayout from "./FiltersLayout";
import ButtonIcon from "./ButtonIcon";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSortChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="group relative col-start-8 col-end-9 justify-self-end">
      <ButtonIcon variation="secondary" type="button">
        <span>Sort By</span>
        <RxCaretSort />
      </ButtonIcon>

      <div className="absolute z-20 bg-stone-50 rounded-md shadow px-2.5 py-3  invisible group-hover:animate-toggle group-hover:visible">
        <ul className="space-y-2 text-sm">
          <FilterLayout
            id="noSort"
            label="None"
            name="sort"
            onChange={handleSortChange}
          />
          <FilterLayout
            id="relevance"
            label="Relevance"
            name="sort"
            onChange={handleSortChange}
          />

          <FilterLayout
            id="newest"
            name="sort"
            label="Newest"
            onChange={handleSortChange}
          />
        </ul>
      </div>
    </div>
  );
}

export default Sort;
