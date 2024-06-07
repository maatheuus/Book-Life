import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
function Button({ variation, to, className, children, ...props }) {
  const base =
    "text-stone-600 gap-4 bg-transparent border border-gray-primary/40 hover:border-gray-primary/80 font-medium rounded-md text-md px-5 py-2.5 flex items-center";

  const styles = {
    primary: base,
    login:
      "w-full bg-black text-white p-2 rounded-md focus:outline-none focus:bg-black transition-colors duration-300",
  };
  if (to)
    return (
      <Link
        to={to}
        className={twMerge(styles[variation], className)}
        {...props}
      >
        {children}
      </Link>
    );
  return (
    <button className={twMerge(styles[variation], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
