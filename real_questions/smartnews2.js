// Given an Array, find the longest switching numbers sequence
// switching numbers is an array with all even index the same and all odd index the same
    // e.g. [2,-4,2,-4], [5,5,5]


function checkSwitch(arr) {
    let ele1 = arr[0];
    let ele2 = arr[1];
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] != ele1) {
            return false;
        }
        if (i != arr.length-1 && arr[i+1] != ele2) {
            return false;
        }
    }
    return true;
}

// console.log(checkSwitch([4,2,4,2,7]));

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let longest = 2;

    for (let start = 0; start < A.length - 2; start++) {
        let currentLongest = 2;
        for (let ending = A.length; ending > start + 2; ending--) {
            let currentSlice = A.slice(start, ending);
            if (checkSwitch(currentSlice)) {
                currentLongest = currentSlice.length;
                if (currentLongest > longest) {
                    longest = currentLongest;
                }
                break;
            }
        }
    }
    
    return longest;
}

console.log(solution([7, 4, -2, 4, -2, -9])); // 4
console.log(solution([7, 7, 7, 4, -2, 4, -2, -9])); // 4
console.log(solution([7, 4, -2, 4, -9])); // 3
console.log(solution([7, 4, -2, 4, -2, -9, -2, -9, -2])); // 5
console.log(solution([1, 2, 3, 4, 5])) // 2
console.log(solution([3, 3, 3, 4, 5])) // 3

