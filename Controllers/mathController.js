const Addition = require('../Models/Addition');
const Subtraction = require('../Models/Subtraction');
const Multiplication = require('../Models/Multiplication');
const Division = require('../Models/Division');
const PrimeChecker = require('../Models/PrimeChecker');
const MaxFinder = require('../Models/MaxFinder');

exports.add = (req, res) => {
  const {
    firstNumber,
    secondNumber,
    thirdNumber,
  } = req.body;

  const addition = new Addition(
    firstNumber,
    secondNumber,
    thirdNumber,
  );

  res.json({
    result: addition.add(),
  });
};

exports.subtract = (req, res) => {
  const {
    firstNumber,
    secondNumber,
    thirdNumber,
  } = req.body;

  const subtraction = new Subtraction(
    firstNumber,
    secondNumber,
    thirdNumber,
  );

  res.json({
    result: subtraction.subtract(),
  });
};

exports.multiply = (req, res) => {
  const {
    firstNumber,
    secondNumber,
    thirdNumber,
  } = req.body;

  const multiplication = new Multiplication(
    firstNumber,
    secondNumber,
    thirdNumber,
  );

  res.json({
    result: multiplication.multiply(),
  });
};

exports.divide = (req, res) => {
  const {
    firstNumber,
    secondNumber,
    thirdNumber,
  } = req.body;

  const division = new Division(
    firstNumber,
    secondNumber,
    thirdNumber,
  );

  res.json({
    result: division.divide(),
  });
};

exports.maximum = (req, res) => {
  const {
    firstNumber,
    secondNumber,
    thirdNumber,
  } = req.body;

  const maximum = new MaxFinder(
    firstNumber,
    secondNumber,
    thirdNumber,
  );

  res.json({
    result: maximum.findMax(),
  });
};

exports.prime = (req, res) => {
  const { number } = req.body;

  const prime = new PrimeChecker(number);

  res.json({
    result: prime.isPrime(),
  });
};
