import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import ButtonIcon from "../components/ButtonIcon";
import { useSetQuery } from "../features/books/useSetQuery";

function SearchForm({ className, children }) {
  const [value, setValue] = useState();
  const { setQuerySearch, book } = useSetQuery();

  function handleSearch(e) {
    e.preventDefault();
    setQuerySearch(value);
    console.log(book);
  }

  return (
    <form className={className} onSubmit={handleSearch}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 text-gray-primary">
          <ButtonIcon variation="primary" type="submit">
            <RiSearch2Line />
          </ButtonIcon>
        </div>
        <div className="group">
          <input
            placeholder="Search books here"
            className="block w-full py-2 ps-10 text-base text-gray-primary border border-gray-primary/40 rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 "
            id="default-search"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      {children}
    </form>
  );
}

export default SearchForm;
