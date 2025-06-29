import BarrackUI from './BarrackUi';

export default function SelectionPanel({ selectedObject, ...props }) {
  if (!selectedObject) {
    return (
      <div className="p-4 text-gray-500 italic text-lg">
        No object selected
      </div>
    );
  }

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold border-b pb-2">Selected: {selectedObject.type}</h2>
      <div>Position: ({selectedObject.x}, {selectedObject.y})</div>
      <div>Size: {selectedObject.width}x{selectedObject.height}</div>

      {selectedObject.type === 'barrack' && (
        <BarrackUI
          selectedObject={selectedObject}
          {...props}
        />
      )}
    </div>
  );
}
