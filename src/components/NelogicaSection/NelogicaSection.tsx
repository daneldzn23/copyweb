import logoNelogica from '../../assets/logotipo-nelogica-branco.svg.svg';
import './NelogicaSection.css';

const STATS = [
  { value: '+60 mil', label: 'ativações' },
  { value: '+1 mil', label: 'estratégias disponíveis' },
  { value: '+3 anos', label: 'de tecnologia Nelogica' },
];

function NelogicaSection() {
  return (
    <section className="nelogica-section">
      <p className="nelogica-section__headline">
        Tecnologia desenvolvida pela
        <img
          src={logoNelogica}
          alt="Nelogica"
          className="nelogica-section__logo"
          width={110}
          height={36}
        />
      </p>
      <p className="nelogica-section__body">
        A mesma tecnologia que já é referência para o trader brasileiro, agora replicando
        estratégias por você.
      </p>

      <div className="nelogica-section__stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="nelogica-section__stat">
            <span className="nelogica-section__stat-divider" aria-hidden="true" />
            <span className="nelogica-section__stat-value">{stat.value}</span>
            <span className="nelogica-section__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NelogicaSection;
