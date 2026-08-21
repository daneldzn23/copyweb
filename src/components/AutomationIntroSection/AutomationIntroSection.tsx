import './AutomationIntroSection.css';

function AutomationIntroSection() {
  return (
    <section className="automation-intro">
      <p className="automation-intro__headline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="automation-intro__preview">
        <div className="automation-intro__preview-header">
          <span>Lorem Ipsum</span>
          <span className="automation-intro__preview-close">×</span>
        </div>
        <div className="automation-intro__preview-body">
          <div className="automation-intro__preview-line" style={{ width: '60%' }} />
          <div className="automation-intro__preview-line" style={{ width: '80%' }} />
          <div className="automation-intro__preview-line" style={{ width: '40%' }} />
        </div>
      </div>

      <div className="automation-intro__features">
        <div className="automation-intro__feature">
          <span className="automation-intro__feature-icon" aria-hidden="true" />
          <p className="automation-intro__feature-title">Lorem ipsum dolor</p>
          <p className="automation-intro__feature-text">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor.
          </p>
        </div>
        <div className="automation-intro__feature">
          <span className="automation-intro__feature-icon" aria-hidden="true" />
          <p className="automation-intro__feature-title">Ut labore et dolore</p>
          <p className="automation-intro__feature-text">
            Magna aliqua ut enim ad minim veniam quis nostrud.
          </p>
        </div>
        <div className="automation-intro__feature">
          <span className="automation-intro__feature-icon" aria-hidden="true" />
          <p className="automation-intro__feature-title">Exercitation ullamco</p>
          <p className="automation-intro__feature-text">
            Laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AutomationIntroSection;
