// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums, memo={}) {

    // Tabulation: 

    // let steppable = new Array(nums.length).fill(false);
    // steppable[0] = true;
    // for (let i = 0; i < nums.length; i++) {
    //     if (steppable[i] === true) {
    //         let howManySteps = nums[i];
    //         for (let step = 1; step <= howManySteps; step++) {
    //             steppable[i + step] = true;
    //         }
    //     }
    // }
    // return steppable[steppable.length-1];

    // Memoization

    let arrlengths = nums.length;
    if (arrlengths in memo) return memo[arrlengths];
    if (nums.length === 0) return true;
    for (let i = 1; i <= nums[0]; i++) {
        if (stepper(nums.slice(i), memo)) {
            memo[arrlengths] = true;
            return memo[arrlengths];
        };
    }
    memo[arrlengths] = false;
    return memo[arrlengths];
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums, memo={}) {
    if (nums.length in memo) return memo[nums.length];
    if (nums.length === 0) return 0;

     // Tabulation: 

    // let currentMaxs = new Array(nums.length).fill(0);
    // currentMaxs[0] = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     let twoToTheLeft = currentMaxs[i - 2] === undefined ? 0 : currentMaxs[i - 2];
    //     let oneToTheLeft = currentMaxs[i - 1];
    //     let sumHere = twoToTheLeft + nums[i];
    //     currentMaxs[i] = Math.max(oneToTheLeft, sumHere);
    // }
    // return currentMaxs[currentMaxs.length - 1];
    // maxNonAdjacentSum([2, 7, 9, 3, 4])   // => [2, 7, 11, 11, 15]
    // maxNonAdjacentSum([4,2,1,6])         // => [4, 4, 5, 10]

    // Memoization: 
    
    let thisElement = nums[0];
    memo[nums.length] = Math.max(
        // this element + the max for [2,3,4,n] skipping neighbor
        thisElement + maxNonAdjacentSum(nums.slice(2), memo),
        // the max for [1,2,3,4,n]
        maxNonAdjacentSum(nums.slice(1), memo)
    ); // Eventual base case is [] => 0, [n] => n + 0
    return memo[nums.length];

}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
    let amounts = new Array(amount + 1).fill(Infinity); // 12 => [0 .. 11]
    amounts[0] = 0;
    coins.forEach( coin => {
        for (let amt = 0; amt < amounts.length; amt++) {
            for (let count = 0; count * coin <= amt; count++) {
                let remainder = amt - count * coin;
                let currentAmount = amounts[remainder] + count;
                if (currentAmount < amounts[amt]) amounts[amt] = currentAmount;
            }
        }
    });
    return amounts[amounts.length - 1];
}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};