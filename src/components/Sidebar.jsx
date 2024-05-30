import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <aside className="bg-stone-50 flex-col justify-between items-center gap-16 py-6 rounded-xl max-w-64 col-start-1 col-end-2 row-start-1 row-end-6 hidden sm:flex">
      <div className="">
        <Link
          to="/"
          className="text-2xl font-satisfy font-semibold text-primary"
        >
          Book Life
        </Link>
      </div>
      <Navbar />
      <footer>
        <p className="text-[10px] text-secondary">
          All the Rights Reserved &#169;
        </p>
        <p className="text-[10px] text-secondary">
          Create and develope by{" "}
          <a
            href="linkedin.com/in/matheusmaat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matheus.
          </a>
        </p>
      </footer>
    </aside>
  );
}

export default Sidebar;
