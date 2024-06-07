import { RiLoader2Fill } from "react-icons/ri";

function SpinnerMini() {
  return (
    <div className="w-full flex justify-center text-white">
      <RiLoader2Fill className="animate-spin w-6 h-6" />
    </div>
  );
}

export default SpinnerMini;
