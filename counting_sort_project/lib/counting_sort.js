function countingSort(arr, max) {
    let buckets = new Array(max+1).fill().map(() => new Array);
    for (let i = 0; i < arr.length; i++) {
        buckets[arr[i]].push(arr[i]);
    }
    return [].concat(...buckets);
}


module.exports = {
    countingSort
};