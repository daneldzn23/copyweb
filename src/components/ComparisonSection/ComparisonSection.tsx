import icClose from '../../assets/ic-close.svg';
import icCheckmark from '../../assets/ic-checkmark.svg';
import './ComparisonSection.css';

const ALONE_ITEMS = [
  'Tempo dedicado ao mercado: alto',
  'Exige conhecimento técnico',
  'Gestão de risco manual',
  'Acompanhamento constante',
  'Execução exige plataforma aberta e monitoramento',
  'Depende de uma única estratégia',
];

const COPY_INVEST_ITEMS = [
  'Tempo dedicado ao mercado: baixo',
  'Não exige conhecimento técnico',
  'Risco parametrizado na estratégia',
  'Acompanhamento se desejar',
  'Execução automática, na nuvem',
  'Acesso a múltiplas estratégias',
];

function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="comparison-section__header">
        <h2 className="comparison-section__title">Copy Invest x operar por conta própria</h2>
        <p className="comparison-section__subtitle">
          A diferença não é sobre saber operar. É sobre onde vai o seu tempo.
        </p>
      </div>

      <div className="comparison-section__cards">
        <div className="comparison-section__card">
          <h3 className="comparison-section__card-title">Operar sozinho(a)</h3>
          <ul className="comparison-section__list">
            {ALONE_ITEMS.map((item) => (
              <li key={item} className="comparison-section__item">
                <span className="comparison-section__icon comparison-section__icon--negative">
                  <img src={icClose} alt="" width={16} height={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="comparison-section__card comparison-section__card--highlighted">
          <h3 className="comparison-section__card-title comparison-section__card-title--highlighted">
            Copy Invest
          </h3>
          <ul className="comparison-section__list">
            {COPY_INVEST_ITEMS.map((item) => (
              <li key={item} className="comparison-section__item">
                <span className="comparison-section__icon comparison-section__icon--positive">
                  <img src={icCheckmark} alt="" width={16} height={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
