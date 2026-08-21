import { useRef } from 'react';
import icStarMini from '../../assets/ic-star-mini.svg';
import icStarHalfMini from '../../assets/ic-starHalf-mini-colored.svg';
import icWaitingList from '../../assets/ic-waitingList.svg';
import icMonthBadge from '../../assets/ic-monthBadge-colored.svg';
import icNoReview from '../../assets/ic-noReview.svg';
import Sparkline from './Sparkline';
import './StrategyCard.css';

export type StrategyCardProps = {
  thumbnail: string;
  name: string;
  planName: string;
  description: string;
  rating?: number;
  ratingCount?: number;
  assets: string[];
  operations?: { total: number; wins: number; losses: number };
  strategiesCount?: number;
  operatingSince?: string;
  resultLabel?: string;
  resultValue?: string;
  price?: string;
  featured?: boolean;
  discountLabel?: string;
  waitingList?: boolean;
};

function StrategyCard({
  thumbnail,
  name,
  planName,
  description,
  rating,
  ratingCount,
  assets,
  operations,
  strategiesCount,
  operatingSince,
  resultLabel = 'Resultado do ano',
  resultValue,
  price,
  featured,
  discountLabel,
  waitingList,
}: StrategyCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const MAX_TILT_DEG = 2;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (0.5 - px) * 2 * MAX_TILT_DEG;
    const rotateX = (py - 0.5) * 2 * MAX_TILT_DEG;
    cardRef.current!.style.setProperty('--tilt-x', `${rotateX}deg`);
    cardRef.current!.style.setProperty('--tilt-y', `${rotateY}deg`);
    cardRef.current!.style.setProperty('--mouse-x', `${px * 100}%`);
    cardRef.current!.style.setProperty('--mouse-y', `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    cardRef.current?.style.setProperty('--tilt-x', '0deg');
    cardRef.current?.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={[
        'strategy-card',
        featured && 'strategy-card--featured',
        discountLabel && 'strategy-card--discounted',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="strategy-card__light" aria-hidden="true" />
      {discountLabel && <span className="strategy-card__discount-tag">{discountLabel}</span>}
      {featured && (
        <span className="strategy-card__featured-tag">
          <img src={icMonthBadge} alt="" width={16} height={16} />
          Destaque
        </span>
      )}

      <div className="strategy-card__header">
        <div className="strategy-card__thumbnail">
          <img src={thumbnail} alt={name} />
        </div>

        <div className="strategy-card__texts">
          <p className="strategy-card__name">{name}</p>
          <p className="strategy-card__plan">{planName}</p>
          {waitingList ? (
            <div className="strategy-card__waiting-list">
              <img src={icWaitingList} alt="" width={16} height={16} />
              <span>Lista de Espera</span>
            </div>
          ) : (
            rating !== undefined && (
              <div className="strategy-card__rating">
                <span className="strategy-card__rating-value">{rating}</span>
                <span className="strategy-card__stars">
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
                        className="strategy-card__star--empty"
                      />
                    );
                  })}
                </span>
                <span className="strategy-card__rating-count">({ratingCount})</span>
              </div>
            )
          )}
          {!waitingList && rating === undefined && (
            <p className="strategy-card__no-rating">
              <img src={icNoReview} alt="" width={16} height={16} />
              Sem avaliações
            </p>
          )}
          <p className="strategy-card__description">{description}</p>
        </div>

        {!waitingList && resultValue && (
          <div className="strategy-card__chart">
            <Sparkline seed={`${name}-${planName}-${resultValue}`} resultValue={resultValue} />
            <div className="strategy-card__result">
              <span className="strategy-card__result-label">{resultLabel}</span>
              <span
                className={
                  resultValue.trim().startsWith('-')
                    ? 'strategy-card__result-value strategy-card__result-value--negative'
                    : 'strategy-card__result-value'
                }
              >
                {resultValue}
              </span>
            </div>
          </div>
        )}

        {!waitingList && (
          <>
            <div className="strategy-card__divider" />
            <div className="strategy-card__info">
              <div className="strategy-card__info-row">
                <span className="strategy-card__info-label">Ativos</span>
                <span className="strategy-card__asset-chips">
                  {assets.map((asset) => (
                    <span key={asset} className="strategy-card__chip">
                      {asset}
                    </span>
                  ))}
                </span>
              </div>
              {operations && (
                <div className="strategy-card__info-row">
                  <span className="strategy-card__info-label">Operações</span>
                  <span className="strategy-card__info-value">
                    {operations.total}{' '}
                    <span className="strategy-card__info-detail">
                      (<span className="strategy-card__wins">{operations.wins}</span>/
                      {operations.losses})
                    </span>
                  </span>
                </div>
              )}
              {strategiesCount !== undefined && (
                <div className="strategy-card__info-row">
                  <span className="strategy-card__info-label">Estratégias</span>
                  <span className="strategy-card__info-value">{strategiesCount}</span>
                </div>
              )}
              {operatingSince && (
                <div className="strategy-card__info-row">
                  <span className="strategy-card__info-label">Operando desde</span>
                  <span className="strategy-card__info-value">{operatingSince}</span>
                </div>
              )}
              <div className="strategy-card__price-row">
                <div className="strategy-card__price">
                  <span className="strategy-card__price-label">A partir de</span>
                  <span className="strategy-card__price-value">
                    {price} <span className="strategy-card__price-suffix">/mês*</span>
                  </span>
                </div>
                <button className="strategy-card__cta">Ver Composição</button>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default StrategyCard;
