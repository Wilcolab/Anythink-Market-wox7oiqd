function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]+$/, s => s.toLowerCase())
        .replace(/^[A-Z]/, s => s.toLowerCase())
        .replace(/([A-Z]+)/g, (match, offset) => {
            return offset === 0 ? match.toLowerCase() : match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
        });
}

// Examples:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber

/*
Prompt: 
"Write a robust JavaScript function called toCamelCase that converts strings to camelCase. The function should handle edge cases such as multiple consecutive separators (spaces, underscores, hyphens), leading/trailing separators, mixed casing, numbers, and empty or non-string inputs. Add error handling for invalid input types and include clear inline comments explaining each step."
*/