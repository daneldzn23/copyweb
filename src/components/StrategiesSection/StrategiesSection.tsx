import CategoryTabs from '../CategoryTabs/CategoryTabs';
import SortBar from '../SortBar/SortBar';
import StrategyCardGrid from '../StrategyCard/StrategyCardGrid';
import { STRATEGIES } from '../StrategyCard/strategiesData';
import Pagination from '../Pagination/Pagination';
import './StrategiesSection.css';

function StrategiesSection() {
  return (
    <section className="strategies-section">
      <div className="strategies-section__inner">
        <CategoryTabs />
        <SortBar />
        <div className="strategies-section__cards">
          {STRATEGIES.map((strategy, index) => (
            <StrategyCardGrid key={`${strategy.name}-${index}`} {...strategy} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
}

export default StrategiesSection;
