import icStarMini from '../../assets/ic-star-mini.svg';
import icStarHalfMini from '../../assets/ic-starHalf-mini-colored.svg';
import './StarRating.css';

interface StarRatingProps {
  rating: number;
  className?: string;
}

function StarRating({ rating, className }: StarRatingProps) {
  return (
    <span className={['star-rating', className].filter(Boolean).join(' ')}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = rating - i;
        if (filled >= 1) {
          return <img key={i} src={icStarMini} alt="" width={16} height={16} />;
        }
        if (filled >= 0.5) {
          return <img key={i} src={icStarHalfMini} alt="" width={16} height={16} />;
        }
        return (
          <img
            key={i}
            src={icStarMini}
            alt=""
            width={16}
            height={16}
            className="star-rating__star--empty"
          />
        );
      })}
    </span>
  );
}

export default StarRating;
