import { RiLoader2Fill } from "react-icons/ri";

function SpinnerMini() {
  return (
    <div className="w-full flex justify-center text-white">
      <RiLoader2Fill className="animate-spin w-8 h-8" />
    </div>
  );
}

export default SpinnerMini;
