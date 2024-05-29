import { BookMarked } from "lucide-react";
import { Search } from "lucide-react";
import { Home } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex flex-col justify-between h-4/5">
      <ul className="list-none flex flex-col items-start gap-2">
        <li>
          <button className="flex gap-x-4 text-sm hover:text-primary transition-colors duration-200">
            <Home /> <span>Home</span>
          </button>
        </li>
        <li>
          <button className="flex gap-x-4 text-sm hover:text-primary transition-colors duration-200">
            <Search /> <span>Search</span>
          </button>
        </li>
        <li>
          <button className="flex gap-x-4 text-sm hover:text-primary transition-colors duration-200">
            <BookMarked /> <span>My Books</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
