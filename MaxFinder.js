/**
 * Represents a maximum value finding operation.
 */
class MaxFinder {
  /**
   * Creates a MaxFinder object.
   *
   * @param {number} firstNumber - The first number.
   * @param {number} secondNumber - The second number.
   * @param {number} thirdNumber - The third number.
   */
  constructor(firstNumber, secondNumber, thirdNumber) {
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
     * The third number.
     * @type {number}
     */
    this.thirdNumber = thirdNumber;
  }

  /**
   * Finds the maximum value among three numbers.
   *
   * @returns {number} The largest of the three numbers.
   */
  findMax() {
    return Math.max(
      this.firstNumber,
      this.secondNumber,
      this.thirdNumber,
    );
  }
}

module.exports = MaxFinder;