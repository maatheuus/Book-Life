import { useState } from "react";
import { getBook } from "../../services/apiBooks";

export function useSetQuery() {
  const [querySearch, setQuerySearch] = useState();

  const book = getBook(querySearch);

  return { setQuerySearch, book };
}
