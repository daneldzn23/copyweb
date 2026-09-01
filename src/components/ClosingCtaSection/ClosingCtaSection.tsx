import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import './ClosingCtaSection.css';

function ClosingCtaSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section className="closing-cta-section" ref={sectionRef}>
      <div className="closing-cta-section__content">
        <h2 className="closing-cta-section__title">
          Pronto para replicar a estratégia certa pra você?
        </h2>
        <a href="#estrategias" className="closing-cta-section__btn">
          Ver estratégias disponíveis
        </a>
        <p className="closing-cta-section__support">
          Ainda com dúvidas sobre qual estratégia escolher?{' '}
          <a href="#">Fale com um especialista no WhatsApp →</a>
        </p>
      </div>
    </section>
  );
}

export default ClosingCtaSection;
