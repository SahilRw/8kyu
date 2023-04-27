// Description:
// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

// my solution
String.prototype.digit = function() {
  return /^\d$/.test(this)
};