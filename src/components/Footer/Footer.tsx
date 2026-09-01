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

        <div className="footer__legal-notice">
          <p className="footer__legal-notice-heading">Aviso Legal sobre o Copy Invest</p>
          <p>
            Importante: Antes de contratar o Copy Invest, consulte seu assessor, consultor ou
            corretora de investimentos para verificar se este produto é adequado ao seu perfil de
            investimento, objetivos financeiros e tolerância a riscos. É fundamental que você leia
            atentamente os Termos de Uso do Copy Invest para compreender o funcionamento da
            plataforma, suas regras, limitações e responsabilidades. Além disso, informe-se
            detalhadamente sobre a estratégia que pretende seguir e sobre os Profissionais
            responsáveis por sua execução, analisando o descritivo da estratégia, o histórico de
            resultados e as informações disponibilizadas no Módulo.
          </p>
          <p>
            * A replicação automática de operações de traders mais experientes por meio do Copy
            Invest não garante qualquer tipo de lucro ou resultado positivo. As operações podem
            resultar em perdas financeiras, inclusive superiores ao capital investido, especialmente
            em situações de alta volatilidade e de baixa liquidez dos ativos envolvidos nas
            operações. O resultado obtido por cada investidor depende do desempenho da estratégia
            escolhida e pode ser impactado por diversos fatores, como o momento em que a ordem do
            investidor é executada (as ordens são executadas em filas de preço na B3 e as condições
            de mercado podem variar no momento da execução de cada ordem), oscilações abruptas nos
            preços dos ativos, falta de liquidez, custos de transação, eventos inesperados,
            condições gerais de mercado, e limitações operacionais configuradas pelo próprio
            investidor.
          </p>
          <p>
            Os resultados financeiros obtidos por um trader no passado não constituem garantia de
            desempenho futuro. Qualquer informação sobre a performance histórica de um trader tem
            caráter meramente ilustrativo e não deve ser interpretada como promessa de rentabilidade
            ou recomendação de investimento. O histórico de rentabilidade divulgado serve apenas
            como referência e pode divergir significativamente dos resultados efetivamente
            alcançados pelo investidor.
          </p>
          <p>
            A Nelogica atua exclusivamente como provedora de tecnologia. A Nelogica não recomenda,
            indica ou aconselha investimentos, não presta serviços de análise de valores
            mobiliários, consultoria ou assessoria de investimentos, nem realiza atividades de
            gestão de carteiras, distribuição ou intermediação de valores mobiliários, limitando-se
            integralmente ao desenvolvimento e fornecimento de tecnologia.
          </p>
          <p>
            A Nelogica também não tem qualquer responsabilidade sobre as estratégias desenvolvidas
            pelos Profissionais, pelas decisões de investimentos tomadas, pelos resultados obtidos
            ou pelas informações fornecidas pelos Profissionais, cabendo exclusivamente ao
            investidor analisar os dados disponíveis e tomar decisão autônoma e independente sobre a
            contratação e utilização do serviço Copy Invest.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
