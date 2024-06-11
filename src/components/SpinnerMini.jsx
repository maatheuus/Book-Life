import { twMerge } from "tailwind-merge";
import { RiLoader4Fill } from "react-icons/ri";

function SpinnerMini({ className }) {
  return (
    <div
      className={twMerge("w-full flex justify-center text-white", className)}
    >
      <RiLoader4Fill className="animate-spin w-6 h-6" />
    </div>
  );
}

export default SpinnerMini;
