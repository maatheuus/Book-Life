import { useQuery } from "@tanstack/react-query";
import { getBookmarked } from "../../services/apiBooks";
import { useUser } from "../authentication/useUser";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function useFavorite() {
  const navigate = useNavigate();

  const { user, isAuthenticated } = useUser();
  const { pathname } = useLocation();
  const { email } = user || {};
  const checkData = pathname.includes("favorite") && isAuthenticated;

  const { data: favoriteBooks, isLoading } = useQuery({
    enabled: checkData,
    queryKey: ["favorites-books"],
    queryFn: () => {
      if (pathname.includes("favorite") && !isAuthenticated) navigate("/login");
      else if (checkData) return getBookmarked({ email });
    },
    keepPreviousData: true,
  });

  return { isLoading, favoriteBooks };
}
