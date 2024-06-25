import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (user) => {
      toast.success("Login successful!");
      queryClient.setQueryData(["user"], () => user);
      navigate("/");
    },
    onError: () => toast.error("Provided email or password are incorrect"),
  });

  return { isLoading, login };
}
