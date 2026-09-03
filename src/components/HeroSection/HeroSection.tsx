import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';
import imgNessaTrader from '../../assets/Image-6.png';
import imgGetProfit from '../../assets/Image-4.png';
import imgBitRobos from '../../assets/Image-5.png';
import imgMalka from '../../assets/Image-2.png';
import icChevronLeft from '../../assets/ic-chevronLeft.svg';
import icChevronRight from '../../assets/ic-chevronRight.svg';
import BannerHighlightCard from './BannerHighlightCard';
import './HeroSection.css';

const HIGHLIGHTS = [
  {
    eyebrow: 'Em destaque',
    title: 'Nessa Trader',
    image: imgNessaTrader,
    colorClassName: 'banner-highlight-card--color-yellow',
    rating: 4.8,
    ratingCount: 312,
    resultValue: 'R$ 4.286,00',
    winRate: 207,
    price: 'R$ 189,90',
  },
  {
    eyebrow: 'Em destaque',
    title: 'GetProfit One',
    image: imgGetProfit,
    colorClassName: 'banner-highlight-card--color-purple',
    rating: 4.5,
    ratingCount: 186,
    resultValue: 'R$ 512,20',
    winRate: 179,
    price: 'R$ 272,99',
  },
  {
    eyebrow: 'Em destaque',
    title: 'BIT - Robôs Investidores',
    image: imgBitRobos,
    colorClassName: 'banner-highlight-card--color-neutral',
    rating: 4.5,
    ratingCount: 186,
    resultValue: 'R$ 3.448,00',
    winRate: 212,
    price: 'R$ 272,99',
  },
  {
    eyebrow: 'Em destaque',
    title: 'Malka Investimentos',
    image: imgMalka,
    colorClassName: 'banner-highlight-card--color-orange',
    rating: 4.9,
    ratingCount: 43,
    resultValue: 'R$ 1.024,80',
    winRate: 149,
    price: 'R$ 155,10',
  },
];

const AUTOPLAY_DELAY_MS = 5000;
const CLOSED_SLOT_COUNT = 3;
const SWIPE_THRESHOLD_PX = 40;

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = HIGHLIGHTS.length;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    timeoutRef.current = setTimeout(goNext, AUTOPLAY_DELAY_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, isPaused, total, goNext]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
    if (deltaX < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const closedSlots = Array.from({ length: Math.min(CLOSED_SLOT_COUNT, total - 1) }, (_, i) => {
    return HIGHLIGHTS[(activeIndex + 1 + i) % total];
  });

  return (
    <section className="hero-section">
      <div className="hero-section__inner">
        <div
          className="hero-section__highlights"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="hero-section__carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <BannerHighlightCard
              key={HIGHLIGHTS[activeIndex].title}
              variant="open"
              {...HIGHLIGHTS[activeIndex]}
            />

            {closedSlots.map((card) => (
              <BannerHighlightCard
                key={card.title}
                variant="closed"
                className="hero-section__closed-card"
                {...card}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero-section__arrow hero-section__arrow--prev"
            onClick={goPrev}
            aria-label="Estratégia anterior"
          >
            <img src={icChevronLeft} alt="" width={16} height={16} />
          </button>
          <button
            type="button"
            className="hero-section__arrow hero-section__arrow--next"
            onClick={goNext}
            aria-label="Próxima estratégia"
          >
            <img src={icChevronRight} alt="" width={16} height={16} />
          </button>
          <div className="hero-section__counter" role="tablist" aria-label="Estratégias em destaque">
            {HIGHLIGHTS.map((card, index) => (
              <button
                key={card.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={card.title}
                className={
                  index === activeIndex
                    ? 'hero-section__dot hero-section__dot--active'
                    : 'hero-section__dot'
                }
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
