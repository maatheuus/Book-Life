import {
  FaRegCircleUser,
  FaChevronDown,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import ButtonIcon from "./ButtonIcon";

function Dropdown() {
  return (
    <div className="relative group col-start-6 justify-self-end">
      <ButtonIcon variation="secondary">
        <FaRegCircleUser />
        <span>Jamal</span>{" "}
        <FaChevronDown className="rotate-0 group-hover:rotate-180 transition-transform duration-300" />
      </ButtonIcon>

      <div className="absolute z-20 bg-stone-50 rounded-lg shadow px-8 group-hover:animate-toggle invisible group-hover:visible">
        <ButtonIcon
          variation="primary"
          className="py-3 text-gray-500 hover:text-gray-700"
          to="#"
        >
          <FaArrowRightToBracket />
          <span>Sign out</span>
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Dropdown;
