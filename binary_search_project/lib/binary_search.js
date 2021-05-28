function binarySearch(array, target) {
    // console.log(array);
    if (array.length === 0) return false;
    
    let midIdx = Math.floor(array.length / 2);
    if (array[midIdx] === target) return true;
    else if (array[midIdx] > target) return binarySearch(array.slice(0, midIdx), target);
    else {
        return binarySearch(array.slice(midIdx + 1), target);
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    let midIdx = Math.floor(array.length / 2);
    if (array[midIdx] === target) return midIdx;
    else if (array[midIdx] > target) return binarySearchIndex(array.slice(0, midIdx), target);
    else {
        let result = binarySearchIndex(array.slice(midIdx + 1), target);
        return result === -1 ? -1 : midIdx + result + 1;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};


// console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 24));