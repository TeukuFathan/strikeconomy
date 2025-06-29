import EconomyPanel from './component/EconomyPanel.jsx';
import { useState } from 'react';
import GameMap from './component/GameMap.jsx';
import Barracks from './logic/objects/buildings/Barracks.js';
import Infantry from './logic/objects/units/Infantry.js';
import SelectionPanel from './component/SelectionPanel.jsx';

export default function App() {
  const [economy] = useState({
    cash: 1000,
    debt: 500,
    income: 300,
    expenses: 150,
    investorCut: 0.1,
  });
  
  const [selectedObject, setSelectedObject] = useState(null);



  const [gameObjects, setGameObjects] = useState([
    new Barracks(200, 200),
  ]);



  const net = economy.income - economy.expenses;

  return (
    <div className="h-screen w-screen flex flex-row bg-gray-100">

      {/* Left Column */}
      <div className="w-1/5">
        <SelectionPanel
          selectedObject={selectedObject}
          gameObjects={gameObjects}
          setGameObjects={setGameObjects}
        />
      </div>


      {/* Center Column: contains Top / Map / Bottom */}
      <div className="flex-1 flex flex-col border border-gray-400">

        {/* Top Panel */}
        <div className="h-1/5 bg-green-100 border-b border-green-300 flex items-center justify-center">
          Top Panel
        </div>

        {/* Map Panel */}
        <div className="flex-1 bg-white flex items-center justify-center border border-black  p-1">
          <div className="w-full h-full">
            <GameMap gameObjects={gameObjects} onSelect={setSelectedObject} />
          </div>
        </div>
        {/* Bottom Panel */}
        <div className="h-1/5 bg-green-100 border-t border-green-300 flex items-center justify-center">
          Bottom Panel
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/5 bg-red-100 border border-red-300">
        <EconomyPanel economy={economy} />
      </div>
    </div>
  );
}
