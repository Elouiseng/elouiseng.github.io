const canvas    = document.getElementById('snakeGame');
const ctx       = canvas.getContext('2d');
const gridSize  = 20;
const tileCount = canvas.width / gridSize;

let snake   = [{ x: 10, y: 10 }];
let velocity= { x: 0, y: 0 };
let food    = randomFood();
let score   = 0;

document.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':    if (velocity.y === 0) velocity = { x: 0, y:-1 }; break;
    case 'ArrowDown':  if (velocity.y === 0) velocity = { x: 0, y: 1 }; break;
    case 'ArrowLeft':  if (velocity.x === 0) velocity = { x:-1, y: 0 }; break;
    case 'ArrowRight': if (velocity.x === 0) velocity = { x: 1, y: 0 }; break;
  }
});

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

function update() {
  const head = {
    x: (snake[0].x + velocity.x + tileCount) % tileCount,
    y: (snake[0].y + velocity.y + tileCount) % tileCount
  };

  if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
    resetGame();
    return;
  }

  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = randomFood();
  } else {
    snake.pop();
  }
}

function draw() {
  // clear
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // snake
  ctx.fillStyle = '#0f0';
  snake.forEach(seg => {
    ctx.fillRect(seg.x * gridSize, seg.y * gridSize, gridSize - 2, gridSize - 2);
  });

  // food
  ctx.fillStyle = '#f00';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

}

function randomFood() {
  return {
    x: Math.floor(Math.random() * tileCount),
    y: Math.floor(Math.random() * tileCount)
  };
}

function resetGame() {
  snake    = [{ x: 10, y: 10 }];
  velocity = { x: 0, y: 0 };
  score    = 0;
}

gameLoop();