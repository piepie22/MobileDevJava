// Part 2 - Maximum Element

import numbers from './random.js'; // ES6 import from random.js code 

function findMaxMath(arr) { // finding the max number it generates 
    let maxValue = arr[0];
    let maxIndex = 0; 
    for (let num of arr) {  ///utilizing for, if and function concepts
        if (num > maxValue) {
            maxValue = num; 
            maxIndex = arr.indexOf(num);
        }
    }
    return maxIndex;
}
const maxIndex = findMaxMath(numbers); 

// console logs 
console.log("Maximum Element Numbers:", numbers); // numbers given from array from random.js * side note random.js is also called so it shows 
console.log("Maximum Element Index:", maxIndex); // finding which place the highest number is sitting in the array
console.log("Largest Number:", numbers[maxIndex]); // largest number
