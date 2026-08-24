import './ClosingCtaSection.css';

function ClosingCtaSection() {
  return (
    <section className="closing-cta-section">
      <div className="closing-cta-section__content">
        <h2 className="closing-cta-section__title">
          Pronto para replicar a estratégia certa pra você?
        </h2>
        <div className="closing-cta-section__actions">
          <a href="#estrategias" className="closing-cta-section__btn closing-cta-section__btn--primary">
            Ver estratégias disponíveis
          </a>
        </div>
        <p className="closing-cta-section__support">
          Ainda com dúvidas sobre qual estratégia escolher?{' '}
          <a href="#">Fale com um especialista no WhatsApp →</a>
        </p>
      </div>
    </section>
  );
}

export default ClosingCtaSection;
