/**
 * Represents a multiplication operation.
 */
class Multiplication {
  /**
   * Creates a Multiplication object.
   *
   * @param {number} firstNumber - The first number.
   * @param {number} secondNumber - The second number.
   * @param {number} [thirdNumber=null] - The optional third number.
   */
  constructor(firstNumber, secondNumber, thirdNumber = null) {
    /**
     * The first number.
     * @type {number}
     */
    this.firstNumber = firstNumber;

    /**
     * The second number.
     * @type {number}
     */
    this.secondNumber = secondNumber;

    /**
     * The optional third number.
     * @type {?number}
     */
    this.thirdNumber = thirdNumber;
  }

  /**
   * Multiplies two or three numbers.
   *
   * @returns {number} Product of the numbers.
   */
  multiply() {
    if (this.thirdNumber === null) {
      return this.firstNumber * this.secondNumber;
    }

    return this.firstNumber * this.secondNumber * this.thirdNumber;
  }
}

module.exports = Multiplication;