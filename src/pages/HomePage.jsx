import { lazy, Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const Spinner = lazy(() => import("../components/Spinner"));
const Main = lazy(() => import("../components/Main"));

function HomePage() {
  const { pathname } = useLocation();
  return (
    <div className="grid grid-rows-10 grid-cols-7 gap-x-6 h-screen p-6 lg:grid-cols-6 lg:grid-rows-5">
      <Sidebar />

      <main className="col-span-8 row-start-2 row-end-10 overflow-y-scroll sm:row-span-full">
        <div className="h-full">
          <Header />

          <Suspense fallback={<Spinner />}>
            {pathname === "/" && <Main />}
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
