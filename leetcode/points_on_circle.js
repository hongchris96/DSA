// 1828. Queries on Number of Points Inside a Circle

// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.
// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.
// For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.
// Return an array answer, where answer[j] is the answer to the jth query.

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    // for each queries/circle
        // let howMany = 0
        // for each points
            // if inside, howMany + 1
    let answer = [];
    for (let q = 0; q < queries.length; q++) {
        let howMany = 0;
        for (let p = 0; p < points.length; p++) {
            if (inside(points[p], queries[q])) {
                howMany += 1;
            }
        }
        answer.push(howMany);
        howMany = 0;
    }
    return answer;
};

// helper is inside or not, (point, query) => return boolean
var inside = function(point, query) {
    let xdistance = point[0] - query[0];
    let ydistance = point[1] - query[1];
    let distance = (xdistance**2 + ydistance**2)**(1/2);
    return distance <= query[2];
};
