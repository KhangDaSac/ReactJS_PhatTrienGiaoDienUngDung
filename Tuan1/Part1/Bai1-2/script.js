let massMark = 78
let heightMart = 1.69
let massJohn = 92
let heightJohn = 1.95

let massMark2 = 95
let heightMart2 = 1.88
let massJohn2 = 85
let heightJohn2 = 1.76

function calcBMI(mass, height) {
    return mass / (height * height)
}

let BMIMark = calcBMI(massMark, heightMart);
let BMIJohn = calcBMI(massJohn, heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

console.log('Test 1');
console.log(`Mark's BMI:`, BMIMark.toFixed(2));
console.log(`John's BMI:`, BMIJohn.toFixed(2));
if (markHigherBMI) {
    console.log(`Mark's BMI ${BMIMark.toFixed(2)} is higher than John's ${BMIJohn.toFixed(2)}!`);
} else {
    console.log(`John's BMI ${BMIJohn.toFixed(2)} is higher than Mark's ${BMIMark.toFixed(2)}!`);
}

let BMIMark2 = calcBMI(massMark2, heightMart2);
let BMIJohn2 = calcBMI(massJohn2, heightJohn2);
let markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log('Test 2');
console.log(`Mark's BMI:`, BMIMark.toFixed(2));
console.log(`John's BMI:`, BMIJohn.toFixed(2));
if (markHigherBMI2) {
    console.log(`Mark's BMI ${BMIMark2.toFixed(2)} is higher than John's ${BMIJohn2.toFixed(2)}!`);
} else {
    console.log(`John's BMI ${BMIJohn2.toFixed(2)} is higher than Mark's ${BMIMark2.toFixed(2)}!`);
}

