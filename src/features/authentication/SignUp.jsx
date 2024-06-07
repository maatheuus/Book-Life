import { useState } from "react";
import { useSignUp } from "./useSignUp";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import LoginLayout from "../../components/LoginLayout";
import SpinnerMini from "../../components/SpinnerMini";
import FormAuth from "./FormAuth";

function SignUp() {
  const { signUp, isLoading } = useSignUp();
  const { register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    // signUp(data);
    console.log(data);
  }

  return (
    <LoginLayout title="Sign Up">
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
        Join to save your favorite books to read later{" "}
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormAuth
          register={register}
          errors={errors}
          getValues={getValues}
          name
          confirmPassword
        />
        {/* <div>
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
          />
        </div>
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
          <div className="absolute right-2 bottom-2 flex items-center ps-3 text-gray-primary">
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
        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-semibold text-stone-700"
          >
            Confirm your password
          </label>
          <div className="absolute right-2 bottom-2 flex items-center ps-3 text-gray-primary">
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
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div> */}
        <div>
          <Button type="submit" variation="login">
            {isLoading ? <SpinnerMini /> : "Sign Up"}
          </Button>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>
          Already have an account?{" "}
          <Button to="/login" className="text-black hover:underline">
            Login here
          </Button>
        </p>
      </div>
    </LoginLayout>
  );
}

export default SignUp;
