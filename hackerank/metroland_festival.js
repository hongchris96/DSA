// Given multiple city coordinates and number of people in each city
// return the least total cost of traveling (dependent on distance) for everyone to get to the same location

// params
// numPeople = [1,2];
// x = [1, 3];
// y = [2, 3];
// City located at (x = 1, y = 2) has 1 person
// City located at (x = 3, y = 3) has 2 people

// a possible location to travel to is (x = 3, y = 2)
// the cost would be 1 * (|3 - 1| + |2 - 2|) + 2 * (|3 - 3| + |2 - 3|) = 4


// ERROR space/stack problem?
function minimizeCost(numPeople, x, y) {
  // Write your code here
  let cityMatrices = [];
  let matriXLength = Math.max(...x);
  let matriYLength = Math.max(...y);

  // generate matrix for each city of their traveling cost to different coordinates
  for (let i = 0; i < x.length; i++) {
      let currentCityMatrix = new Array(matriXLength).fill().map(ele => new Array(matriYLength));
      for (let row = 0; row < currentCityMatrix.length; row++) {
          for (let col = 0; col < currentCityMatrix[0].length; col++) {
              let distanceX = Math.abs(x[i] - 1 - col);
              let distanceY = Math.abs(y[i] - 1 - row);
              currentCityMatrix[row][col] = distanceX + distanceY;
          }
      }
      cityMatrices.push(currentCityMatrix.flat());
  }
  let leastSum = Infinity;
  // for each matrix location, compute the sum of all city matrix at that location
  for (let i = 0; i < cityMatrices[0].length; i++) {
      let currentSum = 0;
      for (let j = 0; j < numPeople.length; j++) {
          currentSum += cityMatrices[j][i] * numPeople[j];
      }
      leastSum = Math.min(leastSum, currentSum);
  }
  return leastSum;   
}

