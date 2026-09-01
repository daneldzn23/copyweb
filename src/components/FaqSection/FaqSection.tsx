import { useState } from 'react';
import icChevronDown from '../../assets/ic-chevron-down.svg';
import './FaqSection.css';

const FAQS = [
  {
    question: 'Preciso saber operar?',
    answer:
      'Não. A tecnologia Copy Invest foi desenvolvida para simplificar a execução, automatizando as operações de traders experientes ou de robôs, diretamente na sua conta, sem necessidade de acompanhamento contínuo.',
  },
  {
    question: 'A conta fica no meu nome?',
    answer: 'Sim. A conta é totalmente sua e permanece sob sua titularidade.',
  },
  {
    question: 'Posso cancelar?',
    answer: 'Sim. Você tem 7 dias de garantia para testar qualquer estratégia sem risco.',
  },
  {
    question: 'Qual o capital mínimo recomendado?',
    answer:
      'Cada estratégia possui um capital mínimo recomendado. Consulte a descrição da estratégia escolhida para verificar a margem aconselhada.',
  },
  {
    question: 'Funciona em conta simulada?',
    answer:
      'Sim. Durante os 7 dias de garantia, você pode testar no simulador ou conta real. Se preferir, durante o período de testes, pode testar em conta simulada e migrar para a conta real depois.',
  },
  {
    question: 'Preciso ativar todo dia e deixar o computador ligado?',
    answer:
      'Não. Após a configuração inicial, as operações são executadas automaticamente pela tecnologia Copy Invest, sem necessidade de ativação diária.',
  },
  {
    question: 'Meu Copy atingiu o Stop Gain/Stop Loss. O que fazer?',
    answer:
      'Ao atingir o limite de ganho ou perda definido, seu copy é pausado automaticamente. Para retomar, basta pressionar o botão "Executar", não é necessário reconfigurar nada.',
  },
  {
    question: 'O resultado é garantido?',
    answer:
      'Não. Operações no mercado financeiro envolvem risco, e resultados passados não garantem resultados futuros. Cada estratégia disponibiliza um histórico de performance público, auditado pela Nelogica, mas esse histórico não representa garantia de retorno.',
  },
];

type FaqSectionProps = {
  compact?: boolean;
};

function FaqSection({ compact }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={compact ? 'faq-section faq-section--compact' : 'faq-section'}>
      <div className="faq-section__aside">
        <h2 className="faq-section__title">Perguntas frequentes</h2>
      </div>

      <div className="faq-section__list">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="faq-section__item">
              <button
                className="faq-section__question"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <img
                  src={icChevronDown}
                  alt=""
                  width={12}
                  height={6}
                  className={
                    isOpen
                      ? 'faq-section__chevron faq-section__chevron--open'
                      : 'faq-section__chevron'
                  }
                />
              </button>
              <div
                className={
                  isOpen
                    ? 'faq-section__answer-wrap faq-section__answer-wrap--open'
                    : 'faq-section__answer-wrap'
                }
              >
                <p className="faq-section__answer">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
