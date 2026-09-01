import logoNelogica from '../../assets/logotipo-nelogica-branco.svg.svg';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import ShuffleStat from '../ShuffleStat/ShuffleStat';
import './NelogicaSection.css';

const STATS = [
  { value: '+40 mil', label: 'usuários' },
  { value: '+1 mil', label: 'estratégias disponíveis' },
  { value: '+3 anos', label: 'de tecnologia Nelogica' },
];

function NelogicaSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section className="nelogica-section" ref={sectionRef}>
      <div className="nelogica-section__grid" aria-hidden="true" />
      <div className="nelogica-section__glow" aria-hidden="true" />
      <div className="nelogica-section__scrim" aria-hidden="true" />
      <div className="nelogica-section__intro">
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
      </div>

      <div className="nelogica-section__stats">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            className="nelogica-section__stat"
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <ShuffleStat
              className="nelogica-section__stat-value"
              value={stat.value}
              delayMs={index * 120}
            />
            <span className="nelogica-section__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NelogicaSection;
