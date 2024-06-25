import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: signUp } = useMutation({
    mutationFn: (data) => signUpApi(data),
    onSuccess: (user) => {
      toast.success("Account successfully created!");
      queryClient.setQueryData(["user"], () => user);
      navigate("/");
    },
    onError: (err) => {
      // console.log(err);
      toast.error("An error occurred while creating the account");
    },
  });

  return { isLoading, signUp };
}
