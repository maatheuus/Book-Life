import { lazy, Suspense } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import Heading from "../components/Heading";

const Spinner = lazy(() => import("../components/Spinner"));
const BookDetail = lazy(() => import("../components/BookDetail"));
const Main = lazy(() => import("../components/Main"));

function HomePage() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-x-6 h-screen bg-gray-200/75 p-6">
      <Sidebar />

      <main className="col-span-6 row-span-full overflow-y-scroll">
        <div className="h-full">
          <Header />
          {/* <Heading /> */}
          <Suspense fallback={<Spinner />}>
            <BookDetail />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <Main />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
