// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// my solution
function isPalindrome(x) {
  if(x.toLowerCase() === x.split('').reverse().join('').toLowerCase()){
    return true
  } else return false
}