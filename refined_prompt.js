/**
 * Converts a string to camelCase format.
 *
 * This function normalizes the input string by:
 * - Trimming leading and trailing whitespace.
 * - Replacing all separators (spaces, underscores, hyphens) with a single space.
 * - Splitting the string into words.
 * - Lowercasing the first word and capitalizing the first letter of subsequent words.
 * - Handling mixed casing, numbers, and edge cases such as multiple consecutive separators.
 * - Returning an empty string for empty input or input containing only separators.
 * - Throwing a TypeError if the input is not a string.
 *
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase.
 * @throws {TypeError} Throws if the input is not a string.
 * @returns {string} The camelCase version of the input string.
 */

/**
 * Converts a string to dot.case format.
 *
 * This function normalizes the input string by:
 * - Inserting spaces between camelCase boundaries.
 * - Trimming leading and trailing whitespace.
 * - Replacing all separators (spaces, underscores, hyphens) with a single space.
 * - Splitting the string into words and filtering out empty strings.
 * - Lowercasing all words and joining them with dots.
 * - Handling mixed casing, numbers, and edge cases such as multiple consecutive separators.
 * - Throwing a TypeError if the input is not a string.
 *
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case.
 * @throws {TypeError} Throws if the input is not a string.
 * @returns {string} The dot.case version of the input string.
 */


/**
 * Chain prompt for Copilot to create a toKebabCase function:
 * 
 * 1. Start by writing a function called toKebabCase that takes a string input and throws a TypeError if the input is not a string.
 * 2. Normalize the input by trimming whitespace, replacing all separators (spaces, underscores, hyphens) with a single space, and inserting spaces between camelCase boundaries.
 * 3. Split the normalized string into words, lowercase all words, filter out empty strings, and join them with hyphens to produce the kebab-case result.
 */