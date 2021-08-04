/*
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER startRow
 *  3. INTEGER startCol
 *  4. INTEGER endRow
 *  5. INTEGER endCol
 */

// Run time problem

function minMoves(n, startRow, startCol, endRow, endCol) {
  // Write your code here
  let visited = {};
  traverse(startRow, startCol, 0, n, visited);
  return visited[`${endRow}-${endCol}`];
}

function traverse(x, y, steps, n, visited) {
  let dirs = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
  let key = `${x}-${y}`;
  if (visited[key] !== undefined) {
      if (steps < visited[key]) visited[key] = steps;
      else return;
  }
  visited[key] = steps;
  for (let dir of dirs) {
      let nextx = x + dir[0];
      let nexty = y + dir[1];
      if (nextx >= 0 && nextx < n && nexty >= 0 && nexty < n) {
          traverse(nextx, nexty, steps + 1, n, visited);
      }
  }
}