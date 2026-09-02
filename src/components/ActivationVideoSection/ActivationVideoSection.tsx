import icCheckmark from '../../assets/ic-checkmark.svg';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import './ActivationVideoSection.css';

function ActivationVideoSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section className="activation-video" ref={sectionRef}>
      <div className="activation-video__col activation-video__col--text">
        <div className="activation-video__heading">
          <h2 className="activation-video__title">Veja como ativar na prática</h2>
          <p className="activation-video__subtitle">
            Do primeiro clique à primeira operação replicada.
          </p>
        </div>

        <ul className="activation-video__list">
          <li>
            <img className="activation-video__check" src={icCheckmark} alt="" width={20} height={20} />
            Conecte sua conta na corretora em poucos minutos
          </li>
          <li>
            <img className="activation-video__check" src={icCheckmark} alt="" width={20} height={20} />
            Escolha e ative a estratégia certa para o seu perfil
          </li>
          <li>
            <img className="activation-video__check" src={icCheckmark} alt="" width={20} height={20} />
            Acompanhe as operações replicadas em tempo real
          </li>
        </ul>
      </div>

      <div className="activation-video__col activation-video__col--media">
        <div className="activation-video__frame">
          <iframe
            src="https://www.youtube.com/embed/wByqbPZsSsI?si=RkER9Vwba1QfzXNU"
            title="Veja como ativar na prática"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default ActivationVideoSection;
