/**
 * Represents a prime number checking operation.
 */
class PrimeChecker {
  /**
   * Creates a PrimeChecker object.
   */
  constructor() {
    /**
     * The name of the operation.
     * @type {string}
     */
    this.operation = 'Prime Check';
  }

  /**
   * Determines whether a given number is a prime number.
   *
   * A prime number is a natural number greater than 1 that has no
   * positive divisors other than 1 and itself. This method uses
   * trial division up to the square root of the number for efficiency.
   *
   * @param {number} number - The number to check for primality.
   * @returns {boolean} `true` if the number is prime, `false` otherwise.
   */
  isPrime(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }
}

module.exports = PrimeChecker;