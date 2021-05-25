function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        for (var j = i - 1; j >= 0 && currentElement < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentElement;
    }
    return arr;
}

module.exports = {
    insertionSort
};