import icChevronDown from '../../assets/ic-chevron-down.svg';
import './SortBar.css';

type SortBarProps = {
  rangeStart: number;
  rangeEnd: number;
  total: number;
};

function SortBar({ rangeStart, rangeEnd, total }: SortBarProps) {
  return (
    <div className="sort-bar">
      <button className="sort-bar__sort">
        <span>
          Ordernar por: <strong>Resultado do Ano</strong>
        </span>
        <img src={icChevronDown} alt="" width={12} height={6} />
      </button>
      <div className="sort-bar__results">
        <span>
          Mostrando {rangeStart}–{rangeEnd} de {total} estratégias
        </span>
      </div>
    </div>
  );
}

export default SortBar;
