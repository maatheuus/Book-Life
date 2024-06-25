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
    signUp(data);
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
