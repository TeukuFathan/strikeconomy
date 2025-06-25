export default function EconomyPanel({ economy }) {
  const net = economy.income - economy.expenses;

  return (
    <div className="space-y-2 p-5">
      <h2 className="text-xl font-bold border-b pb-1">Economy Panel</h2>
      <p>💵 Cash: ${economy.cash}</p>
      <p>💸 Debt: ${economy.debt}</p>
      <p>📈 Income: ${economy.income}</p>
      <p>📉 Expenses: ${economy.expenses}</p>
      <p>📊 Net: ${net}</p>
      <p>🤝 Investor Cut: {economy.investorCut * 100}%</p>
    </div>
  );
}
