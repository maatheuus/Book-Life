import Navbar from "./Navbar";

function Sidebar() {
  return (
    <aside className="bg-stone-50 flex flex-col justify-between items-center gap-16 py-6 col-start-1 col-end-2 row-span-full rounded-lg">
      <div className="">
        <h1 className="text-2xl font-satisfy font-semibold text-primary">
          Book Life
        </h1>
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
