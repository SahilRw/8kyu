// #Task
// Assuming there are no other types of animals, work out how many of each animal are there.
// Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages
// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.
// In the form:
// [Heads, Legs] = [72, 200]
// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]
// INVALID - [72, 201] => "No solutions"
// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.
// There are many different ways to solve this, but they all give the same answer.
// You will only be given integers types - however negative values (edge cases) will be given.
// Happy coding!

// my solution
function animals(heads, legs){
    let cows     = legs / 2 - heads
  let chickens = heads - cows
  return chickens < 0 || cows < 0 || legs % 2 == 1
    ? 'No solutions'
    : [chickens, cows]
}
