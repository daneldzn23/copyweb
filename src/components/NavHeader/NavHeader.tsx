import { useState } from 'react';
import logoCopyInvest from '../../assets/logo.svg';
import icSearchLeft from '../../assets/ic-searchLeft.svg';
import icSenhaBloqueada from '../../assets/ic-senha_bloqueada-24px.svg';
import './NavHeader.css';

const TABS = ['Estratégias disponíveis', 'Minhas estratégias'];

function NavHeader() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectTab = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <header className="nav-header">
      <div className="nav-header__bar">
        <div className="nav-header__primary">
          <img className="nav-header__logo" src={logoCopyInvest} alt="CopyInvest" width={152} height={32} />
          <nav className="nav-header__tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                className={
                  tab === activeTab ? 'nav-header__tab nav-header__tab--active' : 'nav-header__tab'
                }
                onClick={() => selectTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="nav-header__secondary">
          <button className="nav-header__icon-btn" aria-label="Pesquisar">
            <img src={icSearchLeft} alt="" width={16} height={16} />
          </button>
          <button className="nav-header__icon-btn" aria-label="Minhas compras">
            <img src={icSenhaBloqueada} alt="" width={24} height={24} />
          </button>
          <button className="nav-header__login-btn">Entrar</button>
          <button
            className="nav-header__menu-btn"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="3" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="nav-header__mobile-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={
                tab === activeTab
                  ? 'nav-header__mobile-tab nav-header__mobile-tab--active'
                  : 'nav-header__mobile-tab'
              }
              onClick={() => selectTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default NavHeader;
