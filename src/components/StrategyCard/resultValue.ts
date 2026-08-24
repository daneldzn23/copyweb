// Approximate B3 point values used to convert a strategy's point result into R$.
// WIN (mini Ibovespa index futures) ≈ R$0,20/ponto; WDO (mini dollar futures) ≈ R$10,00/ponto.
const POINT_VALUE_BY_PREFIX: { prefix: string; value: number }[] = [
  { prefix: 'WIN', value: 0.2 },
  { prefix: 'WDO', value: 10 },
];

function pointValueForAssets(assets: string[]): number {
  const primary = assets[0];
  if (!primary) return 1;
  const match = POINT_VALUE_BY_PREFIX.find(({ prefix }) => primary.startsWith(prefix));
  return match ? match.value : 1;
}

function formatBRL(value: number): string {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Math.abs(value));
  if (value > 0) return `+${formatted}`;
  if (value < 0) return `-${formatted}`;
  return formatted;
}

export function pointsToBRL(points: number, assets: string[]): string {
  return formatBRL(points * pointValueForAssets(assets));
}
