import React, { useRef, useEffect } from 'react';

const GameMap = ({ gameObjects, onSelect }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Resize canvas to match its displayed size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw game objects
    const draw = async () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const obj of gameObjects) {
        const img = new Image();
        img.src = obj.image;
        await new Promise((resolve) => {
          img.onload = resolve;
        });
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
  }, [gameObjects, onSelect]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default GameMap;
