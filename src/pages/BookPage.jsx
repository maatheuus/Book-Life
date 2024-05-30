import { lazy } from "react";
const BookDetail = lazy(() => import("../features/books/BookDetail"));

function BookPage() {
  return <BookDetail />;
}

export default BookPage;
