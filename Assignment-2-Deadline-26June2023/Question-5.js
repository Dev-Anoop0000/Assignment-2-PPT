console.log(`
Question-5 : Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

`);


///// Programmmmm.....

function findMaxProduct(array, n) {
    if (n < 3) {
        return -1;
    }
    let max_product = 0;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                max_product = (array[i] * array[j] * array[k]);
            }
        }
    }

    return max_product;

}

let array = [7, 1, 5, 7, 6, 3, 5, 8];
array = array.sort((a, b) => {
    return a - b;
});
// console.log(array);
let n = array.length;
let max = findMaxProduct(array, n);

if (max == -1) {
    console.log("Multiplication not possible 🤔");

} else {
    console.log("Maximum Product of Three Element : ", max);
}