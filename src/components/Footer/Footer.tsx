import logoCopyInvest from '../../assets/logo.svg';
import logoNelogica from '../../assets/logotipo-nelogica-branco.svg.svg';
import icFacebook from '../../assets/ic_baseline-facebook.svg';
import icInstagram from '../../assets/Frame.svg';
import icLinkedin from '../../assets/mdi_linkedin.svg';
import icYoutube from '../../assets/ic-youtube.png';
import './Footer.css';

const LEGAL_LINKS = ['Termos de Uso', 'Política de Privacidade', 'Política de Cookies'];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src={logoCopyInvest} alt="CopyInvest" className="footer__logo" width={144} height={24} />
        <div className="footer__meta">
          <div className="footer__powered-by">
            <span>Powered by</span>
            <img src={logoNelogica} alt="Nelogica" width={72} height={24} />
          </div>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <img src={icFacebook} alt="" width={20} height={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={icInstagram} alt="" width={20} height={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={icLinkedin} alt="" width={20} height={20} />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={icYoutube} alt="" width={29} height={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__legal-row">
          <span className="footer__copyright">Copyright © 2024 Nelogica. Todos direitos reservados.</span>
          <div className="footer__legal-links">
            {LEGAL_LINKS.map((label) => (
              <a key={label} href="#">
                {label}
              </a>
            ))}
          </div>
        </div>

        <p className="footer__disclaimer">
          Aviso: A Nelogica é uma provedora de serviços de tecnologia e opera como facilitadora para
          recebimento, envio e análise de informações para negociação de ativos, tendo por base as
          decisões dos Usuários. A Nelogica não é, sob qualquer forma ou interpretação, parte ou
          intermediária de qualquer operação ou transação realizada por meio de seus sistemas, tampouco
          participa, faz ou presta serviços de recomendações de investimentos. Portanto, a Nelogica não
          pode ser considerada ou equiparada a um agente ou analista de investimentos dos Usuários. Para
          mais informações, acesse os{' '}
          <a href="https://www.nelogica.com.br/empresa#termos" target="_blank" rel="noreferrer">
            Termos de Uso
          </a>{' '}
          disponíveis nesta página.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
