import { twMerge } from "tailwind-merge";
function Button({ variation, className, children, ...props }) {
  const base =
    "text-stone-600 gap-4 bg-transparent border border-gray-primary/40 hover:border-gray-primary/80 font-medium rounded-md text-md px-5 py-2.5 flex items-center";

  const styles = {
    primary: base,
  };
  return (
    <button className={twMerge(styles[variation], className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
