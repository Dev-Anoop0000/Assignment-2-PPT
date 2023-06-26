console.log(`
Question -6 : Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4

`);


/// Programmmmm.......

function findIndex() {

    if (target == array[mid]) {

        return mid;
    } else if (target > array[mid]) {


        for (let i = mid + 1; i <= length; i++) {
            if (array[i] == target) {
                return i;
            }
        }
    } else {

        for (let j = mid - 1; j >= 0; j--) {

            if (target == array[j]) {
                return j;
            }
        }

    }

}

let array = [6, 7, 8, 9, 10, 11, 12, 13, 15];
let length = array.length;
// console.log(length);
let mid = Math.floor(length / 2);
// console.log("Mid:", mid);
let target = 9;
let index = findIndex(array, mid);
console.log("Index number of target value : ", index);