// Go from top left to bottom right of the grid, # is a wall, each step is 1 time unit
// row = 3;
// grid = ['..##',
//         '#.##',
//         '#...'];
// maxTime = 5
// return 'Yes'

// Failed run time for large input
// Also didn't take into account of going up and going left in case of zig zagging maps

function reachTheEnd(grid, maxTime) {
  // Write your code here
  let totalRows = grid.length - 1;
  let totalColumn = grid[grid.length - 1].length - 1;
  let stepsGrid = {};
  traverse(0, 0, totalRows, totalColumn, 0, grid, stepsGrid);
  return stepsGrid[`${totalRows}-${totalColumn}`] <= maxTime ? "Yes" : "No";
}

function traverse(startr, startc, endr, endc, steps, normalGrid, stepsGrid) {
  const dirs = [[0,1], [1,0]];
  let key = startr + "-" + startc;
  if (!stepsGrid[key]) stepsGrid[key] = steps;
  else stepsGrid[key] = Math.min(stepsGrid[key], steps);
  for (let i = 0; i < dirs.length; i++) {
      let nextr = startr + dirs[i][0];
      let nextc = startc + dirs[i][1];
      if (nextc <= endc && nextc >= 0 && nextr <= endr && nextr >= 0 && normalGrid[nextr][nextc] !== "#") {
          traverse(nextr, nextc, endr, endc, steps + 1, normalGrid, stepsGrid);
      }
  }
}