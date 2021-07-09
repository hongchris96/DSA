// 797. All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.
// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Example 1:
// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

var allPathsSourceTarget = function(graph) {
  let answer = [];
  let endVal = graph.length - 1
  buildPath([0], graph, answer, endVal);
  return answer;
};

var buildPath = function(number, graph, total, endVal) {
  let lastNumber = number[number.length - 1];
  if (lastNumber === endVal) return number;
  for (let i = 0; i < graph[lastNumber].length; i++) {
      let subPath = buildPath(number.concat([graph[lastNumber][i]]), graph, total, endVal);
      if (subPath) total.push(subPath);
  }
}