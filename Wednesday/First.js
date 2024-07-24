// Write a function solution that, given an integer N, returns a string of length N containing as many different lower-case letters ('a'-'z') as possible, in which each letter occurs an equal number of times.

// Examples:

// 1. Given N = 3, the function may return "fig", "pea", "nut", etc. Each of these strings contains three different letters with the same number of occurrences.

// 2. Given N = 5, the function may return "mango", "grape", "melon", etc.

// 3. Given N = 30, the function may return "aabbcc...oo" (each letter from 'a' to 'o' occurs twice). The string contains 15 different letters.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..200,000].

function solution(N){
    const letters= 'abcdefghijklmnopqrstuvwxyz' // Start by creating a string that contains all lowercase letters from a-z
    let k = 26; // create a constant "k" and we give it a value of 26 which is the total number of letters from a-z
    while (N % k !==0){ // check if N is evenly divisible by k
        k--; // if N isn't evenly divisible by k, then we'll decrease the values of k by one as we continue checking
    }
    const times = N / k; // Then we'll calculate how many times each letter should appear
    let result = ''; // We'll initialize an empty string to store our results
    for (let i = 0 ; i < k; i++) { // Loop through the first k letters (starting from index 0)
        result += letters[i].repeat(times); // add each letter repeated the required number of times to the final result string
    }
    return result; // Finally we'll return the result of our string
}

console.log(solution(3));
console.log(solution(5));
console.log(solution(30));