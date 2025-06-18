import { useState } from 'react';
import GameMap from './component/GameMap';
import UI from './component/Ui';

function App() {
  const [economy, setEconomy] = useState({
    cash: 1000,
    debt: 500,
    income: 300,
    expenses: 150,
    investorCut: 0.1,
  });

  const [soldiers, setSoldiers] = useState([]);
  const barrackPos = { x: 0, y: 0 }; // top-left corner of the map

  const handleSpawnSoldier = () => {
    const newX = 6;
    const newY = soldiers.length * 2; // staggers down
    setSoldiers([...soldiers, { x: newX, y: newY }]);
    setEconomy((prev) => ({
      ...prev,
      cash: prev.cash - 150,
    }));
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-4">
      <GameMap barrackPos={barrackPos} soldiers={soldiers} />
      <UI economy={economy} setEconomy={setEconomy} onSpawnSoldier={handleSpawnSoldier} />
    </div>
  );
}

export default App;
