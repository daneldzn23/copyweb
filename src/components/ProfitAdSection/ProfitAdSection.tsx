import bannerBg from '../../assets/banner-profit-bg.png';
import logoProfitEndosso from '../../assets/logo-profit-endosso.svg';
import './ProfitAdSection.css';

function ProfitAdSection() {
  return (
    <section className="profit-ad-section">
      <div className="profit-ad" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="profit-ad__content">
          <img src={logoProfitEndosso} alt="Profit Nelogica" className="profit-ad__logo" />
          <p className="profit-ad__title">Tudo o que você precisa em uma só plataforma.</p>
          <p className="profit-ad__subtitle">
            Assine o Profit e obtenha descontos exclusivos nas estratégias.
          </p>
          <button className="profit-ad__cta">Conheça mais</button>
        </div>
      </div>
    </section>
  );
}

export default ProfitAdSection;
