// 797. All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.
// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

var allPathsSourceTarget = function(graph) {
  // Store all paths
  let answer = [];
  // End of the path value
  let endVal = graph.length - 1;
  // Build all possible path, starting at node value of 0
  // also pass in overall graph, total path storage, end point
  buildPath([0], graph, answer, endVal);
  return answer;
};

var buildPath = function(path, graph, total, endVal) {
  // the last number of the current path
  let lastNumber = path[path.length - 1];
  // last number is the end point, path is complete 
  if (lastNumber === endVal) return path;
  // continue building path from the last number
  for (let i = 0; i < graph[lastNumber].length; i++) {
    // building subpath recursively with current path so far (path + a number in the subarray)
    let subPath = buildPath(path.concat([graph[lastNumber][i]]), graph, total, endVal);
    // if subPath is not undefined
    if (subPath) total.push(subPath);
  }
}