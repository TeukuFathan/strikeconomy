export default class Infantry {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = 'infantry';
    this.image = '/assets/infantry.png';
    this.width = 64;
    this.height = 64;
    this.speed = 1; // px per frame
    this.target = null;
  }

  spawn(preferredX, preferredY, gameObjects, mapWidth, mapHeight) {
    const offsets = [
        [0, 0],                          // preferred position
        [this.width, 0],                 // right
        [-this.width, 0],                // left
        [0, this.height],                // down
        [0, -this.height]                // up
    ];

    for (const [dx, dy] of offsets) {
        const newX = preferredX + dx;
        const newY = preferredY + dy;

        // ✅ Border check
        if (
            newX < 0 ||
            newY < 0 ||
            newX + this.width > mapWidth ||
            newY + this.height > mapHeight
        ) {
            continue; // skip this position
        }

        // ✅ Collision check with existing objects
        const blocked = gameObjects.some(obj =>
            newX < obj.x + obj.width &&
            newX + this.width > obj.x &&
            newY < obj.y + obj.height &&
            newY + this.height > obj.y
        );

        if (!blocked) {
            this.x = newX;
            this.y = newY;
            return true; // successful spawn
        }
    }

    return false; // no valid position found
}


  move(targetX, targetY, gameObjects) {
    // Basic direct movement for now
    const dx = targetX - this.x;
    const dy = targetY - this.y;
    const dist = Math.hypot(dx, dy);
    if (dist < this.speed) {
      this.x = targetX;
      this.y = targetY;
    } else {
      this.x += (dx / dist) * this.speed;
      this.y += (dy / dist) * this.speed;
    }
    // Add collision checks later
  }
}
