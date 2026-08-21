import icCopyInvestColored from '../../assets/ic-copyInvest-colored.svg';
import icAutomacoes from '../../assets/ic-autoV2Tower-gray.svg';
import icOpcionais from '../../assets/ic-miscAdd-outline-gray.svg';
import icGrupos from '../../assets/ic-group-outline-gray.svg';
import icCursos from '../../assets/ic-teachers-outline-gray.svg';
import icEventos from '../../assets/ic-coupon-outline-gray.svg';
import icTap from '../../assets/ic-tap-outline-gray.svg';
import icVerMais from '../../assets/ic-other-outline-gray.svg';
import './NavSideMenu.css';

const NAV_ITEMS = [
  { label: 'Automações', icon: icAutomacoes },
  { label: 'Copy Invest', icon: icCopyInvestColored },
  { label: 'Opcionais', icon: icOpcionais },
  { label: 'Grupos', icon: icGrupos },
  { label: 'Cursos', icon: icCursos },
  { label: 'Eventos', icon: icEventos },
  { label: 'TAP', icon: icTap },
];

function NavSideMenu() {
  return (
    <nav className="nav-side-menu">
      <ul className="nav-side-menu__list">
        {NAV_ITEMS.map(({ label, icon }) => {
          const isActive = label === 'Copy Invest';
          return (
            <li key={label}>
              <button
                className={
                  isActive
                    ? 'nav-side-menu__item nav-side-menu__item--active'
                    : 'nav-side-menu__item'
                }
              >
                <img className="nav-side-menu__icon" src={icon} alt="" width={20} height={20} />
                <span className="nav-side-menu__label">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <button className="nav-side-menu__more">
        <img src={icVerMais} alt="" width={20} height={20} />
        <span>Ver mais</span>
      </button>
    </nav>
  );
}

export default NavSideMenu;
