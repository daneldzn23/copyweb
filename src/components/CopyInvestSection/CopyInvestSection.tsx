import { useEffect, useRef } from 'react';
import './CopyInvestSection.css';

function CopyInvestSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstNodeRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const flow = flowRef.current;
    const track = trackRef.current;
    const firstNode = firstNodeRef.current;
    const lastNode = lastNodeRef.current;
    if (!flow || !track || !firstNode || !lastNode) return;

    const updateTrackSpan = () => {
      const flowRect = flow.getBoundingClientRect();
      const firstRect = firstNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();
      const firstCenter = firstRect.top - flowRect.top + firstRect.height / 2;
      const lastCenter = lastRect.top - flowRect.top + lastRect.height / 2;
      track.style.setProperty('--ci-track-top', `${firstCenter}px`);
      track.style.setProperty('--ci-track-height', `${lastCenter - firstCenter}px`);
    };

    updateTrackSpan();

    const ro = new ResizeObserver(updateTrackSpan);
    ro.observe(flow);

    const steps = flow.querySelectorAll('.ci-step');
    steps.forEach((step) => step.addEventListener('transitionend', updateTrackSpan));

    return () => {
      ro.disconnect();
      steps.forEach((step) => step.removeEventListener('transitionend', updateTrackSpan));
    };
  }, []);

  return (
    <section className="ci-section" id="como-funciona" aria-labelledby="ci-title" ref={sectionRef}>
      <div className="ci-inner">
        <h2 className="ci-title" id="ci-title">
          Como funciona o <span className="ci-title__accent">Copy&nbsp;Invest</span>
        </h2>
        <p className="ci-subtitle">
          Três passos para operar com as estratégias de traders profissionais, sem executar
          nada manualmente.
        </p>

        <div className="ci-flow" ref={flowRef}>
          <div className="ci-track" aria-hidden="true" ref={trackRef}>
            <span className="ci-pulse" />
          </div>

          <div className="ci-step">
            <div className="ci-node" ref={firstNodeRef}>
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
            <div className="ci-node" ref={lastNodeRef}>
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
          <p className="ci-availability">
            Disponível em{' '}
            <svg
              className="ci-availability-icon"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.54783 14.2357V12.9154H6.93339V11.2487H2.60442C2.25527 11.2487 1.95527 11.118 1.70442 10.8567C1.45356 10.5953 1.32812 10.2828 1.32812 9.91898V3.09436C1.32812 2.73059 1.45356 2.41803 1.70442 2.15668C1.95527 1.89533 2.25527 1.76465 2.60442 1.76465H13.3961C13.7477 1.76465 14.0499 1.89533 14.3025 2.15668C14.5551 2.41803 14.6814 2.73059 14.6814 3.09436V9.91898C14.6814 10.2828 14.5551 10.5953 14.3025 10.8567C14.0499 11.118 13.7477 11.2487 13.3961 11.2487H9.06708V12.9154H10.4526V14.2357H5.54783ZM2.60442 9.91898H13.3961V3.09436H2.60442V9.91898Z" />
            </svg>
            Desktop e
            <svg
              className="ci-availability-icon"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.33276 15.3323C4.0661 15.3323 3.83276 15.2323 3.63276 15.0323C3.43276 14.8323 3.33276 14.599 3.33276 14.3323V1.66565C3.33276 1.39898 3.43276 1.16565 3.63276 0.965649C3.83276 0.765649 4.0661 0.665649 4.33276 0.665649H11.6661C11.9328 0.665649 12.1661 0.765649 12.3661 0.965649C12.5661 1.16565 12.6661 1.39898 12.6661 1.66565V14.3323C12.6661 14.599 12.5661 14.8323 12.3661 15.0323C12.1661 15.2323 11.9328 15.3323 11.6661 15.3323H4.33276ZM7.99943 14.0823C8.14388 14.0823 8.26332 14.0351 8.35776 13.9406C8.45221 13.8462 8.49943 13.7268 8.49943 13.5823C8.49943 13.4379 8.45221 13.3184 8.35776 13.224C8.26332 13.1295 8.14388 13.0823 7.99943 13.0823C7.85499 13.0823 7.73554 13.1295 7.6411 13.224C7.54665 13.3184 7.49943 13.4379 7.49943 13.5823C7.49943 13.7268 7.54665 13.8462 7.6411 13.9406C7.73554 14.0351 7.85499 14.0823 7.99943 14.0823ZM4.33276 11.8323H11.6661V3.16565H4.33276V11.8323Z" />
            </svg>
            Mobile
          </p>
        </div>
      </div>
    </section>
  );
}

export default CopyInvestSection;
