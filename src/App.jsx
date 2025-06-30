import EconomyPanel from './component/EconomyPanel.jsx';
import { useState, useEffect  } from 'react';
import GameMap from './component/GameMap.jsx';
import Barracks from './logic/objects/buildings/Barracks.js';
import SelectionPanel from './component/SelectionPanel.jsx';
import Monster from './logic/objects/units/Monster';

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

  const [mapSize, setMapSize] = useState({ width: 800, height: 600 }); // fallback

  <GameMap
      gameObjects={gameObjects}
      onSelect={setSelectedObject}
      reportSize={(width, height) => setMapSize({ width, height })}
  />

  useEffect(() => {
      const spawnMonster = () => {
          const monster = new Monster();
          const spawned = monster.spawn(gameObjects, mapSize.width, mapSize.height);
          if (spawned) {
              setGameObjects(prev => [...prev, monster]);
              console.log('Monster spawned:', monster);
          }
      };

      const interval = setInterval(() => {
          spawnMonster();
      }, 5000);

      return () => clearInterval(interval);
  }, [mapSize]);


  // Moving Monsters periodically
  useEffect(() => {
      const interval = setInterval(() => {
          let moved = false;
          gameObjects.forEach(obj => {
              if (obj.type === 'monster') {
                  obj.move(gameObjects);
                  moved = true;
              }
          });
          if (moved) {
              setGameObjects([...gameObjects]);
          }
      }, 50);

      return () => clearInterval(interval);
  }, [gameObjects]);



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
