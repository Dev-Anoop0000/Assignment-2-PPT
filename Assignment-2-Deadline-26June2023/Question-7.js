console.log(`
Question - 7 : An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
`);


///Programmmmmm.........
function findMonotonic() {
    count1 = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= array[i + 1]) {
            count1++;

        }

    }
    if (count1 == array.length - 1) {
        return true
    } else {
        return false;
    }



}

let array = [1, 2, 4, 5, 9, 12, 15];

console.log("Array : ", array)
let count1;
let result = findMonotonic();
console.log(result);