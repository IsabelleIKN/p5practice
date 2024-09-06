let grid = [
  [2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2],
  [2, 1, 0, 0, 1, 2, 1, 0, 0, 1, 2],
  [1, 0, 0, 0, 0, 1, 0, 2, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2],
  [2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2],
  [2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2]
];

let colors = ['red', 'black', 'white'];
let cellSize = 50;

function setup() {
  createCanvas(550, 550);
  noLoop();
  print('setup complete');
}

function draw() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      let colorIndex = grid[y][x];
      fill(colors[colorIndex]);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      //print('drawing rect at x ' + x * cellSize + ' and y ' + y * cellSize);
    }
  }
}