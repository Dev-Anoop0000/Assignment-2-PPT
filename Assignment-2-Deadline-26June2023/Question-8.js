console.log(`
Question - 8 : You are given an integer array nums and an integer k.
In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
`);


//// Programmmm......

function minDifference(nums, k) {
    let minNum = Infinity;
    let maxNum = -Infinity;

    for (const num of nums) {
        minNum = Math.min(minNum, num);
        maxNum = Math.max(maxNum, num);
    }
    // console.log(minNum);
    // console.log(maxNum);

    if (minNum === maxNum) {
        return 0;
    }

    let minScore = Infinity;
    // console.log(minScore);

    for (const num of nums) {
        const score1 = maxNum - (num + k);
        console.log("scroe1", score1);
        const score2 = (num - k) - minNum;
        console.log("score2", score2);
        minScore = Math.min(minScore, score1, score2);
    }



    return minScore;
}


let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 0;
let diff = minDifference(nums, k);
console.log("Output ", diff);