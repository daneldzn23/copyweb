import icComparador from '../../assets/ic-comparador_de_estrategias.svg';
import icCarteira from '../../assets/ic-carteira.svg';
import icRelatorio from '../../assets/ic-relatorio-performance.svg';
import icRanking from '../../assets/ic-ranking_de_moedas.svg';
import './DiversificationSection.css';

const DIVERSIFICATION_ITEMS = [
  {
    icon: '◆',
    text: 'Menos dependência de uma única tese ou decisão',
  },
  {
    icon: '↝',
    text: 'Resultados descorrelacionados — quando uma estratégia perde, outra pode estar ganhando',
  },
  {
    icon: '≈',
    text: 'Menos oscilação na carteira como um todo',
  },
  {
    icon: '＋',
    text: 'Mais consistência no resultado agregado',
  },
];

function DiversificationSection() {
  return (
    <section className="diversification-section">
      <div className="diversification-section__hook">
        <div className="diversification-section__hook-text">
          Por que diversificar importa
        </div>
      </div>

      <div className="diversification-section__content">
        <div className="diversification-section__text-header">
          <div className="diversification-section__eyebrow">
            No Copy Invest, seu capital pode rodar em várias estratégias ao mesmo tempo.
          </div>
          <p className="diversification-section__note">
            Diversificação não elimina risco. Mas evita que tudo dependa de uma única aposta.
          </p>
        </div>

        <div className="diversification-section__grid">
          {DIVERSIFICATION_ITEMS.map((item, index) => (
            <div key={index} className="diversification-section__item">
              <img
                src={
                  index === 1
                    ? icRelatorio
                    : index === 2
                    ? icCarteira
                    : index === 3
                    ? icRanking
                    : icComparador
                }
                alt=""
                className="diversification-section__icon-img"
              />
              <p className="diversification-section__item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiversificationSection;
