import EconomyPanel from './EconomyPanel';
// import LogPanel from './LogPanel';     ← for middle top
// import ActionPanel from './ActionPanel'; ← for middle bottom
// import InfoPanel from './InfoPanel';     ← for left panel

export default function UI({ economy }) {
  return (
    <div className="absolute inset-0 flex justify-between p-4 pointer-events-none">
      
      {/* Left Box */}
      <div className="w-1/6 pointer-events-auto bg-gray-300/30 p-2">
        {/* <InfoPanel /> */}
        <div className="bg-gray-200 p-2">Left Box</div>
      </div>

      {/* Middle Box (Top & Bottom stacked) */}
      <div className="w-2/6 flex flex-col justify-between space-y-4 pointer-events-auto">
        <div className="bg-gray-100 p-2">Top Middle Box</div>
        <div className="bg-gray-300 p-2">Bottom Middle Box</div>
      </div>

      {/* Right Box (EconomyPanel) */}
      <div className="w-1/6 pointer-events-auto bg-gray-300/30 p-2">
        <EconomyPanel economy={economy} />
      </div>

    </div>
  );
}
