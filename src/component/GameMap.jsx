import React, { useRef, useEffect } from 'react';

const GameMap = ({ gameObjects, onSelect, reportSize }) => { // <-- added reportSize
  const canvasRef = useRef();
  const imageCacheRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Resize canvas to match its displayed size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // ✅ Report the current canvas size to App.jsx
    reportSize?.(canvas.width, canvas.height);

    // Draw game objects
    const draw = async () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const obj of gameObjects) {
        if (!imageCacheRef.current[obj.image]) {
            const img = new Image();
            img.src = obj.image;
            await new Promise((resolve) => { img.onload = resolve; });
            imageCacheRef.current[obj.image] = img;
        }
        const img = imageCacheRef.current[obj.image];
        ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
      }
    };

    draw();

    // Handle click detection
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (const obj of gameObjects) {
        if (
          mouseX >= obj.x &&
          mouseX <= obj.x + obj.width &&
          mouseY >= obj.y &&
          mouseY <= obj.y + obj.height
        ) {
          onSelect?.(obj);
          return;
        }
      }

      onSelect?.(null); // Deselect if clicked empty space
    };

    canvas.addEventListener('click', handleClick);
    return () => canvas.removeEventListener('click', handleClick);
  }, [gameObjects, onSelect, reportSize]); // <-- added reportSize here to rerun on resize

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default GameMap;
