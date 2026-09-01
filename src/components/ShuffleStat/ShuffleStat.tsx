import { useShuffleOnScroll } from '../../hooks/useShuffleOnScroll';

interface ShuffleStatProps {
  value: string;
  delayMs?: number;
  className?: string;
  as?: 'span' | 'strong';
}

function ShuffleStat({ value, delayMs = 0, className, as = 'span' }: ShuffleStatProps) {
  const { ref, display } = useShuffleOnScroll<HTMLSpanElement>(value, delayMs);
  const Tag = as;

  return (
    <Tag ref={ref} className={className} aria-label={value}>
      {display}
    </Tag>
  );
}

export default ShuffleStat;
