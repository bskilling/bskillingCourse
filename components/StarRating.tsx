import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf ,faStar as faStarStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

interface StarRatingProps {
    ratings: () => number;
}

const StarRating:React.FC<StarRatingProps> = ({ratings}) => {
    const stars = ratings();
    const ratingStars = Array.from({ length: 5 }, (ele, index) => {
        let number = index + 0.5
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? <FontAwesomeIcon icon={faStarStroke} style={{ color: "#FFD43B", }} /> :
                        stars >= number ? <FontAwesomeIcon icon={faStarHalf} style={{ color: "#FFD43B", }} /> :
                         <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />   
                }
            </span>
        )
    })
  return (
      <div className="">
        {ratingStars}
    </div>
  );
};

export default StarRating;
