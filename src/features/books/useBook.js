import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchBook } from "../../services/apiBooks";
import { useSearchParams } from "react-router-dom";

export function useBook() {
  const [query, setQuery] = useState();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("filterBy");
  const filter =
    !filterValue || filterValue === "noFilter" ? null : filterValue;

  // SORT
  const sortValue = searchParams.get("sortBy");
  const sortBy = !sortValue || sortValue === "noSort" ? null : sortValue;

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data, isLoading } = useQuery({
    enabled: !!query,
    queryKey: ["books", page, filter, sortBy],
    queryFn: () => searchBook(query, page, filter, sortBy),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 5 * 2,
    refetchOnMount: false,
    keepPreviousData: true,
  });

  return { isLoading, data, setQuery };
}
