import NavHeader from './components/NavHeader/NavHeader';
import HeadlineSection from './components/HeadlineSection/HeadlineSection';
import HeroSection from './components/HeroSection/HeroSection';
import StrategiesSection from './components/StrategiesSection/StrategiesSection';
import NelogicaSection from './components/NelogicaSection/NelogicaSection';
import CopyInvestSection from './components/CopyInvestSection/CopyInvestSection';
import ActivationVideoSection from './components/ActivationVideoSection/ActivationVideoSection';
import ComparisonSection from './components/ComparisonSection/ComparisonSection';
import DiversificationSection from './components/DiversificationSection/DiversificationSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import ClosingCtaSection from './components/ClosingCtaSection/ClosingCtaSection';
import ProfitAdSection from './components/ProfitAdSection/ProfitAdSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavHeader />
      <div className="app-body">
        <div className="app-page">
          <HeadlineSection />
          <HeroSection />
          <StrategiesSection />
          <NelogicaSection />
          <CopyInvestSection />
          <ActivationVideoSection />
          <ComparisonSection />
          <DiversificationSection />
          <TestimonialsSection />
          <ClosingCtaSection />
          <ProfitAdSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
