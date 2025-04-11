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
  if (n <= 1) return 1;
  return n* factorial(n - 1);
}

// Sum of numbers
function sumTo(n) {
  if (n <= 0) return 0;
  return n + sumTo( n - 1);
}

// FizzBuzz
function fizzBuzzToArray(start, end) {
  const result = [];
  
  for (let num = start; num <= end; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push('FizzBuzz')
    } else if (num % 3 === 0) {
      result.push('Fizz')
    } else if (num % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(num)
    } 
  }
  result.push(num);
}

// Character frequency counter
function characterFrequencyCounter(str) {
  let object = {};
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
  for (let char of cleanedStr) {
    if (char in object) {
      object[char] += 1;
    } else {
      object[char] = 1;
    }
  }
  return object;
}

  // Export the functions
  export { capitalize, reverseString, isPalindrome, countVowelsDetailed, factorial, sumTo, fizzBuzzToArray, characterFrequencyCounter };