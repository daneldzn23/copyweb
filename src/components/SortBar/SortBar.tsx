import icChevronDown from '../../assets/ic-chevron-down.svg';
import './SortBar.css';

function SortBar() {
  return (
    <div className="sort-bar">
      <button className="sort-bar__sort">
        <span>
          Ordernar por: <strong>Resultado do Ano</strong>
        </span>
        <img src={icChevronDown} alt="" width={12} height={6} />
      </button>
      <div className="sort-bar__results">
        <span>Mostrando 1–15 de 48 estratégias</span>
      </div>
    </div>
  );
}

export default SortBar;
