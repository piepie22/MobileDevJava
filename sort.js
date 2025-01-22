//Part 4 - Sorting into DESCENDING order 

import numbers from './random.js'; //pulling from random.js file

function sortArrDescending(array) {
    return array.sort((a, b) => b - a);  //return function to sort descenting order - utilized "sorting arrays"
}
const sortedArr = sortArrDescending([...numbers]);

//console logs 
console.log("Descending Order:", sortedArr);
