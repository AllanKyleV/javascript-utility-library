// utils.js

// Capitalize a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Check string if it's a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Count vowels detailed
function countVowelsDetailed(str) {
  const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let char of str.toLowerCase()) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    }
  }

  const total = Object.values(counts).reduce((sum, num) => sum + num, 0);

  return {
    total, counts
  };
}

// Return factorial of the number
function factorial(n) {
  let num = n;
  let toFactor = n - 1;
  let numbers = 1;

  while (toFactor != 0) {
    numbers = num = num * toFactor;
    toFactor = toFactor - 1;
  }
  
  return numbers;
}

console.log(factorial(5))

  // Export the functions
  export { capitalize, reverseString, isPalindrome, countVowelsDetailed };