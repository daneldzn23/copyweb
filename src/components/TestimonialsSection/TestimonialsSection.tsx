import { useCallback, useEffect, useRef, useState } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import StarRating from '../StarRating/StarRating';
import icChevronLeft from '../../assets/ic-chevronLeft.svg';
import icChevronRight from '../../assets/ic-chevronRight.svg';
import './TestimonialsSection.css';

interface Testimonial {
  quote: string;
  since: string;
  duration: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'A Copy Invest é uma plataforma muito robusta onde você tem a opção de escolher entre milhares de estratégias para operar no mercado sem a necessidade de investir muito tempo e dinheiro para estudar e desenvolver alguma estratégia que poderá ou não trazer o resultado desejado, isso sem contar todo o esforço e dedicação necessários para operar por conta própria.',
    since: 'Cliente Nelogica desde 2025',
    duration: 'Utiliza o Copy Invest há 1 ano e 3 meses',
    rating: 5,
  },
  {
    quote:
      'Primeira vez que uso o copy trader e estou gostando muito e principalmente por funcionar em qualquer corretora, dando liberdade de escolha.',
    since: 'Cliente Nelogica desde 2024',
    duration: 'Utiliza o Copy Invest há 9 meses',
    rating: 4.5,
  },
  {
    quote: 'Fácil e rápido de usar e conta com bom suporte.',
    since: 'Cliente Nelogica desde 2025',
    duration: 'Utiliza o Copy Invest há 3 meses',
    rating: 5,
  },
  {
    quote: 'Muito fácil de implantar e pode ser muito lucrativo.',
    since: 'Cliente Nelogica desde 2020',
    duration: 'Utiliza o Copy Invest há 2 anos e 6 meses',
    rating: 5,
  },
  {
    quote: 'Facilidade para acompanhar as operações, em qualquer lugar.',
    since: 'Cliente Nelogica desde 2017',
    duration: 'Utiliza o Copy Invest há 11 meses',
    rating: 5,
  },
  {
    quote: 'Facilidade ao verificar todas as aplicações efetuadas.',
    since: 'Cliente Nelogica desde 2025',
    duration: 'Utiliza o Copy Invest há 1 ano e 3 meses',
    rating: 5,
  },
  {
    quote:
      'Oferece a oportunidade de expandir sua carteira de investimentos sem a necessidade de dedicar tempo diariamente no que investir, basta procurar alguma estratégia que lhe pareça promissora.',
    since: 'Cliente Nelogica desde 2025',
    duration: 'Utiliza o Copy Invest há 5 meses',
    rating: 5,
  },
  {
    quote: 'É prático para quem sabe sobre trader.',
    since: 'Cliente Nelogica desde 2019',
    duration: 'Utiliza o Copy Invest há 1 ano',
    rating: 5,
  },
  {
    quote: 'Funciona muito bem na plataforma que utilizo.',
    since: 'Cliente Nelogica desde 2025',
    duration: 'Utiliza o Copy Invest há 1 ano e 2 meses',
    rating: 4.5,
  },
  {
    quote: 'Muito facilitado para quem pouco entende!',
    since: 'Cliente Nelogica desde 2025',
    duration: 'Utiliza o Copy Invest há 10 meses',
    rating: 5,
  },
];

const CARD_WIDTH = 400;
const GAP = 16;

function TestimonialsSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const canScrollPrev = scrollPosition > 0;
  const canScrollNext = scrollPosition < maxScroll;

  const calculateMaxScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const scrollWidth = carouselRef.current.scrollWidth;
    const clientWidth = carouselRef.current.clientWidth;
    setMaxScroll(Math.max(0, scrollWidth - clientWidth));
  }, []);

  const scroll = useCallback(
    (direction: 'next' | 'prev') => {
      if (!carouselRef.current) return;

      const scrollAmount = CARD_WIDTH + GAP;
      const newPosition =
        direction === 'next'
          ? Math.min(scrollPosition + scrollAmount, maxScroll)
          : Math.max(scrollPosition - scrollAmount, 0);

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    },
    [scrollPosition, maxScroll],
  );

  useEffect(() => {
    calculateMaxScroll();
    const handleResize = () => calculateMaxScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [calculateMaxScroll]);

  const handleScroll = useCallback(() => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-section__header">
        <h2 className="testimonials-section__title">Quem usa, indica</h2>
        <p className="testimonials-section__subtitle">
          O que dizem os usuários do{' '}
          <span className="testimonials-section__title-accent">Copy Invest</span>
        </p>
      </div>

      <div className="testimonials-section__carousel-wrapper">
        <div className="testimonials-section__carousel" ref={carouselRef}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={`${testimonial.quote}-${index}`} className="testimonials-section__card">
              <StarRating rating={testimonial.rating} className="testimonials-section__rating" />
              <p className="testimonials-section__quote">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="testimonials-section__meta">
                <span>{testimonial.since}</span>
                <span aria-hidden="true">·</span>
                <span>{testimonial.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-section__controls">
          <button
            type="button"
            className="testimonials-section__arrow testimonials-section__arrow--prev"
            onClick={() => scroll('prev')}
            disabled={!canScrollPrev}
            aria-label="Testemunhos anteriores"
          >
            <img src={icChevronLeft} alt="" width={16} height={16} />
          </button>
          <button
            type="button"
            className="testimonials-section__arrow testimonials-section__arrow--next"
            onClick={() => scroll('next')}
            disabled={!canScrollNext}
            aria-label="Próximos testemunhos"
          >
            <img src={icChevronRight} alt="" width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
