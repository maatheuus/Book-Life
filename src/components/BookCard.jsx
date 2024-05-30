import {
  HiOutlineStar,
  HiStar,
  HiOutlineShoppingCart,
  HiOutlineHeart,
} from "react-icons/hi2";
import image from "../assets/images/img-test.jpeg";

function BookCard() {
  return (
    <div className="relative max-w-sm  min-w-[184px] bg-white shadow-md rounded-xl px-4 py-3">
      <div>
        <div className="flex">
          <button className="ml-auto bg-white rounded-full p-2 cursor-pointer text-stone-800 hover:animate-pulse">
            <HiOutlineHeart className="justify-end hover:text-primary" />
          </button>
        </div>
        <img
          className="h-40 shadow-img rounded-sm w-full overflow-x-hidden object-cover rotate-6 scale-75"
          src={image}
        />
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <HiStar className="w-4 h-4 text-primary" />
          <HiStar className="w-4 h-4 text-primary" />
          <HiStar className="w-4 h-4 text-primary" />
          <HiStar className="w-4 h-4 text-primary" />
          <HiOutlineStar className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="mt-3 mb-6 text-left">
        <p className="text-xs font-extrabold text-stone-950 hyphens-auto">
          A revolução dos bichos
        </p>
      </div>
      <div className="flex justify-between items-center mb-1 relative text-sm font-extrabold text-stone-950">
        <span>R$ 39,40</span>
        <button className=" bg-primary text-stone-100 hover:animate-pulse rounded-full p-1">
          <HiOutlineShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default BookCard;
