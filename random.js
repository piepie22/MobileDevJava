//Part 1 - Generating a random array

function generateRandomArr() {
    const size = 20; //20 total
    const min = 1; //min number 
    const max = 100; //max number
    const randomArr = [];

    for (let i = 1; i < size; i++) {
        randomArr.push(min + Math.floor(Math.random() * (max - min + 1))); //utilizing "generating random arrays" module 
    }
    return randomArr; //used "arr" from utilizing learning video, curious if I can write "array" as well - please advise if you see professor 
}
const numbers = generateRandomArr(); 
console.log("Random Numbers - Random.js:", numbers); // put -ransom.js so i know in the other parts its coming from this file
export default numbers;


