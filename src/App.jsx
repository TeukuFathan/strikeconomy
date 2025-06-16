import { useState } from 'react';
import EconomyPanel from './component/EconomyPanel';

function App() {
  const [economy, setEconomy] = useState({
    cash: 1000,
    debt: 500,
    income: 300,
    expenses: 150,
    investorCut: 0.1, // 10%
  });

  return (
    <div className="flex justify-end px-4 sm:px-8 md:px-12 lg:px-20 py-4">
      <div className="max-w-sm w-full">
        <EconomyPanel economy={economy} />
      </div>
    </div>
  );
}

export default App;
