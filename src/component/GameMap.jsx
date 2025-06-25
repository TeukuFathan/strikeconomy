import React, { useEffect, useRef } from 'react';

const GameMap = ({ gameObjects }) => {
  const canvasRef = useRef();
  const imageCache = useRef({});

  const loadImage = (key, src) =>
    new Promise((resolve) => {
      if (imageCache.current[key]) return resolve(imageCache.current[key]);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.current[key] = img;
        resolve(img);
      };
    });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = false;

    const draw = async () => {
      ctx.clearRect(0, 0, width, height);

      for (const obj of gameObjects) {
        const img = await loadImage(obj.type, obj.image);
        ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
      }
    };

    draw();
  }, [gameObjects]);

  return <canvas ref={canvasRef} className="w-full h-full border" />;
};

export default GameMap;
