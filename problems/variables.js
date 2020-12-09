// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
const birthYearM = 1982

//  * Store a future year in a variable.
let futureYear = 2030

//  * Calculate your 2 possible ages for that year based on the stored values.
let ageMin = futureYear - birthYearM - 1
let ageMax = futureYear - birthYearM

//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear)

// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
let currentAge = 38

//  * Store a maximum age in a constant variable.
const maxAge = 100

//  * Store an estimated snack amount per day (as a number).
let dailySnacks = 3

//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
let snackNumber = (maxAge - currentAge) * dailySnacks * 365

//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
console.log("You will need " + snackNumber + " snacks to last you until the age of " + maxAge)


// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
let radius = 15
 
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
let pi = Math.PI
let diameter = 2 * radius
let circumference = pi * diameter
console.log("The circumference is " + circumference)

//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
let area = pi * radius^2
console.log("The area is " + area)

//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
let celciusTemp = 30

//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
let fahrenheitTemp = (celciusTemp * 1.8) + 32
console.log(celciusTemp + "°C is " + fahrenheitTemp + "°F.")

//  * Now store a fahrenheit temperature into a variable.
let fahrenheitTemp2 = 30

//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."
let celciusTemp2 = (fahrenheitTemp2 - 32) * (.5556)
console.log(fahrenheitTemp2 + "°F is " + celciusTemp2 + "°C.")


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
let aliceGrade = 75

//  * Store Bob's grade on a test to a variable
let bobGrade = 80

//  * Store Cam's grade on a test to a variable
let camGrade = 65

//  * Find the average grade of all students
let avg = (aliceGrade + bobGrade + camGrade) / 3

//  * Store Dee's grade on a test to a variable
let deeGrade = 90

//  * Find the average grade of all students
let classAvg = (aliceGrade + bobGrade + camGrade + deeGrade) / 4

//  * Print out if Dee's grade is higher than the class average
console.log("Is it true that Dee's grade is higher than the class average? " + "It is " + (deeGrade > classAvg) + ".")


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.
let a = 123
let b = a % 10
console.log("The last digit of " + a + " is " + b + ".")


// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// 3 years from now Alice will be 2 times older than her brother Bob. Bob is 12 years old. How old is Alice? 27
let x = 3
let y = 2
let bob = 12
let alice = (y * (bob + x) - x)

console.log("Alice is " + alice + " years old.")

// alice + x = y * (bob + x)
// 27 + 3 = 2 * (12 + 3)


// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice
x = 1
y = 3
alice = (y * (bob + x) - x)

console.log("Alice is " + alice + " years old.")


// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 20
let numberOfDogs = 60
let dogPerc =  (numberOfDogs / (numberOfCats + numberOfDogs) * 100)
let catPerc = (numberOfCats / (numberOfCats + numberOfDogs) * 100)

console.log(Math.floor(dogPerc) + "% of the animals in the daycare are dogs.")
console.log(Math.floor(catPerc) + "% of the animals in the daycare are cats.")


// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.
let year = 1900

if ((year % 100 === 0) && (year % 400 === 0)){
    console.log("Leap Year!")    
}
else { console.log("Not a Leap Year!")}


// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    // console.log(num3)
//     ```
console.log("Prediction: 10")
console.log(num3)


// b. 
//     ```js
    let str = 'jel' 
    str += 'lo'
    // console.log(str)
//     ```
console.log("Prediction: jello")
console.log(str)


// c. 
//     ```js
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    // console.log(typeof(sentence))
//     ```
console.log("Prediction: string")
console.log(typeof(sentence))

