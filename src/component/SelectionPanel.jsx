import Infantry from '../logic/objects/units/Infantry';


export default function SelectionPanel({ selectedObject, setGameObjects, gameObjects }) {
  return (
    <div className="w-full h-full p-6 text-base bg-red-100 border border-red-300">
      {selectedObject ? (
        <div className="text-left space-y-4">
          <h2 className="text-xl font-bold border-b pb-2">Selected</h2>
          <div><span className="font-semibold text-lg">Type:</span> {selectedObject.type}</div>
          <div><span className="font-semibold text-lg">Position:</span> ({selectedObject.x}, {selectedObject.y})</div>
          <div><span className="font-semibold text-lg">Width:</span> {selectedObject.width}</div>
          <div><span className="font-semibold text-lg">Height:</span> {selectedObject.height}</div>
          {selectedObject.type === 'barrack' && (
            <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => {
                    console.log('Producing...');
                    const newInfantry = new Infantry(
                        selectedObject.x, 
                        selectedObject.y + 100
                    );
                        alert('Produce Infantry (not wired yet)')

                        setGameObjects(prev => [...prev, newInfantry]);
                    }}

                    


            >
                Produce Infantry
            </button>
            )}

        </div>
      ) : (
        <div className="text-gray-500 italic text-lg">No object selected</div>
      )}
    </div>
  );
}
