import { useState } from 'react';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import SortBar from '../SortBar/SortBar';
import StrategyCardGrid from '../StrategyCard/StrategyCardGrid';
import { TOTAL_STRATEGIES_COUNT, STRATEGIES_PER_PAGE, getStrategiesForPage } from '../StrategyCard/strategiesData';
import Pagination from '../Pagination/Pagination';
import './StrategiesSection.css';

const PAGE_COUNT = Math.ceil(TOTAL_STRATEGIES_COUNT / STRATEGIES_PER_PAGE);

function StrategiesSection() {
  const [page, setPage] = useState(1);
  const pageStrategies = getStrategiesForPage(page);
  const rangeStart = (page - 1) * STRATEGIES_PER_PAGE + 1;
  const rangeEnd = Math.min(page * STRATEGIES_PER_PAGE, TOTAL_STRATEGIES_COUNT);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <section className="strategies-section" id="estrategias">
      <div className="strategies-section__inner">
        <CategoryTabs />
        <SortBar rangeStart={rangeStart} rangeEnd={rangeEnd} total={TOTAL_STRATEGIES_COUNT} />
        <div className="strategies-section__cards">
          {pageStrategies.map((strategy, index) => (
            <StrategyCardGrid key={`${strategy.name}-${page}-${index}`} {...strategy} />
          ))}
        </div>
        <Pagination page={page} pageCount={PAGE_COUNT} onPageChange={handlePageChange} />
      </div>
    </section>
  );
}

export default StrategiesSection;
