// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

// my solution
function otherAngle(a, b) {
  let result = a + b - 180
  if(result < 0) {
    return -result
  }
  return result
}