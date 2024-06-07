import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (user) => {
      const dataUser = { user };
      queryClient.setQueryData(["user"], () => user);
      navigate("/");
    },
    onError: () => {
      console.error("Provided email or password are incorrect");
    },
  });

  return { isLoading, login };
}
//Pa$$w0rd!
