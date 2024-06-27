import {
  FaRegCircleUser,
  FaChevronDown,
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import ButtonIcon from "./ButtonIcon";
import { useUser } from "../features/authentication/useUser";
import { logout } from "../services/apiAuth";

function Dropdown() {
  const { name, isAuthenticated } = useUser();

  return (
    <div className="relative mx-auto sm:mx-0 group col-start-6 justify-self-end">
      <ButtonIcon
        variation="secondary"
        className="w-36 gap-3 flex items-center"
      >
        <FaRegCircleUser className="min-w-fit" />
        <span className="text-sm min-w-fit">
          {isAuthenticated ? name : "Login"}
        </span>{" "}
        <FaChevronDown className="rotate-0 min-w-fit group-hover:rotate-180 transition-transform duration-300" />
      </ButtonIcon>

      <div className="absolute flex justify-center z-20 min-w-fit bg-stone-50 rounded-lg shadow group-hover:animate-toggle invisible group-hover:visible">
        {isAuthenticated ? (
          <ButtonIcon
            variation="primary"
            className="py-3 text-gray-500 hover:text-gray-700 px-8"
            onClick={() => {
              window.location.reload(true);
              logout();
            }}
            to="/"
          >
            <FaArrowRightFromBracket />
            <span>Logout</span>
          </ButtonIcon>
        ) : (
          <ButtonIcon
            variation="primary"
            className="py-3 text-gray-500 hover:text-gray-700 px-10"
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
