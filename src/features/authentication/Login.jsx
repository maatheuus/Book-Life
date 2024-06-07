import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import LoginLayout from "../../components/LoginLayout";
import SpinnerMini from "../../components/SpinnerMini";
import { useLogin } from "./useLogin";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useLogin();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    login(data);
  }

  return (
    <LoginLayout title="Welcome Back">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-stone-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-stone-700"
          >
            Password
          </label>
          <div className="absolute right-2 bottom-2  flex items-center ps-3 text-gray-primary">
            <ButtonIcon
              variation="primary"
              type="button"
              className="hover:text-primary"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <HiOutlineEyeSlash className="w-6 h-6" />
              ) : (
                <HiOutlineEye className="w-6 h-6" />
              )}
            </ButtonIcon>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <Button type="submit" variation="login">
            {isLoading ? <SpinnerMini /> : "Log in"}
          </Button>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-500 text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-stone-900 hover:underline">
            Sign Up here
          </Link>
        </p>
      </div>
    </LoginLayout>
  );
}

export default Login;
