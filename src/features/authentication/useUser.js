import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useLogin } from "./useLogin";
import { useState } from "react";

export function useUser() {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    // queryFn: () => getCurrentUser(data),
  });
  console.log(user);
  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
  };
}
