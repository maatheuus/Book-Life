import {
  RiSearch2Line,
  RiHeart3Line,
  RiStarLine,
  RiHomeLine,
} from "react-icons/ri";

import ButtonIcon from "./ButtonIcon";

function Navbar() {
  return (
    <nav className="flex flex-col justify-between h-4/5">
      <ul className="list-none flex flex-col items-start gap-6">
        <li>
          <ButtonIcon variation="primary">
            <RiHomeLine className="w-6 h-6" /> <span>Home</span>
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon variation="primary">
            <RiSearch2Line className="w-6 h-6" /> <span>Search</span>
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon variation="primary">
            <RiStarLine className="w-6 h-6" /> <span>Avaliations</span>
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon variation="primary">
            <RiHeart3Line className="w-6 h-6" /> <span>My Books</span>
          </ButtonIcon>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
