function merge(array1, array2) {
    let newArr = [];
    while (array1.length !== 0 && array2.length !== 0) {
        if (array1[0] < array2[0]) newArr.push(array1.shift());
        else newArr.push(array2.shift());
    }
    newArr.push(...array1, ...array2);
    return newArr;
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};