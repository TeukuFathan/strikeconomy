import Infantry from '../units/Infantry.js';

export default class Barrack {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = 'barrack';
    this.image = '/assets/barrack.png';
    this.width = 128;
    this.height = 128;
  }

  handleButtonClick(setGameObjects, gameObjects) {
    // Here you handle *all button logic* for the barrack
    const infantry = this.produce(gameObjects);
    setGameObjects(prev => [...prev, infantry]);
  }

  produce(gameObjects, mapWidth, mapHeight) {
    const spawnX = this.x + this.width + 4; // preferred X (to the right)
    const spawnY = this.y;                  // preferred Y (same level)

    const infantry = new Infantry(spawnX, spawnY);

    const spawned = infantry.spawn(
        spawnX,
        spawnY,
        gameObjects,
        mapWidth,
        mapHeight
    );

    if (spawned) {
        return infantry;
    } else {
        console.log('No available space to spawn infantry.');
        return null;
    }
  }


}
