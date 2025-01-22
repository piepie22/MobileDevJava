// Part 5 - Calculating Average Grades

function calculateAverage(grades) {
    let total = 0;
    for (let grade of Object.values(grades)) {
        total += grade;
    }
    return total / Object.keys(grades).length;
}//focused on "function manipulation" and "objects"  
const javagrades = { //names and grades
    Mary: 72,
    Diana: 99,
    Leila: 83,
    Macie: 95,
    Sharon: 75
};
//console logs
console.log("Java Grades:", javagrades);
const averageGrade = calculateAverage(javagrades);
console.log("Calculated Average:", (averageGrade));
