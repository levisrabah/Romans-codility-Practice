// You are given an implementation of a function:

// int solution(int A[], int N, int B[], int M);

// that, given a non-empty array A of N non-negative integers and a non-empty array B of M non-negative integers, returns the minimal value that occurs in both arrays. If there is no such value, the function should return −1.

// For example, given arrays A and B such that:

//     A[0] = 1    B[0] = 4
//     A[1] = 3    B[1] = 2
//     A[2] = 2    B[2] = 5
//     A[3] = 1    B[3] = 3
//                 B[4] = 2
// your function should return 2, since 2 is the minimal value which occurs in both arrays A and B (another value which occurs in both arrays is 3).

// Given arrays A and B such that:

//     A[0] = 2    B[0] = 3
//     A[1] = 1    B[1] = 3
// your function should return −1, since there is no value that occurs in both arrays.

// The attached code is still incorrect for some inputs. Despite the error(s), the code may produce a correct answer for the example test cases. The goal of the exercise is to find and fix the bug(s) in the implementation. You can modify at most two lines.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of arrays A and B is an integer within the range [0..1,000,000,000].

function solution(A, B) {
   const setA = new Set(A); // Start by creating a set to store elements of A
   let minCommon = Infinity; // Then we initialize a minimum value as the maximum possible integer
   
   for (const value of B) { // Check if elements of B exist in A
    if (setA.has(value) && value < minCommon) {
        minCommon = value
    }
   }
   return minCommon === Infinity ? -1 : minCommon; // If a common element is found, we'll return it otherwise return -1
}

const A1 = [1,3,2,1];
const B1 = [4,2,5,3,2];
console.log(solution(A1, B1)) // the output should be 2

const A2 = [2,1];
const B2 = [3,3];
console.log(solution(A2, B2)) // the output should be -1