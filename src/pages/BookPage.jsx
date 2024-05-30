import { lazy } from "react";
const BookDetail = lazy(() => import("../components/BookDetail"));

function BookPage() {
  return <BookDetail />;
}

export default BookPage;
