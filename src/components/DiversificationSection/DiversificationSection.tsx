import { useState, useEffect } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import imgDesktopJanelas from '../../assets/copy_desk-janelas.webp';
import imgDesktopJanelas2 from '../../assets/copy_desk-janelas2.webp';
import imgEstrategias from '../../assets/Copy Invest_ Estratégias Disponíveis - Filtros Default.webp';
import imgPerformance from '../../assets/Copy Invest_ Performance.webp';
import './DiversificationSection.css';

const BENEFITS = [
  {
    title: 'Menos dependência de uma única tese',
    description:
      'Seu capital não fica preso à sorte de uma única decisão. Ao rodar várias estratégias em paralelo, nenhuma aposta isolada define o resultado da carteira.',
    previewLabel: 'Print: comparador de estratégias com várias teses ativas lado a lado',
    previewImage: imgEstrategias,
  },
  {
    title: 'Resultados descorrelacionados',
    description:
      'Quando uma estratégia perde, outra pode estar ganhando. Combinar estratégias com comportamentos diferentes suaviza o resultado agregado da carteira.',
    previewLabel: 'Print: relatório de performance com estratégias descorrelacionadas',
    previewImage: imgDesktopJanelas,
  },
  {
    title: 'Menos oscilação na carteira',
    description:
      'A carteira como um todo sente menos o soluço de cada estratégia individual, porque as variações tendem a se compensar ao longo do tempo.',
    previewLabel: 'Print: carteira com múltiplas estratégias ativas simultaneamente',
    previewImage: imgDesktopJanelas2,
  },
  {
    title: 'Mais consistência no resultado',
    description:
      'Diversificar não elimina risco, mas evita que tudo dependa de uma única aposta — o que tende a deixar o resultado agregado mais consistente mês a mês.',
    previewLabel: 'Print: ranking de estratégias com resultado consolidado',
    previewImage: imgPerformance,
  },
];

function DiversificationSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BENEFITS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="diversification-section" ref={sectionRef}>
      <div className="diversification-section__col diversification-section__col--left">
        <h2 className="diversification-section__claim">Por que diversificar importa</h2>
        <p className="diversification-section__subtitle">
          Descubra por que operar diversas estratégias de Copy simultaneamente pode ser vantajoso.
        </p>

        <div className="diversification-section__accordion">
          {BENEFITS.map((benefit, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={benefit.title} className="diversification-section__item">
                <button
                  type="button"
                  className="diversification-section__item-header"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <span className="diversification-section__item-title">{benefit.title}</span>
                  <svg
                    className="diversification-section__item-chevron"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="diversification-section__item-body">
                  <p className="diversification-section__item-description">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="diversification-section__col diversification-section__col--right">
        {(() => {
          const active = BENEFITS[Math.max(activeIndex, 0)];
          return active.previewImage ? (
            <img
              key={`image-${activeIndex}`}
              src={active.previewImage}
              alt={active.previewLabel}
              className="diversification-section__image diversification-section__image--real"
            />
          ) : (
            <ImagePlaceholder
              key={`placeholder-${activeIndex}`}
              className="diversification-section__image"
              label={active.previewLabel}
              ratio="4 / 3"
            />
          );
        })()}
      </div>
    </section>
  );
}

export default DiversificationSection;
