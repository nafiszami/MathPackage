/**
 * Represents an Addition class for performing safe addition operations.
 */
class Addition {
  /**
   * Creates an Addition object.
   *
   * @param {...number} numbers Numbers to initialize the object.
   */
  constructor(...numbers) {
    this.numbers = Addition.#normalize(numbers);
  }

  /**
   * Validates a number.
   *
   * @private
   * @param {*} value Value to validate.
   * @throws {TypeError} If the value is not a finite number.
   */
  static #validate(value) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(
        `Invalid number: ${value}. Only finite numeric values are allowed.`,
      );
    }
  }

  /**
   * Normalizes arguments.
   *
   * Supports:
   * - (1,2,3)
   * - ([1,2,3])
   *
   * @private
   * @param {Array} values Values to normalize.
   * @returns {number[]} Normalized array.
   */
  static #normalize(values) {
    const numbers = Array.isArray(values[0]) ? values[0] : values;

    numbers.forEach((value) => Addition.#validate(value));

    return numbers;
  }

  /**
   * Adds all stored numbers.
   *
   * @returns {number} Sum of stored numbers.
   */
  add() {
    return this.numbers.reduce((sum, number) => sum + number, 0);
  }

  /**
   * Adds numbers without creating an object.
   *
   * Supports:
   * addValues(1,2,3)
   * addValues([1,2,3])
   *
   * @param {...number|number[]} values Numbers or an array of numbers.
   * @returns {number} Sum.
   */
  static addValues(...values) {
    return Addition.#normalize(values)
      .reduce((sum, number) => sum + number, 0);
  }
}

module.exports = Addition;