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
    let start = 0;
    let ending = A.length - 1;
    let longest = 2;

    while (start < A.length - 1) {
        let currentSlice = A.slice(start);
        // console.log(currentSlice);
        if (checkSwitch(currentSlice)) {
            if (currentSlice.length > longest) {
                longest = currentSlice.length;
            }
            break;
        } else {
            start += 1;
        }
    }

    while (ending > 1) {
        let currentSlice = A.slice(0, ending + 1);
        console.log(currentSlice);
        if (checkSwitch(currentSlice)) {
            if (currentSlice.length > longest) {
                longest = currentSlice.length;
            }
            break;
        } else {
            ending -= 1;
        }
    }

    return longest;
}

console.log(solution([7, 4, -2, 4, -2, -9]));

