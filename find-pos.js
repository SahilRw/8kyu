// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// my solution
function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = alphabet.indexOf(letter)
  return `Position of alphabet: ${index + 1}`
}