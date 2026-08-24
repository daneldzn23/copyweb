import { Fragment } from 'react';
import './PlansComparisonSection.css';

const PLANS = ['Operar sozinho(a)', 'Copy Invest'];

type Row = { label: string; values: (string | boolean)[] };
type Group = { title: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: 'Comparativo',
    rows: [
      { label: 'Tempo dedicado ao mercado baixo', values: [false, true] },
      { label: 'Não exige conhecimento técnico', values: [false, true] },
      { label: 'Risco parametrizado na estratégia', values: [false, true] },
      { label: 'Acompanhamento se desejar', values: [false, true] },
      { label: 'Execução automática, na nuvem', values: [false, true] },
      { label: 'Acesso a múltiplas estratégias', values: [false, true] },
    ],
  },
];

function Cell({ value, highlighted }: { value: string | boolean; highlighted: boolean }) {
  if (typeof value === 'boolean') {
    return (
      <span
        className={
          value
            ? highlighted
              ? 'plans-comparison__check plans-comparison__check--highlighted'
              : 'plans-comparison__check'
            : 'plans-comparison__dash'
        }
      >
        {value ? '✓' : '—'}
      </span>
    );
  }
  return <span className={highlighted ? 'plans-comparison__value--highlighted' : undefined}>{value}</span>;
}

function PlansComparisonSection() {
  return (
    <section className="plans-comparison">
      <h2 className="plans-comparison__title">Compare os planos</h2>

      <div className="plans-comparison__table-wrap">
        <table className="plans-comparison__table">
          <thead>
            <tr>
              <th className="plans-comparison__row-label" />
              {PLANS.map((plan, i) => (
                <th
                  key={plan}
                  className={
                    i === PLANS.length - 1
                      ? 'plans-comparison__plan plans-comparison__plan--highlighted'
                      : 'plans-comparison__plan'
                  }
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GROUPS.map((group) => (
              <Fragment key={group.title}>
                <tr className="plans-comparison__group-row">
                  <td colSpan={PLANS.length + 1}>{group.title}</td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label}>
                    <td className="plans-comparison__row-label">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={
                          i === PLANS.length - 1
                            ? 'plans-comparison__cell plans-comparison__cell--highlighted'
                            : 'plans-comparison__cell'
                        }
                      >
                        <Cell value={value} highlighted={i === PLANS.length - 1} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PlansComparisonSection;
