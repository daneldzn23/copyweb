import { useId } from 'react';

type SparklineProps = {
  seed: string;
  resultValue: string;
  className?: string;
};

type Segment = {
  color: string;
  fill: string;
  stroke: string;
  gradient: { offset: string; opacity: string }[];
};

function parseTrend(resultValue: string): 'positive' | 'negative' | 'neutral' {
  const trimmed = resultValue.trim();
  if (trimmed.startsWith('-')) return 'negative';
  if (trimmed.startsWith('+')) return 'positive';
  const normalized = trimmed.replace(',', '.');
  const match = normalized.match(/\d+(\.\d+)?/);
  if (!match) return 'neutral';
  const value = parseFloat(match[0]);
  if (value > 0) return 'positive';
  return 'neutral';
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const CHARTS: Record<'positive' | 'negative' | 'neutral', { viewBox: string; segments: Segment[] }[]> = {
  positive: [
    {
      viewBox: '3.08 0 214.33 130',
      segments: [
        {
          color: '#4C9856',
          fill: 'M217.412 15.9294L216.956 130L3.07764 130L40.6268 35.7339L60.0779 29.0629L79.529 0.678991L98.9801 7.62383L118.431 0.0175781L137.882 19.4237H157.333L176.784 10.8555L196.236 17.1031L217.412 15.9294Z',
          stroke:
            'M0.922852 131.477L40.7812 35.9858L59.4458 28.9642L79.4761 0.877704L98.596 7.89933L118.171 0L137.746 19.3095H156.866L176.441 10.5324L196.471 18.4318L217.412 16.6764',
          gradient: [
            { offset: '0', opacity: '0.5' },
            { offset: '1', opacity: '0' },
          ],
        },
      ],
    },
    {
      viewBox: '12.2 0 219.44 88.59',
      segments: [
        {
          color: '#4C9856',
          fill: 'M149.343 8.34079L135.627 0.725784L121.91 31.8505L108.193 39.1656L94.4759 62.7765L80.7593 42.2254L67.0418 31.8505L53.3252 47.5064L39.6086 52.5983L25.8911 75.7929L12.2012 88.5896L231.645 88.5896V16.1907L217.928 18.7348L204.211 11.8838L190.494 21.2808H176.777L163.061 0L149.343 8.34079Z',
          stroke:
            'M0.0688477 89.3218L12.1895 88.4871C12.2462 88.4832 12.3027 88.4569 12.3548 88.4088L26.0715 75.7458C26.1068 75.7131 26.1406 75.6704 26.171 75.6197L39.7987 52.8645L53.4024 47.8776C53.4492 47.8604 53.4947 47.8273 53.5367 47.7802L67.079 32.5139L80.552 42.5774L94.2179 62.8001C94.3824 63.0434 94.6018 63.0276 94.7585 62.7619L108.398 39.575L122.018 32.4031C122.102 32.3589 122.179 32.2638 122.239 32.13L135.771 1.80365L149.231 9.18564C149.308 9.22792 149.39 9.22581 149.467 9.17991L162.973 1.06641L176.513 21.8105C176.59 21.9284 176.683 21.9935 176.777 21.9938L190.495 21.9938C190.541 21.9938 190.587 21.9775 190.631 21.948L204.229 12.7496L217.827 19.4555C217.872 19.478 217.92 19.485 217.967 19.4765L231.684 16.963',
          gradient: [
            { offset: '0', opacity: '0.5' },
            { offset: '1', opacity: '0' },
          ],
        },
      ],
    },
  ],
  negative: [
    {
      // From chart-strategy.svg: red (negative) segment on the left flowing into
      // the green (positive) segment on the right, as one continuous chart.
      viewBox: '0 0 437.03 130',
      segments: [
        {
          color: '#D35252',
          fill: 'M81.8636 115.025H61.3982L40.9318 121.206L20.4654 116.7L0 118.373L0 86.6338L204.994 86.6338V87.9517L204.66 87.7301L184.195 103.262L163.728 108.073L143.262 128.546L122.796 123.536L102.33 129.023L81.8636 115.025Z',
          stroke:
            'M0.0180664 119.485L20.4551 117.837L40.8829 122.278C40.9019 122.282 40.9217 122.284 40.9407 122.283L40.9985 122.274L61.4328 116.181H81.79L102.185 129.956C102.218 129.978 102.252 129.993 102.287 130L102.389 129.996L122.798 124.594L143.208 129.526C143.274 129.541 143.34 129.528 143.402 129.488L143.463 129.438L163.857 109.292L184.247 104.557L184.353 104.505L205.024 89.3271',
          gradient: [
            { offset: '0', opacity: '0' },
            { offset: '1', opacity: '0.5' },
          ],
        },
        {
          color: '#4C9856',
          fill: 'M354.269 8.34079L340.552 0.725784L326.835 31.8505L313.118 39.1656L299.401 62.7765L285.685 42.2254L271.967 31.8505L258.251 47.5064L244.534 52.5983L230.816 75.7929L217.126 88.5896L436.57 88.5896V16.1907L422.853 18.7348L409.137 11.8838L395.419 21.2808H381.703L367.986 0L354.269 8.34079Z',
          stroke:
            'M204.994 89.3218L217.114 88.4871C217.171 88.4832 217.227 88.4569 217.28 88.4088L230.996 75.7458C231.032 75.7131 231.065 75.6704 231.096 75.6197L244.724 52.8645L258.327 47.8776C258.374 47.8604 258.419 47.8273 258.461 47.7802L272.004 32.5139L285.477 42.5774L299.143 62.8001C299.307 63.0434 299.527 63.0276 299.683 62.7619L313.323 39.575L326.943 32.4031C327.027 32.3589 327.104 32.2638 327.164 32.13L340.696 1.80365L354.156 9.18564C354.233 9.22792 354.315 9.22581 354.392 9.17991L367.898 1.06641L381.438 21.8105C381.515 21.9284 381.607 21.9935 381.702 21.9938L395.42 21.9938C395.466 21.9938 395.512 21.9775 395.556 21.948L409.154 12.7496L422.751 19.4555C422.797 19.478 422.845 19.485 422.892 19.4765L436.608 16.963',
          gradient: [
            { offset: '0', opacity: '0.5' },
            { offset: '1', opacity: '0' },
          ],
        },
      ],
    },
  ],
  neutral: [
    {
      viewBox: '0 0 222.56 2',
      segments: [
        {
          color: '#A8A8A8',
          fill: '',
          stroke: 'M0 1L222.559 1',
          gradient: [],
        },
      ],
    },
  ],
};

function Sparkline({ seed, resultValue, className = 'strategy-card__sparkline' }: SparklineProps) {
  const uid = useId();
  const trend = parseTrend(resultValue);
  const options = CHARTS[trend];
  const index = hashString(seed) % options.length;
  const chart = options[index];

  return (
    <svg
      className={className}
      viewBox={chart.viewBox}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {chart.segments.map((segment, i) => {
          if (!segment.fill || segment.gradient.length === 0) return null;
          const gradientId = `sparkline-gradient-${uid}-${i}`;
          return (
            <linearGradient key={gradientId} id={gradientId} x1="0" y1="0" x2="0" y2="1">
              {segment.gradient.map((stop) => (
                <stop key={stop.offset} offset={stop.offset} stopColor={segment.color} stopOpacity={stop.opacity} />
              ))}
            </linearGradient>
          );
        })}
      </defs>
      {chart.segments.map((segment, i) => {
        const gradientId = `sparkline-gradient-${uid}-${i}`;
        return (
          <g key={i}>
            {segment.fill && segment.gradient.length > 0 && (
              <path d={segment.fill} fill={`url(#${gradientId})`} />
            )}
            <path
              d={segment.stroke}
              stroke={segment.color}
              strokeWidth="2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        );
      })}
    </svg>
  );
}

export default Sparkline;
