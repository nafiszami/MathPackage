/**
 * Represents a subtraction operation.
 */
class Subtraction {
  /**
   * Creates a Subtraction object.
   *
   * @param {number} firstNumber - The first number.
   * @param {number} secondNumber - The second number.
   * @param {number} [thirdNumber=null] - The optional third number.
   */
  constructor(firstNumber, secondNumber, thirdNumber = null) {
    /**
     * The first number.
     *
     * @type {number}
     */
    this.firstNumber = firstNumber;

    /**
     * The second number.
     *
     * @type {number}
     */
    this.secondNumber = secondNumber;

    /**
     * The optional third number.
     *
     * @type {?number}
     */
    this.thirdNumber = thirdNumber;
  }

  /**
   * Subtracts two or three numbers.
   *
   * @returns {number} Difference of the numbers.
   */
  subtract() {
    if (this.thirdNumber === null) {
      return this.firstNumber - this.secondNumber;
    }

    return this.firstNumber - this.secondNumber - this.thirdNumber;
  }
}

module.exports = Subtraction;