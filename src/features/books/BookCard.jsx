import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import imgNotFound from "../../assets/images/image-not-found.jpeg";

import { useFavorite } from "./useFavorite";
import BookmarkButton from "./BookmarkButton";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import StarIcons from "../../components/StarIcons ";

function BookCard({
  id,
  title,
  image = imgNotFound,
  averageRating,
  price,
  linkTo,
}) {
  const navigate = useNavigate();
  const { favoriteBooks } = useFavorite();
  const { pathname, search } = useLocation();
  const checkData = pathname.includes("favorite");

  return (
    <li className="relative max-w-sm min-w-[184px] bg-white shadow-sm rounded-xl px-4 py-3 transition duration-300 hover:scale-105 hover:shadow-md">
      <div>
        <BookmarkButton
          id={id}
          checkData={checkData}
          favoriteBooks={favoriteBooks}
        />
        <Button
          className="block w-40 overflow-hidden object-fill"
          onClick={() => navigate(`/book/${id}${search}`, { replace: true })}
        >
          <img
            className="h-40 shadow-img rounded-sm w-full overflow-x-hidden object-cover rotate-6 scale-75"
            src={image}
          />
        </Button>
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <StarIcons key={id} rating={averageRating} />
        </div>
      </div>

      <div className="mt-3 mb-6 text-left">
        <p className="w-40 text-xs font-extrabold text-stone-950 hyphens-auto">
          {title}
        </p>
      </div>
      <div className="flex justify-between items-center mb-1 relative text-sm font-extrabold text-stone-950">
        {price !== undefined ? (
          <>
            <span>R$ {price}</span>
            <ButtonIcon
              to={linkTo}
              target="_blank"
              className=" bg-primary text-stone-100 hover:animate-pulse rounded-full p-1"
            >
              <HiOutlineShoppingCart className="w-4 h-4" />
            </ButtonIcon>
          </>
        ) : (
          <span>Not for sale</span>
        )}
      </div>
    </li>
  );
}

export default BookCard;
