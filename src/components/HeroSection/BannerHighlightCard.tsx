import { useRef } from 'react';
import icArrowRightMini from '../../assets/ic-arrowRight-mini-card.svg';
import icMonthBadge from '../../assets/ic-monthBadge-colored.svg';
import icStarMini from '../../assets/ic-star-mini.svg';
import './BannerHighlightCard.css';

export type BannerHighlightCardProps = {
  eyebrow?: string;
  title: string;
  image: string;
  colorClassName: string;
  variant: 'open' | 'closed';
  rating?: number;
  ratingCount?: number;
  resultValue?: string;
  winRate?: number;
  price?: string;
  className?: string;
};

function BannerHighlightCard({
  eyebrow,
  title,
  image,
  colorClassName,
  variant,
  rating,
  ratingCount,
  resultValue,
  winRate,
  price,
  className,
}: BannerHighlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current!.style.setProperty('--mouse-x', `${px}%`);
    cardRef.current!.style.setProperty('--mouse-y', `${py}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`banner-highlight-card banner-highlight-card--${variant} ${colorClassName}${className ? ` ${className}` : ''}`}
    >
      <span className="banner-highlight-card__light" aria-hidden="true" />
      <div className="banner-highlight-card__bg" aria-hidden="true" />
      {variant === 'open' ? (
        <>
          <div className="banner-highlight-card__infos banner-highlight-card__infos--open">
            <div className="banner-highlight-card__texts">
              {eyebrow && (
                <p className="banner-highlight-card__eyebrow">
                  <img src={icMonthBadge} alt="" width={16} height={16} />
                  {eyebrow}
                </p>
              )}
              <p className="banner-highlight-card__title banner-highlight-card__title--open">
                {title}
              </p>
              {rating !== undefined && (
                <div className="banner-highlight-card__rating">
                  <img src={icStarMini} alt="" width={14} height={14} />
                  <span className="banner-highlight-card__rating-value">{rating}</span>
                  <span className="banner-highlight-card__rating-count">({ratingCount})</span>
                </div>
              )}
            </div>
            <div className="banner-highlight-card__proof">
              {resultValue && (
                <div className="banner-highlight-card__proof-item">
                  <span className="banner-highlight-card__proof-label">Resultado (12M)</span>
                  <span className="banner-highlight-card__proof-value banner-highlight-card__proof-value--positive">
                    {resultValue}
                  </span>
                </div>
              )}
              {winRate !== undefined && (
                <div className="banner-highlight-card__proof-item">
                  <span className="banner-highlight-card__proof-label">Dias com Lucro</span>
                  <span className="banner-highlight-card__proof-value">{winRate} dias</span>
                </div>
              )}
            </div>
            <div className="banner-highlight-card__footer">
              {price && (
                <div className="banner-highlight-card__price">
                  <span className="banner-highlight-card__price-label">A partir de</span>
                  <span className="banner-highlight-card__price-value">
                    {price} <span className="banner-highlight-card__price-suffix">/mês*</span>
                  </span>
                </div>
              )}
              <button className="banner-highlight-card__cta banner-highlight-card__cta--primary">
                Conhecer estratégia
                <img src={icArrowRightMini} alt="" width={16} height={16} />
              </button>
              {rating !== undefined && (
                <div className="banner-highlight-card__rating banner-highlight-card__rating--footer">
                  <img src={icStarMini} alt="" width={14} height={14} />
                  <span className="banner-highlight-card__rating-value">{rating}</span>
                  <span className="banner-highlight-card__rating-count">({ratingCount})</span>
                </div>
              )}
            </div>
          </div>
          <div className="banner-highlight-card__thumb banner-highlight-card__thumb--open">
            <img src={image} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="banner-highlight-card__thumb banner-highlight-card__thumb--closed">
            <img src={image} alt={title} />
          </div>
          <div className="banner-highlight-card__infos">
            <p className="banner-highlight-card__title">{title}</p>
            {resultValue && (
              <div className="banner-highlight-card__proof-item banner-highlight-card__proof-item--closed">
                <span className="banner-highlight-card__proof-label">Resultado (12M)</span>
                <span className="banner-highlight-card__proof-value banner-highlight-card__proof-value--positive">
                  {resultValue}
                </span>
              </div>
            )}
            <button className="banner-highlight-card__cta">
              Conhecer
              <img src={icArrowRightMini} alt="" width={16} height={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BannerHighlightCard;
