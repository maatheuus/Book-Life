import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBook } from "../../services/apiBooks";

export function useBook() {
  const { data, fetchStatus } = useQuery({
    queryKey: ["books"],
    staleTime: 1000,
    refetchOnWindowFocus: false,
  });

  return { fetchStatus, data };
}
