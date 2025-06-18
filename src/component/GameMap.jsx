
const GRID_SIZE = 10;

export default function GameMap({ barrackPos, soldiers }) {
  return (
    <div className="grid grid-cols-10 gap-0.5 w-fit bg-gray-900 p-2 border border-gray-600">
      {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => {
        const x = i % GRID_SIZE;
        const y = Math.floor(i / GRID_SIZE);

        const isBarrack =
          x >= barrackPos.x &&
          x < barrackPos.x + 5 &&
          y >= barrackPos.y &&
          y < barrackPos.y + 5;

        const isSoldier = soldiers.some(
          (s) =>
            x >= s.x &&
            x < s.x + 2 &&
            y >= s.y &&
            y < s.y + 2
        );

        let cellClass = 'bg-green-700';
        if (isBarrack) cellClass = 'bg-yellow-600';
        if (isSoldier) cellClass = 'bg-blue-500';

        return (
          <div
            key={i}
            className={`w-8 h-8 ${cellClass} border border-gray-800`}
          ></div>
        );
      })}
    </div>
  );
}
