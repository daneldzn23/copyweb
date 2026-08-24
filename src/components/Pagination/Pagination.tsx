import icChevronLeft from '../../assets/ic-chevronLeft.svg';
import icChevronRight from '../../assets/ic-chevronRight.svg';
import './Pagination.css';

type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

function Pagination({ page, pageCount, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Paginação">
      <button
        className="pagination__nav"
        disabled={page === 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
      >
        <img src={icChevronLeft} alt="" width={16} height={16} />
        Anterior
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={p === page ? 'pagination__page pagination__page--active' : 'pagination__page'}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className="pagination__nav"
        disabled={page === pageCount}
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
      >
        Próximo
        <img src={icChevronRight} alt="" width={16} height={16} />
      </button>
    </nav>
  );
}

export default Pagination;
