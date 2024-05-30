import { LuLibrary } from "react-icons/lu";
function Empty() {
  return (
    <div className="bg-stone-50 rounded-xl w-full flex items-center justify-center gap-x-2 text-xl text-secondary py-10">
      <LuLibrary /> <span>Search for some books...</span>
    </div>
  );
}

export default Empty;
