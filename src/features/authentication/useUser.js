import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data } = useQuery({
    queryKey: ["user"],
  });

  const name = data?.data?.user?.name;
  const user = data?.data?.user;

  return {
    user,
    name,
    isAuthenticated: data?.role === "authenticated",
  };
}
