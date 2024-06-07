import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Spinner = lazy(() => import("./components/Spinner"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PageError = lazy(() => import("./pages/PageError"));
const BookPage = lazy(() => import("./pages/BookPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageError />,
    children: [{ path: "book/:bookId", element: <BookPage /> }],
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
      <ReactQueryDevtools initialIsOpen={false} />

      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
