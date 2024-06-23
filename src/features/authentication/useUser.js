import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}
