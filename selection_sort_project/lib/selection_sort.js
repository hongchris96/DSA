function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currentMin = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < currentMin) swap(arr, i, j);
        }
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};