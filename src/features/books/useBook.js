import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchBook } from "../../services/apiBooks";
import { useSearchParams } from "react-router-dom";

export function useBook() {
  const [query, setQuery] = useState();
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isFetching } = useQuery({
    enabled: !!query,
    queryKey: ["books", page],
    queryFn: () => searchBook(query, page),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 2,
    refetchOnMount: false,
    keepPreviousData: true,
  });
  return { data, setQuery, isFetching };
}
