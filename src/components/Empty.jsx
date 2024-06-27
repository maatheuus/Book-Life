import { twMerge } from "tailwind-merge";

function Empty({ icon, title, className }) {
  return (
    <div
      className={twMerge(
        "bg-stone-50 rounded-xl w-full flex items-center justify-center gap-x-2 text-xl text-secondary py-10",
        className
      )}
    >
      {icon} <span>{title}</span>
    </div>
  );
}

export default Empty;
