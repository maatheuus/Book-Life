import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import LoginLayout from "../../components/LoginLayout";
import SpinnerMini from "../../components/SpinnerMini";
import FormAuth from "./FormAuth";

function Login() {
  const { login, isLoading } = useLogin();
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    login(data);
  }

  return (
    <LoginLayout title="Welcome Back">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <FormAuth register={register} errors={errors} />

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
