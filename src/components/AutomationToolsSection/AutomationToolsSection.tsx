import './AutomationToolsSection.css';

const TOOLS = [
  {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Ut enim ad minim veniam',
    text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    title: 'Duis aute irure dolor',
    text: 'In reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    title: 'Excepteur sint occaecat',
    text: 'Cupidatat non proident sunt in culpa qui officia.',
  },
];

function AutomationToolsSection() {
  return (
    <section className="automation-tools">
      <span className="automation-tools__icon" aria-hidden="true" />
      <h2 className="automation-tools__title">Lorem ipsum dolor sit amet.</h2>
      <p className="automation-tools__subtitle">
        Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
      </p>

      <div className="automation-tools__grid">
        <div className="automation-tools__card automation-tools__card--large">
          <div className="automation-tools__card-info">
            <span className="automation-tools__card-icon" aria-hidden="true" />
            <p className="automation-tools__card-title">Lorem ipsum dolor sit amet</p>
            <p className="automation-tools__card-text">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button className="automation-tools__card-link">Conheça a ferramenta</button>
          </div>
          <div className="automation-tools__card-preview" />
        </div>

        {TOOLS.map((tool) => (
          <div key={tool.title} className="automation-tools__card">
            <span className="automation-tools__card-icon" aria-hidden="true" />
            <p className="automation-tools__card-title">{tool.title}</p>
            <p className="automation-tools__card-text">{tool.text}</p>
            <div className="automation-tools__card-preview" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AutomationToolsSection;
