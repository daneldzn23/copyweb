import logoCopyInvest from '../../assets/logo-copyinvest.svg';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import './ComparisonSection.css';

const ROWS = [
  { label: 'Tempo dedicado ao mercado', alone: 'Alto', copyInvest: 'Baixo' },
  { label: 'Conhecimento técnico', alone: 'Necessário', copyInvest: 'Não exigido' },
  { label: 'Gestão de risco', alone: 'Manual', copyInvest: 'Parametrizada na estratégia' },
  { label: 'Acompanhamento', alone: 'Constante', copyInvest: 'Se desejar' },
  { label: 'Execução', alone: 'Manual, plataforma sempre aberta', copyInvest: 'Automática, na nuvem' },
  { label: 'Estratégias', alone: 'Uma por vez', copyInvest: 'Acesso a múltiplas' },
];

function ComparisonSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section className="comparison-section" ref={sectionRef}>
      <div className="comparison-section__header">
        <h2 className="comparison-section__title">
          <span className="comparison-section__title-accent">Copy Invest</span> x operar por conta própria
        </h2>
        <p className="comparison-section__subtitle">
          A diferença não é sobre saber operar. É sobre onde vai o seu tempo.
        </p>
      </div>

      <div className="comparison-section__table-wrap">
        <div className="comparison-section__table" role="table">
          <span className="comparison-section__panel" aria-hidden="true" />
          <div className="comparison-section__row comparison-section__row--head" role="row">
            <span className="comparison-section__cell comparison-section__cell--head-label" role="columnheader">
              <span className="comparison-section__visually-hidden">Critério</span>
            </span>
            <span className="comparison-section__cell comparison-section__cell--head-alone" role="columnheader">
              Operar sozinho(a)
            </span>
            <span className="comparison-section__cell comparison-section__cell--head-copyinvest" role="columnheader">
              <img src={logoCopyInvest} alt="Copy Invest" width={128} height={27} />
            </span>
          </div>

          {ROWS.map((row) => (
            <div key={row.label} className="comparison-section__row" role="row">
              <span className="comparison-section__cell comparison-section__cell--label" role="rowheader">
                {row.label}
              </span>
              <span className="comparison-section__cell comparison-section__cell--alone" role="cell">
                {row.alone}
              </span>
              <span className="comparison-section__cell comparison-section__cell--copyinvest" role="cell">
                {row.copyInvest}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
