const Addition = require('./Addition');
const Subtraction = require('./Subtraction');
const Multiplication = require('./Multiplication');
const Division = require('./Division');
const PrimeChecker = require('./PrimeChecker');
const MaxFinder = require('./MaxFinder');

console.log('========== Math Package -- JU  ==========\n');

// Addition
const addition = new Addition(10, 20);
console.log('Addition (10 + 20):', addition.add());

const addition2 = new Addition(10, 20, 30);
console.log('Addition (10 + 20 + 30):', addition2.add());

console.log('----------------------------------');

// Subtraction
const subtraction = new Subtraction(30, 15);
console.log('Subtraction (30 - 15):', subtraction.subtract());

const subtraction2 = new Subtraction(50, 20, 10);
console.log('Subtraction (50 - 20 - 10):', subtraction2.subtract());

console.log('----------------------------------');

// Multiplication
const multiplication = new Multiplication(5, 4);
console.log('Multiplication (5 × 4):', multiplication.multiply());

const multiplication2 = new Multiplication(2, 3, 4);
console.log('Multiplication (2 × 3 × 4):', multiplication2.multiply());

console.log('----------------------------------');

// Division
const division = new Division(20, 5);
console.log('Division (20 ÷ 5):', division.divide());

const division2 = new Division(100, 5, 2);
console.log('Division (100 ÷ 5 ÷ 2):', division2.divide());

console.log('----------------------------------');

// Prime Checker
const primeChecker = new PrimeChecker(17);
console.log('Is 17 Prime?', primeChecker.isPrime());

const primeChecker2 = new PrimeChecker(18);
console.log('Is 18 Prime?', primeChecker2.isPrime());

console.log('----------------------------------');

// Max Finder

const maxFinder2 = new MaxFinder(15, 30, 25);
console.log('Maximum (15, 30, 25):', maxFinder2.findMax());

console.log('\n========== Program End ==========');