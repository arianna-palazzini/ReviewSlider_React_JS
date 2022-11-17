import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const StarCreator = (num) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (num >= index + 1) {
      return <BsStarFill key={index} className="star" fill="#fca903" />;
    } else if (num >= index + 0.5) {
      return <BsStarHalf key={index} className="star" fill="#fca903" />;
    } else {
      return <BsStar key={index} className="star" fill="#fca903" />;
    }
  });
};

export default StarCreator;
