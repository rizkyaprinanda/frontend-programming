import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

function RatingStars({ rating }) {
  const starCount = 5;
  const solidStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0;

  const starElements = [];

  for (let i = 0; i < solidStars; i++) {
    starElements.push(<FontAwesomeIcon key={i} icon={solidStar} />);
  }

  if (hasHalfStar) {
    starElements.push(<FontAwesomeIcon key={solidStars} icon={regularStar} />);
  }

  for (let i = starElements.length; i < starCount; i++) {
    starElements.push(<FontAwesomeIcon key={i} icon={regularStar} />);
  }

  return <>{starElements}</>;
}

export default RatingStars;