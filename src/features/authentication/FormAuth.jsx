import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import ButtonIcon from "../../components/ButtonIcon";

function FormAuth({ register, getValues, errors, name, confirmPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      {name && (
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-stone-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("name", {
              required: {
                value: true,
                message: "Please, enter your name!",
              },
            })}
          />
          <p className="text-red-600 mb-4 font-medium">
            {errors?.name?.message}
          </p>
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-stone-700"
        >
          Email
        </label>
        <input
          type="email"
          autoComplete="email"
          id="email"
          name="email"
          value="horir@mailinator.com"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("email", {
            required: {
              value: true,
              message: "Please, enter your email!",
            },
            validate: (email) => {
              const regex =
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
              const checkEMail = regex.test(email);
              if (!checkEMail) return "Enter a valid email address";
            },
          })}
        />
        <p className="text-red-600 mb-4 font-medium">
          {errors?.email?.message}
        </p>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-stone-700 relative"
        >
          Password
          <div className="absolute right-2 -bottom-9 flex items-center ps-3 text-gray-primary">
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
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value="Pa$$w0rd!"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          {...register("password", {
            required: {
              value: true,
              message: "Please, enter your password!",
            },
          })}
        />
        <p className="text-red-600 mb-4 font-medium">
          {errors?.password?.message}
        </p>
      </div>
      {confirmPassword && (
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold text-stone-700 relative"
          >
            Confirm your password
            <div className="absolute right-2 -bottom-9 flex items-center ps-3 text-gray-primary">
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
          </label>

          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            {...register("confirmPassword", {
              required: "Please, confirm your password",
              validate: (value) =>
                value === getValues().password || "Passwords does not match!",
            })}
          />

          <p className="text-red-600 mb-1 font-medium">
            {errors?.confirmPassword?.message}
          </p>
        </div>
      )}
    </>
  );
}

export default FormAuth;
