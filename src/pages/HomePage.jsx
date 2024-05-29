// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/Main";

function HomePage() {
  return (
    <div className="grid grid-cols-4 h-screen bg-gray-200/75 p-6 gap-x-6 grid-rows-3">
      <Sidebar />

      <main className="col-span-6 row-span-full">
        <div className="h-full bg-blue-400">
          <Header />
          <Main />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
