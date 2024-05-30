import { RiSearch2Line } from "react-icons/ri";

function SearchForm() {
  return (
    <form className="w-96">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 text-gray-primary">
          <button>
            <RiSearch2Line />
          </button>
        </div>
        <div className="group">
          <input
            placeholder="Search books here"
            className="block w-full py-2 ps-10 text-base text-gray-primary border border-gray-primary/40 rounded-lg focus:ring-gray-400 outline-none focus:border-gray-400 "
            id="default-search"
            type="text"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
