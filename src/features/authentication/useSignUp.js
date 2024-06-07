import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";

export function useSignUp() {
  const { isLoading, mutate: signUp } = useMutation({
    mutationFn: (data) => signUpApi(data),
    onSuccess: () => {
      console.log("Account successfully created!");
    },
    onError: (err) =>
      console.log(
        err.message || "An error occurred while creating the account"
      ),
  });

  return { isLoading, signUp };
}
