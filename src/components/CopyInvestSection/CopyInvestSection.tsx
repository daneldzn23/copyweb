import { useEffect, useRef } from 'react';
import './CopyInvestSection.css';

function CopyInvestSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      section.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(section);

    return () => io.disconnect();
  }, []);

  return (
    <section className="ci-section" id="como-funciona" aria-labelledby="ci-title" ref={sectionRef}>
      <div className="ci-inner">
        <h2 className="ci-title" id="ci-title">
          Como funciona o Copy&nbsp;Invest
        </h2>
        <p className="ci-subtitle">
          Três passos para operar com as estratégias de traders profissionais, sem executar
          nada manualmente.
        </p>

        <div className="ci-flow">
          <div className="ci-track" aria-hidden="true">
            <span className="ci-pulse" />
          </div>

          <div className="ci-step">
            <div className="ci-node">
              <span className="ci-step-index" aria-hidden="true">
                1
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 17l4-6 4 3 5-8 3 4" />
                <circle cx="8" cy="11" r="1.4" fill="currentColor" stroke="none" />
                <path d="M3 21h18" />
              </svg>
            </div>
            <h3>Contrate</h3>
            <p>Escolha a estratégia certa para o seu perfil.</p>
          </div>

          <div className="ci-step">
            <div className="ci-node">
              <span className="ci-step-index" aria-hidden="true">
                2
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9.5 14.5l5-5" />
                <path d="M13 6.5l1.5-1.5a4 4 0 015.5 5.5L18.5 12" />
                <path d="M11 17.5L9.5 19a4 4 0 01-5.5-5.5L5.5 12" />
              </svg>
            </div>
            <h3>Conecte</h3>
            <p>Conecte sua conta na corretora parceira.</p>
          </div>

          <div className="ci-step">
            <div className="ci-node">
              <span className="ci-step-index" aria-hidden="true">
                3
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 2l4 4-4 4" />
                <path d="M21 6H8a5 5 0 00-5 5" />
                <path d="M7 22l-4-4 4-4" />
                <path d="M3 18h13a5 5 0 005-5" />
              </svg>
            </div>
            <h3>Replique</h3>
            <p>As operações são replicadas automaticamente, em tempo real.</p>
          </div>
        </div>

        <div className="ci-loop">
          <p className="ci-loop-label">E quando quiser, recomece: novas estratégias, mesmo ciclo.</p>
          <br />
          <a className="ci-cta" href="#estrategias">
            Ver estratégias disponíveis
          </a>
          <p className="ci-availability">Disponível em Desktop e Mobile</p>
        </div>
      </div>
    </section>
  );
}

export default CopyInvestSection;
