/**
 * Represents a division operation.
 */
class Division {
  /**
   * Creates a Division object.
   *
   * @param {number} dividend - The dividend.
   * @param {number} divisor - The divisor.
   * @param {number} [thirdNumber=null] - The optional third divisor.
   */
  constructor(dividend, divisor, thirdNumber = null) {
    /**
     * The dividend.
     * @type {number}
     */
    this.dividend = dividend;

    /**
     * The divisor.
     * @type {number}
     */
    this.divisor = divisor;

    /**
     * The optional third divisor.
     * @type {?number}
     */
    this.thirdNumber = thirdNumber;
  }

  /**
   * Divides two or three numbers.
   *
   * @returns {number} Quotient of the numbers.
   * @throws {Error} If any divisor is zero.
   */
  divide() {
    if (this.divisor === 0) {
      throw new Error('Division by zero is not allowed.');
    }

    if (this.thirdNumber === null || this.thirdNumber === undefined || this.thirdNumber === '') {
      return this.dividend / this.divisor;
    }

    if (this.thirdNumber === 0) {
      throw new Error('Division by zero is not allowed.');
    }

    return (this.dividend / this.divisor) / this.thirdNumber;
  }
}

module.exports = Division;