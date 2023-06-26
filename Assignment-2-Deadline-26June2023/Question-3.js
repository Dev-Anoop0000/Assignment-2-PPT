console.log(`
Question 3- We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
`);

///// Programmm......

function findSubsequence(nums) {
    let maxLen = 0;
    const frequency = {};

    // Calculate frequency of each number
    for (let i of nums) {
        if (i in frequency) {
            frequency[i]++;

        } else {
            frequency[i] = 1;

        }
    }

    // Find the length of the longest harmonious subsequence
    for (const key in frequency) {
        const currentCount = frequency[key];
        const nextCount = frequency[parseInt(key) + 1];

        if (nextCount) {
            const total = currentCount + nextCount;
            maxLen = Math.max(maxLen, total);
        }
    }
    console.log(frequency);
    return maxLen;
}

let nums = [1, 3, 3, 5, 3, 2, 2, 7];
let result = findSubsequence(nums);
console.log("The longest harmonious Subsequence is : ", result);