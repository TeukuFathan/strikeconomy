import type { EconomyState } from '../types';

interface Props {
  economy: EconomyState;
}

export default function EconomyPanel({ economy }: Props) {
  const net = economy.income - economy.expenses;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Economy Panel</h2>
      <p>💵 Cash: ${economy.cash}</p>
      <p>💸 Debt: ${economy.debt}</p>
      <p>📈 Income: ${economy.income}</p>
      <p>📉 Expenses: ${economy.expenses}</p>
      <p>📊 Net: ${net}</p>
      <p>🤝 Investor Cut: {economy.investorCut * 100}%</p>
    </div>
  );
}
