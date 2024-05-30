import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="bg-stone-50 mb-4 h-16 rounded-xl grid grid-cols-6 items-center justify-between px-4">
      <SearchForm className="col-span-3 sm:grid-cols-5" />
      <Dropdown />
    </header>
  );
}

export default Header;
