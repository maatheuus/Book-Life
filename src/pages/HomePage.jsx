import { lazy, Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const Spinner = lazy(() => import("../components/Spinner"));
const Main = lazy(() => import("../components/Main"));

function HomePage() {
  const { pathname } = useLocation();
  return (
    <div className="grid grid-rows-6 grid-cols-8 gap-x-6 h-screen bg-gray-200/75 p-6 lg:grid-cols-6">
      <Sidebar />

      <main className="col-span-8 row-span-full row-start-2 row-end-6 overflow-y-scroll sm:row-span-full">
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
