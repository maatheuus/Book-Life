import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="bg-stone-50 mb-4 h-auto py-3 px-4 rounded-xl gap-y-4 items-center justify-between flex flex-wrap sm:grid sm:grid-cols-6 sm:gap-y-0">
      <SearchForm className="col-span-3 sm:grid-cols-5" />
      <Dropdown />
    </header>
  );
}

export default Header;
