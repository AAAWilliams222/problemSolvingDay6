"use strict"

// PROBLEM 1
// Reverse a string
// a.	Write code that takes a string as input and returns the string reversed
// b.	i.e. “Hello” will be returned as “olleH”

let firstWord = prompt("Please type in a word.");

for(let i = firstWord.length - 1; i >= 0; i--){
    console.log(firstWord[i]);
}

// PROBLEM 2
// Capitalize letter
// a.	Write code that takes a string as input and capitalize the first letter of each word. 
// Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

let secondWord = prompt("Please type in another word.");

console.log(secondWord[0].toUpperCase() + secondWord.slice(1));

// PROBLEM 3	
// Compress a string of characters
// a.	For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

    let stringCompression = (s) => {
    // travers string, keep count of repeated chars
    // if current and next char is the same, incr count
    // otherwise, concat current char and count to output string, reset count to 1
    //return compressed string, only if the length is less than the original string, otherwise, return original string 
    let out = "";
    let count = 1;
    for(let i = 0; i < s.length; i++){
        let current = s[i];
        let next = s[i + 1];
        if (current === next) {
            count++;
        } else {
            out += current + String(count);
            count = 1;
        }
    }
    return out.length < s.length ? out : s;
}

console.log(
    stringCompression("aabcccccaaa") === "a2b1c5a3",
    stringCompression("aa") === "aa",
    stringCompression("aaAAaa") === "aaAAaa",
    stringCompression("aaaAAaa") === "a3A2a2",
);


// PROBLEM 4
// BONUS CHALLENGE: Palindrome
// a.	A word, phrase, or sequence that reads the same backward as forward i.e. madam
// b.	Write code that takes a user input and checks to see if it is a Palindrome and reports the result



let str = prompt("Enter Palindrome.");
let isPalindrome = (inStr) => {
    for(let i = 0; i < inStr.length; i++){
        if(inStr[i] !== inStr[inStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(str));


// PROBLEM 1
// Happy Numbers
// a.	https://en.wikipedia.org/wiki/Happy_number
// b.	A happy number is a number defined by the following process: starting with any positive integer, 
//     replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. 
//     An example of a happy number is 19
// c.	Write a method that determines if a number is happy or sad





// PROBLEM 2
// Prime Numbers
// a.	A prime number is a number that is only divisible by one and itself.
// b.	Write a method that prints out all prime numbers between 1 and 100 





// PROBLEM 3
// Fibonacci
// a.	A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. 
//     The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// b.	Write a method that does the Fibonacci sequence starting at 1
// c.	HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs
