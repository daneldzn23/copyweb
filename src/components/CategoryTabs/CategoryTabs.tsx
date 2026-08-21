import { useState } from 'react';
import icAward from '../../assets/ic-award-outline-gray.svg';
import icStarMini from '../../assets/ic-star-mini-grayDark.svg';
import icGroup from '../../assets/ic-group-gray.svg';
import './CategoryTabs.css';

const TABS = [
  { label: 'Melhores do Ano', icon: icAward },
  { label: 'Melhores do Mês', icon: icAward },
  { label: 'Melhores da Semana', icon: icAward },
  { label: 'Melhor avaliados', icon: icStarMini },
  { label: 'Mais populares', icon: icGroup },
];

function CategoryTabs() {
  const [active, setActive] = useState(TABS[0].label);

  return (
    <div className="category-tabs">
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
  );
}

export default CategoryTabs;
