// Longest Increasing Subsequence | DP-3
// Difficulty Level : Medium
// Last Updated : 28 May, 2021

// We have already discussed Overlapping Subproblems and Optimal Substructure properties. 
// Now, let us discuss the Longest Increasing Subsequence (LIS) problem as an example problem that can be solved using Dynamic Programming. 

// The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order. For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 and LIS is {10, 22, 33, 50, 60, 80}.

// Input: arr[] = {3, 10, 2, 1, 20}
// Output: Length of LIS = 3
// The longest increasing subsequence is 3, 10, 20

// Input: arr[] = {3, 2}
// Output: Length of LIS = 1
// The longest increasing subsequences are {3} and {2}

// Input: arr[] = {50, 3, 10, 7, 40, 80}
// Output: Length of LIS = 4
// The longest increasing subsequence is {3, 7, 40, 80}


const longest_inc_sub = function(arr) {
	let all_subs = [];
	for (let i = 0; i < arr.length; i++) {
		let current_sub = [arr[i]];
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] >= current_sub[current_sub.length-1]) {
				current_sub.push(arr[j]);
			}
		}
		all_subs.push(current_sub);
	}

	return Math.max(...all_subs.map(ele => ele.length));
}

console.log(longest_inc_sub([3, 10, 2, 1, 20]));
console.log(longest_inc_sub([3, 2]));
console.log(longest_inc_sub([50, 3, 10, 7, 40, 80]));
