function radixSort(arr) {
    if (!Array.isArray(arr)) return null;   // edge case
    if (arr.length === 0) return arr;       // edge case
    let digits = new Array(10).fill().map(() => new Array); // making digit buckets
    let newArr = arr;                       // initial array copy
    let maxDig = arr[0].toString().length;  // initial max digit
    // iterate to discover max digit
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length > maxDig) maxDig = arr[i].toString().length;
    }
    // Start operation from the 1s, then 10s and up
    for (let round = 1; round <= maxDig; round++ ) {
        // Checking each number in the array, put them in corresponding buckets
        for (let i = 0; i < newArr.length; i++) {
            let currentDig = Math.floor(newArr[i]/(10**(round-1))) % 10;
            digits[currentDig].push(newArr[i]);
        }
        // Clear out array copy
        newArr = [];
        // Take numbers out from buckets and put it back into array copy, FIFO
        for (let bucket = 0; bucket < digits.length; bucket++) {
            while (digits[bucket].length !== 0) {
                newArr.push(digits[bucket].shift());
            }
        }
    }
    return newArr;
}

module.exports = {
    radixSort
};

console.log(radixSort([4, 9, 0, 23, 15, 100, 66, 41, 5, 10]));