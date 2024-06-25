import { useState, lazy, Suspense } from "react";
import { RiSearch2Line, RiHeart3Line, RiHome5Line } from "react-icons/ri";
import ButtonIcon from "./ButtonIcon";

const Modal = lazy(() => import("./Modal"));

function Navbar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const close = setModalIsOpen;
  const open = () => setModalIsOpen(true);

  return (
    <nav className="flex flex-col justify-between h-4/5">
      <ul className="list-none flex flex-col items-start gap-6">
        <li>
          <ButtonIcon variation="primary" to="/">
            <RiHome5Line className="w-6 h-6" /> <span>Home</span>
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon variation="primary" onClick={open}>
            <RiSearch2Line className="w-6 h-6" /> <span>Search</span>
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon variation="primary" to="/book/favorite">
            <RiHeart3Line className="w-6 h-6" /> <span>My Books</span>
          </ButtonIcon>
        </li>
      </ul>
      <Suspense>{modalIsOpen && <Modal closeModal={close} />}</Suspense>
    </nav>
  );
}

export default Navbar;
