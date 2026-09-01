import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import './ActivationVideoSection.css';

function ActivationVideoSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section className="activation-video" ref={sectionRef}>
      <h2 className="activation-video__title">Veja como ativar na prática</h2>
      <p className="activation-video__subtitle">
        Do primeiro clique à primeira operação replicada.
      </p>

      <div className="activation-video__frame">
        <iframe
          src="https://www.youtube.com/embed/wByqbPZsSsI?si=RkER9Vwba1QfzXNU"
          title="Veja como ativar na prática"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default ActivationVideoSection;
