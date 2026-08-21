import { Fragment } from 'react';
import './PlansComparisonSection.css';

const PLANS = ['Basic', 'Plus', 'Premium', 'Premium 500', 'Premium 1.000', 'Ultimate'];

type Row = { label: string; values: (string | boolean)[] };
type Group = { title: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: 'Recursos inclusos',
    rows: [
      { label: 'Lorem ipsum dolor', values: [false, false, true, true, true, true] },
      { label: 'Consectetur adipiscing', values: [false, false, true, true, true, true] },
      { label: 'Sed do eiusmod', values: [false, false, true, true, true, true] },
      { label: 'Ut labore et dolore', values: [false, false, true, true, true, true] },
    ],
  },
  {
    title: 'Limites',
    rows: [
      { label: 'Lorem ipsum¹', values: ['5', '50', '250', '500', '1.000', 'Ilimitado'] },
      { label: 'Dolor sit amet²', values: ['—', '10', '50', '100', '200', 'Ilimitado'] },
      {
        label: 'Consectetur³',
        values: ['R$ 25.000,00', 'R$ 150.000,00', 'R$ 500.000,00', 'R$ 1.000.000,00', 'R$ 1.500.000,00', 'Ilimitado'],
      },
    ],
  },
  {
    title: 'Assinatura',
    rows: [
      {
        label: 'Valor mensal',
        values: ['R$ 89,90/mês', 'R$ 249,90/mês', 'R$ 389,90/mês', 'R$ 519,90/mês', 'R$ 669,90/mês', 'R$ 2.339,90/mês'],
      },
      {
        label: 'Valor anual',
        values: ['R$ 62,99/mês', 'R$ 174,99/mês', 'R$ 272,99/mês', 'R$ 363,93/mês', 'R$ 468,93/mês', 'R$ 1.637,93/mês'],
      },
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

      <p className="plans-comparison__footnote">
        ¹ Lorem ipsum dolor sit amet consectetur. ² Adipiscing elit sed do eiusmod. ³ Tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}

export default PlansComparisonSection;
