import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const Spinner = lazy(() => import("./components/Spinner"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PageError = lazy(() => import("./pages/PageError"));
const BookPage = lazy(() => import("./pages/BookPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const FavoriteBooksPage = lazy(() => import("./pages/FavoriteBooksPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageError />,

    children: [
      { path: "book/:bookId", element: <BookPage /> },
      { path: "book/favorite", element: <FavoriteBooksPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>

      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 6000,
          },
          style: {
            fontSize: "18px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "bg-zinc-100",
            color: "text-stone-900",
            zIndex: "9999",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
