/* Filename: SophisticatedProgram.js */

// This program calculates the n-th Fibonacci number using dynamic programming
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

// This function checks if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// This function sorts an array using bubble sort algorithm
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// This function calculates the factorial of a number using recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

// This function finds the nth prime number
function nthPrime(n) {
    let count = 0;
    let num = 2;

    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }

    return num - 1;
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(fibonacci(10)); // Output: 55

const str = "madam";
console.log(isPalindrome(str)); // Output: true

const arr = [5, 2, 8, 1, 9];
bubbleSort(arr);
console.log(arr); // Output: [1, 2, 5, 8, 9]

console.log(factorial(5)); // Output: 120

console.log(nthPrime(10)); // Output: 29