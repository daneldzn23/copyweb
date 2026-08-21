import icStarMini from '../../assets/ic-star-mini.svg';
import icStarHalfMini from '../../assets/ic-starHalf-mini-colored.svg';
import icChevronDown from '../../assets/ic-chevron-down.svg';
import './ReviewsSection.css';

const REVIEWS = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    rating: 5,
    name: 'Lorem Ipsum Dolor',
    date: '17/01/2025',
  },
  {
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4.5,
    name: 'Consectetur Adipiscing',
    date: '12/12/2024',
  },
  {
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    rating: 4,
    name: 'Ut Enim Veniam',
    date: '26/03/2024',
  },
  {
    text: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    rating: 5,
    name: 'Quis Nostrud Exercitation',
    date: '08/03/2024',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="reviews-section__stars">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = rating - i;
        if (filled >= 1) {
          return <img key={i} src={icStarMini} alt="" width={12} height={12} />;
        }
        if (filled >= 0.5) {
          return <img key={i} src={icStarHalfMini} alt="" width={12} height={12} />;
        }
        return (
          <img key={i} src={icStarMini} alt="" width={12} height={12} className="reviews-section__star--empty" />
        );
      })}
    </span>
  );
}

function ReviewsSection() {
  return (
    <section className="reviews-section">
      <h2 className="reviews-section__title">Avaliações</h2>

      <div className="reviews-section__summary">
        <span className="reviews-section__summary-value">4.5</span>
        <Stars rating={4.5} />
        <span className="reviews-section__summary-count">46,1 mil avaliações</span>
        <div className="reviews-section__summary-actions">
          <button className="reviews-section__filter">
            Mais recentes
            <img src={icChevronDown} alt="" width={12} height={6} />
          </button>
          <button className="reviews-section__filter">
            Todos os planos
            <img src={icChevronDown} alt="" width={12} height={6} />
          </button>
        </div>
      </div>

      <ul className="reviews-section__list">
        {REVIEWS.map((review) => (
          <li key={review.name} className="reviews-section__item">
            <p className="reviews-section__text">&ldquo;{review.text}&rdquo;</p>
            <div className="reviews-section__meta">
              <Stars rating={review.rating} />
              <span className="reviews-section__author">{review.name}</span>
              <span className="reviews-section__date">{review.date}</span>
            </div>
          </li>
        ))}
      </ul>

      <button className="reviews-section__more">Ver mais</button>
    </section>
  );
}

export default ReviewsSection;
