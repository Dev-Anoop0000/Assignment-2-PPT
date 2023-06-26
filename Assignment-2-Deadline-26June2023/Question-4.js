console.log(`
Question -4 : You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
`);


/////// Programmmmmm......

function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    const length = flowerbed.length;

    for (let i = 0; i < length; i++) {
        if (
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === length - 1 || flowerbed[i + 1] === 0)
        ) {
            count++;
            flowerbed[i] = 1;
            // console.log(flowerbed[i]);
        }
    }

    return count >= n;
}


let flower = [1, 0, 0, 0, 1]
let n = 1;

let result = canPlaceFlowers(flower, n);
console.log(result);


if (result === true) {
    console.log("Yes , You can Place a Flower 😊.")
} else {
    console.log("No , You can Place a Flower 😕.")
}