import { useState } from 'react';
import logoCopyInvest from '../../assets/logo.svg';
import icSearchLeft from '../../assets/ic-searchLeft.svg';
import icSenhaBloqueada from '../../assets/ic-senha_bloqueada-24px.svg';
import './NavHeader.css';

const TABS = ['Estratégias disponíveis', 'Minhas estratégias'];

function NavHeader() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <header className="nav-header">
      <div className="nav-header__primary">
        <img className="nav-header__logo" src={logoCopyInvest} alt="CopyInvest" width={152} height={32} />
        <nav className="nav-header__tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={
                tab === activeTab ? 'nav-header__tab nav-header__tab--active' : 'nav-header__tab'
              }
              onClick={() => setActiveTab(tab)}
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
      </div>
    </header>
  );
}

export default NavHeader;
