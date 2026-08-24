import { useRef } from 'react';
import icStarMini from '../../assets/ic-star-mini.svg';
import icStarHalfMini from '../../assets/ic-starHalf-mini-colored.svg';
import icWaitingList from '../../assets/ic-waitingList.svg';
import Sparkline from './Sparkline';
import type { StrategyCardProps } from './StrategyCard';
import { pointsToBRL } from './resultValue';
import './StrategyCardGrid.css';

function StrategyCardGrid({
  thumbnail,
  name,
  planName,
  rating,
  assets,
  operations,
  resultPoints,
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
        'strategy-card-grid',
        featured && 'strategy-card-grid--featured',
        discountLabel && 'strategy-card-grid--discounted',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="strategy-card-grid__light" aria-hidden="true" />

      <div className="strategy-card-grid__header">
        <div className="strategy-card-grid__avatar">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="strategy-card-grid__texts">
          <p className="strategy-card-grid__name">{name}</p>
          <p className="strategy-card-grid__plan">{planName}</p>
        </div>
      </div>

      {waitingList ? (
        <div className="strategy-card-grid__waiting-list">
          <span className="strategy-card-grid__waiting-list-label">
            <img src={icWaitingList} alt="" width={16} height={16} />
            Lista de Espera
          </span>
          <p className="strategy-card-grid__waiting-list-text">
            Participe do pré-lançamento e receba benefícios exclusivos!
          </p>
        </div>
      ) : (
        <div className="strategy-card-grid__stats">
          {resultPoints !== undefined && (
            <Sparkline
              seed={`${name}-${planName}-${resultPoints}`}
              resultValue={pointsToBRL(resultPoints, assets)}
              className="strategy-card-grid__sparkline"
            />
          )}
          <div className="strategy-card-grid__stats-left">
            <div className="strategy-card-grid__stat">
              <span className="strategy-card-grid__stat-label">Operações</span>
              {operations && (
                <span className="strategy-card-grid__stat-value">
                  {operations.total}{' '}
                  <span className="strategy-card-grid__stat-detail">
                    (<span className="strategy-card-grid__wins">{operations.wins}</span>/
                    {operations.losses})
                  </span>
                </span>
              )}
            </div>
            {assets.length > 0 && (
              <div className="strategy-card-grid__stat">
                <span className="strategy-card-grid__stat-label">Ativos</span>
                <span className="strategy-card-grid__asset-chips">
                  {assets.slice(0, 2).map((asset) => (
                    <span key={asset} className="strategy-card-grid__chip">
                      {asset}
                    </span>
                  ))}
                  {assets.length > 2 && (
                    <span className="strategy-card-grid__chip">+{assets.length - 2}</span>
                  )}
                </span>
              </div>
            )}
          </div>

          {resultPoints !== undefined && (
            <div className="strategy-card-grid__result">
              <span className="strategy-card-grid__result-label">Resultado do Ano</span>
              <span
                className={
                  resultPoints < 0
                    ? 'strategy-card-grid__result-value strategy-card-grid__result-value--negative'
                    : 'strategy-card-grid__result-value'
                }
              >
                {pointsToBRL(resultPoints, assets)}
              </span>
            </div>
          )}
        </div>
      )}

      <div className="strategy-card-grid__footer">
        <div className="strategy-card-grid__price">
          <span className="strategy-card-grid__price-label">A partir de</span>
          <span className="strategy-card-grid__price-value">
            {price} <span className="strategy-card-grid__price-suffix">/mês</span>
          </span>
        </div>
        {rating !== undefined && (
          <span className="strategy-card-grid__rating">
            <span className="strategy-card-grid__stars">
              {Array.from({ length: 5 }, (_, i) => {
                const filled = rating - i;
                if (filled >= 1) {
                  return <img key={i} src={icStarMini} alt="" width={12} height={12} />;
                }
                if (filled >= 0.5) {
                  return <img key={i} src={icStarHalfMini} alt="" width={12} height={12} />;
                }
                return (
                  <img
                    key={i}
                    src={icStarMini}
                    alt=""
                    width={12}
                    height={12}
                    className="strategy-card-grid__star--empty"
                  />
                );
              })}
            </span>
            <span className="strategy-card-grid__rating-value">{rating}</span>
          </span>
        )}
      </div>
    </article>
  );
}

export default StrategyCardGrid;
