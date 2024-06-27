import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="bg-stone-50 mb-4 h-auto py-3 px-4 rounded-xl flex flex-wrap gap-3 sm:grid sm:grid-cols-6 sm:gap-y-0">
      <SearchForm className="col-span-3 mx-auto justify-self sm:grid-cols-5 order-1 sm:order-none" />
      <Dropdown />
    </header>
  );
}

export default Header;
