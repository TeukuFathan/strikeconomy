
export default function BarrackUI({ selectedObject, setGameObjects, gameObjects }) {
  return (
    <div className="mt-4 space-y-2">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-full"
        onClick={() => {
            const infantry = selectedObject.produce(gameObjects);
            if (infantry) {
                setGameObjects(prev => [...prev, infantry]);
            } 
        }}>
        Produce Infantry
      </button>
    </div>
  );
}
