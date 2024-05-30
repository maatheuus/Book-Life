import { PiSpinnerBallBold } from "react-icons/pi";

function Spinner() {
  return (
    <div className="w-full flex justify-center text-secondary py-16">
      <PiSpinnerBallBold className="animate-spin w-8 h-8" />
    </div>
  );
}

export default Spinner;
