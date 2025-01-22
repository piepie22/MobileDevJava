//Part 2 -Minimum Element
//exact same as maximum but using minimum math

import numbers from './random.js'; //ES6 import from random.js code 
function findMinMath(arr) { //finding min number it generates 
    let minValue = Math.min(...arr);
    return arr.findIndex(value => value === minValue); //utilizing custom sorting in "functions and array manipulation"
}
const minIndex = findMinMath(numbers); 

//console logs 
console.log("Minimum Element Numbers:", numbers); // numbers given from array from random.js * side note random.js is also called so it shows 
console.log("Minimum Element Index:", minIndex); //finding which place the highest number is sitting in the array
console.log("Largest Number:", numbers[minIndex]); //largest number
