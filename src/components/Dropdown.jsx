import {
  FaRegCircleUser,
  FaChevronDown,
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import ButtonIcon from "./ButtonIcon";
import { useUser } from "../features/authentication/useUser";

function Dropdown() {
  const { user, isAuthenticated } = useUser();
  const name = user?.user?.name || "";

  return (
    <div className="relative group col-start-6 justify-self-end">
      <ButtonIcon variation="secondary">
        <FaRegCircleUser />
        <span className="text-sm">{isAuthenticated ? name : "Login"}</span>{" "}
        <FaChevronDown className="rotate-0 group-hover:rotate-180 transition-transform duration-300" />
      </ButtonIcon>

      <div className="absolute z-20 bg-stone-50 rounded-lg shadow px-8 group-hover:animate-toggle invisible group-hover:visible">
        {isAuthenticated ? (
          <ButtonIcon
            variation="primary"
            className="py-3 text-gray-500 hover:text-gray-700"
            to=""
          >
            <FaArrowRightFromBracket />
            <span>Sign out</span>
          </ButtonIcon>
        ) : (
          <ButtonIcon
            variation="primary"
            className="py-3 text-gray-500 hover:text-gray-700"
            to="/login"
          >
            <FaArrowRightToBracket />
            <span>Login</span>
          </ButtonIcon>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
