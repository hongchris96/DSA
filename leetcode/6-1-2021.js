// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};


// 1672. Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

var maximumWealth = function(accounts) {
    let max = 0;
    for(let i=0; i< accounts.length; i++) {
        let thisSum = accounts[i].reduce((acc, ele) => acc + ele);
        if (thisSum > max) max = thisSum;
    }
    return max;
};

// Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.
// Implement the ParkingSystem class:

// ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
// bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 
// Example 1:

// Input
// ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]]
// Output
// [null, true, true, false, false]

// Explanation
// ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
// parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
// parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
// parkingSystem.addCar(3); // return false because there is no available slot for a small car
// parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

var ParkingSystem = function(big, medium, small) {
    this.big = [];
    this.medium = [];
    this.small = [];
    this.bigMax = big;
    this.mediumMax = medium;
    this.smallMax = small;
};

/** 
* @param {number} carType
* @return {boolean}
*/
ParkingSystem.prototype.addCar = function(carType) {
if (carType === 1) {
    if (this.big.length < this.bigMax) {
        this.big.push(1);
        return true;
    } else {
        return false;
    }
} else if (carType === 2) {
    if (this.medium.length < this.mediumMax) {
        this.medium.push(1);
        return true;
    } else {
        return false;
    }
} else if (carType === 3) {
    if (this.small.length < this.smallMax) {
        this.small.push(1);
        return true;
    } else {
        return false;
    }
}
};


// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

var smallerNumbersThanCurrent = function(nums) {
    let answer = new Array(nums.length).fill(0);
    for (let i=0; i < nums.length; i++) {
        for (let j=0; j < nums.length; j++) {
            if (nums[j] < nums[i]) answer[i] += 1;
        }
    }
    return answer;
};

// 1528. Shuffle String

// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Example 1:


// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.
// Example 3:

// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"
// Example 4:

// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"
// Example 5:

// Input: s = "art", indices = [1,0,2]
// Output: "rat"


var restoreString = function(s, indices) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        answer[indices[i]] = s[i];
    }
    
    return answer.join('');
    
    // let letterIndices = [];
    // for (let i = 0; i < s.length; i++) {
    //     letterIndices.push([s[i], indices[i]]);
    // }
    // return qs(letterIndices).map(ele => ele[0]).join('');
};

const qs = function(arr) {
    if (arr.length <= 1) return arr;
    
    let piv = arr[0];
    
    let left = arr.slice(1).filter((ele) => ele[1] < piv[1]);
    let right = arr.slice(1).filter((ele) => ele[1] >= piv[1]);
    
    return qs(left).concat([piv], qs(right));
}

