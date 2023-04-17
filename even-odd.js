// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// my solution
function evenOrOdd(number) {
  return (number % 2 === 0) ? 'Even' : "Odd"
}

function evenOrOdd(number) {
  if (number % 2 === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
}

function evenOrOdd(number) {
  if (number % 2 === 0){
    return 'Even';
  } else if (number % 2 === 1 || number % 2 === -1){
    return 'Odd';
  }
}
