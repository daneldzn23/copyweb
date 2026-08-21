import { useState } from 'react';
import icChevronLeft from '../../assets/ic-chevronLeft.svg';
import icChevronRight from '../../assets/ic-chevronRight.svg';
import './Pagination.css';

const PAGES = [1, 2, 3];

function Pagination() {
  const [page, setPage] = useState(1);

  return (
    <nav className="pagination" aria-label="Paginação">
      <button
        className="pagination__nav"
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
      >
        <img src={icChevronLeft} alt="" width={16} height={16} />
        Anterior
      </button>
      {PAGES.map((p) => (
        <button
          key={p}
          className={p === page ? 'pagination__page pagination__page--active' : 'pagination__page'}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
      <button
        className="pagination__nav"
        disabled={page === PAGES.length}
        onClick={() => setPage((p) => Math.min(PAGES.length, p + 1))}
      >
        Próximo
        <img src={icChevronRight} alt="" width={16} height={16} />
      </button>
    </nav>
  );
}

export default Pagination;
