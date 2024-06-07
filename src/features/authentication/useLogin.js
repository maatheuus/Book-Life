import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (user) => {
      // queryClient.setQueriesData(["user", user.user]);
      // navigate();
      console.log("Successfully logged in");
    },
    onError: () => {
      console.error("Provided email or password are incorrect");
    },
  });

  return { isLoading, login };
}
