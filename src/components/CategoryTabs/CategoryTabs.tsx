import { useState } from 'react';
import icAward from '../../assets/ic-award-outline-gray.svg';
import icStarMini from '../../assets/ic-star-mini-grayDark.svg';
import icGroup from '../../assets/ic-group-gray.svg';
import icChevronDown from '../../assets/ic-chevron-down.svg';
import './CategoryTabs.css';

const TABS = [
  { label: 'Melhores do Ano', icon: icAward },
  { label: 'Melhores do Mês', icon: icAward },
  { label: 'Melhores da Semana', icon: icAward },
  { label: 'Melhor avaliados', icon: icStarMini },
  { label: 'Mais populares', icon: icGroup },
];

const FILTERS = [
  { label: 'Mercado', value: 'Selecione' },
  { label: 'Preço', value: 'Todos' },
  { label: 'Avaliação', value: 'Todos' },
];

function CategoryTabs() {
  const [active, setActive] = useState(TABS[0].label);
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="category-tabs-wrap">
      <div className="category-tabs">
        <button
          type="button"
          className={
            filtersOpen
              ? 'category-tabs__filter-toggle category-tabs__filter-toggle--active'
              : 'category-tabs__filter-toggle'
          }
          aria-pressed={filtersOpen}
          aria-label="Mais filtros"
          onClick={() => setFiltersOpen((open) => !open)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <line x1="3" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="5" r="2" fill="currentColor" />
            <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="13" cy="10" r="2" fill="currentColor" />
            <line x1="3" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="6" cy="15" r="2" fill="currentColor" />
          </svg>
        </button>
        <span className="category-tabs__divider" aria-hidden="true" />
        {TABS.map(({ label, icon }) => (
          <button
            key={label}
            className={
              label === active ? 'category-tabs__item category-tabs__item--active' : 'category-tabs__item'
            }
            onClick={() => setActive(label)}
          >
            <img src={icon} alt="" width={20} height={20} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {filtersOpen && (
        <div className="category-tabs__filters">
          {FILTERS.map(({ label, value }) => (
            <button key={label} type="button" className="category-tabs__filter-select">
              <span>
                {label}: <strong>{value}</strong>
              </span>
              <img src={icChevronDown} alt="" width={12} height={6} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryTabs;
