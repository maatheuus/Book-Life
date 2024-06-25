import { ImStarFull, ImStarHalf } from "react-icons/im";

function StarIcons({ rating }) {
  const idHalfStar = Math.random() * 1000000000;
  if (rating === 0 || rating === undefined) {
    return <span className="text-gray-primary text-base">No reviews</span>;
  }

  const fullStars = Math.floor(rating);
  const halfStart = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<ImStarFull key={i} className="w-4 h-4 text-primary" />);
  }

  if (halfStart) {
    stars.push(
      <ImStarHalf className="w-4 h-4 text-primary" key={idHalfStar} />
    );
  }

  return stars;
}

export default StarIcons;
