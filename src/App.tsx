import NavHeader from './components/NavHeader/NavHeader';
import HeadlineSection from './components/HeadlineSection/HeadlineSection';
import HeroSection from './components/HeroSection/HeroSection';
import StrategiesSection from './components/StrategiesSection/StrategiesSection';
import AutomationIntroSection from './components/AutomationIntroSection/AutomationIntroSection';
import AutomationToolsSection from './components/AutomationToolsSection/AutomationToolsSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import PlansComparisonSection from './components/PlansComparisonSection/PlansComparisonSection';
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
          <AutomationIntroSection />
          <AutomationToolsSection />
          <ReviewsSection />
          <PlansComparisonSection />
          <ProfitAdSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
