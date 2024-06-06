import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Sidebar() {
  return (
    <>
      <div className="w-0 col-span-full row-start-1 z-50 block sm:row-end-6 sm:col-start-1 sm:col-end-1 lg:hidden">
        <label htmlFor="hamburgerMenu" className="hamburguer-menu">
          <input type="checkbox" id="hamburgerMenu" />
        </label>
        <div className="aside">
          <Navbar />
          <Footer />
        </div>
      </div>

      <aside className="bg-stone-50 flex-col justify-between items-center gap-16 py-6 rounded-xl max-w-64 col-start-1 col-end-2 row-start-1 row-end-6 hidden lg:flex">
        <div>
          <Link
            to="/"
            className="text-2xl font-satisfy font-semibold text-primary"
          >
            Book Life
          </Link>
        </div>
        <Navbar />
        <Footer />
      </aside>
    </>
  );
}

export default Sidebar;
