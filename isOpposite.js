// DESCRIPTION:
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.
// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// my solution

7 kyu
The Baum-Sweet sequence
JavaScript:
function* baumSweet() {
  for(let i = 0; i < 1000000; i++){
    yield  i.toString(2).split(/1+/).every(e => e.length % 2 === 0 || i == 0) ? 1 : 0
  }
}
8 days agoRefactorDiscuss
7 kyu
Love vs friendship
JavaScript:
const wordsToMarks = str => [...str].reduce((acc, curr) => acc += curr.charCodeAt() - 96, 0)
8 days agoRefactorDiscuss
function wordsToMarks(string){
  let result = 0,
      char = {a:1, b:2, c:3, d:4, e:5, f:6, g:7,h:8, i:9, j:10, k:11, l:12, m:13,
              n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}
  for(let i = 0; i < string.length; i++){
    result += char[string[i]]
  }
  return result;
} 
8 days agoRefactorDiscuss
7 kyu
Upper <body> Strength
JavaScript:
const alexMistakes = (numberOfKata, timeLimit) => 
  Math.log2((timeLimit - numberOfKata * 6)/5 + 1) | 0
8 days agoRefactorDiscuss
7 kyu
Number of Decimal Digits
JavaScript:
function digits(n) {
  return `${n}`.length
}
8 days agoRefactorDiscuss
7 kyu
Help the Fruit Guy
JavaScript:
function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(e => e.includes('rotten') ? e.slice(6).toLowerCase() : e) : []
}
8 days agoRefactorDiscuss
function removeRotten(bagOfFruits){
  let result = []
  if(bagOfFruits){
    for(let i = 0; i < bagOfFruits.length; i++){
      let fruit = bagOfFruits[i];
      if(fruit.includes('rotten')) {
        result.push(fruit.slice(6).toLowerCase())
         } else {
            result.push(fruit)
          }
        }
      } 
  return result
}
8 days agoRefactorDiscuss
7 kyu
Colour Association
JavaScript:
function colourAssociation(array){
  let result = []
  for(let i = 0; i < array.length; i++){
    result[i] = {[array[i][0]]: array[i][1]}
  } return result
}
8 days agoRefactor
function colourAssociation(array){
  return array.map(([e, i]) => ({[e]: i}))
}
8 days agoRefactorDiscuss
7 kyu
Coprime Validator
JavaScript:
function isCoprime(x, y) {
  function min(x, y){
    if(x < y){
      return x
    } return y
  }
  for(let i = 2; i <= min(x, y); i++){
    if(x % i == 0 && y % i == 0){
      return false
    } 
  } return true
}
8 days agoRefactorDiscuss
7 kyu
Testing 1-2-3
JavaScript:
const number = array => array.map((e, i) => `${i + 1}: ${e}`)
8 days agoRefactor
var number=function(array){
  let result = []
  if(array.length === 0){
    return result
  } else {
    for(let i = 0; i < array.length; i++){
      result.push(`${i + 1}: ${array[i]}`)
    }
  }
  return result;
}
8 days agoRefactorDiscuss
8 kyu
Grasshopper - Debug sayHello
JavaScript:
function sayHello(name) {
  return `Hello, ${name}`
}
10 days agoRefactorDiscuss
8 kyu
Welcome to the City
JavaScript:
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
10 days agoRefactorDiscuss
8 kyu
Bin to Decimal
JavaScript:
function binToDec(bin){
  return parseInt(bin, 2)
}
10 days agoRefactorDiscuss
8 kyu
Will you make it?
JavaScript:
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
};
10 days agoRefactorDiscuss
8 kyu
Find Maximum and Minimum Values of a List
JavaScript:
var min = function(list){
    list.sort((a, b) => a - b)
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b - a)
    return list[0];
}
10 days agoRefactorDiscuss
8 kyu
String Templates - Bug Fixing #5
JavaScript:
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
10 days agoRefactorDiscuss
8 kyu
Pillars
JavaScript:
function pillars(numPill, dist, width) {
  if(numPill === 1) return 0;
  return (dist * (numPill - 1) * 100) + (width * (numPill - 2))
}
10 days agoRefactorDiscuss
8 kyu
A wolf in sheep's clothing
JavaScript:
function warnTheSheep(queue) {
  const reversed = queue.reverse()
  const index = reversed.indexOf('wolf')
  if(index === 0) return "Pls go away and stop eating my sheep"
  return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
}
10 days agoRefactorDiscuss
8 kyu
Return to Sanity
JavaScript:
function mystery() {
  var results ={
    sanity: 'Hello'
  };
  return results
}
10 days agoRefactorDiscuss
8 kyu
Determine offspring sex based on genes XX and XY chromosomes
JavaScript:
function chromosomeCheck(sperm) {
  return (sperm === 'XX') ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
  
}
10 days agoRefactorDiscuss
8 kyu
ES6 string addition
JavaScript:
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}
10 days agoRefactorDiscuss
8 kyu
Chuck Norris VII - True or False? (Beginner)
JavaScript:
function ifChuckSaysSo(){
  return !true
}
10 days agoRefactorDiscuss
8 kyu
Kata Example Twist
JavaScript:
// add the value "codewars" to the websites array 1,000 times
var websites = []
while(websites.length < 1000) websites.push('codewars')
11 days agoRefactor
// add the value "codewars" to the websites array 1,000 times
var websites = []
websites.push('codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars'
             ,'codewars', 'codewars', 'codewars', 'codewars','codewars', 'codewars', 'codewars', 'codewars', 'codewars', 'codewars')
11 days agoRefactorDiscuss
8 kyu
Compare within margin
JavaScript:
function closeCompare(a, b, margin){
  if(margin === undefined) margin = 0
  const diff = Math.abs(a - b)
  if(diff <= margin) return 0
//   if(a > b) return 1
  if(a < b) return -1
  return 1
}
11 days agoRefactorDiscuss
8 kyu
Regexp Basics - is it a digit?
JavaScript:
String.prototype.digit = function() {
  return /^\d$/.test(this)
};
11 days agoRefactorDiscuss
8 kyu
L1: Set Alarm
JavaScript:
function setAlarm(employed, vacation){
  if(employed && !vacation) return true
  return false
}
11 days agoRefactorDiscuss
8 kyu
CSV representation of array
JavaScript:
function toCsvText(array) {
   return array.map(rowArr => rowArr.join(',')).join('\n')
}
11 days agoRefactorDiscuss
8 kyu
Playing with cubes II
JavaScript:
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  constructor (side = 0){
    this.side = Math.abs(side)
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}
11 days agoRefactorDiscuss
8 kyu
Will there be enough space?
JavaScript:
function enough(cap, on, wait) {
  if(cap - (on + wait) >= 0) return 0;
  return on + wait - cap
}
11 days agoRefactorDiscuss
8 kyu
Is he gonna survive?
JavaScript:
function hero(bullets, dragons){
  if (bullets / 2 >= dragons){
    return true
  } return false
}
11 days agoRefactorDiscuss
8 kyu
Find the position!
JavaScript:
function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = alphabet.indexOf(letter)
  return `Position of alphabet: ${index + 1}`
}
11 days agoRefactorDiscuss
8 kyu
N-th Power
JavaScript:
function index(array, n){
  if(n >= array.length) return -1;
  return Math.pow(array[n], n)
}
11 days agoRefactor
8 kyu
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
JavaScript:
function isOpposite(s1,s2){
  if(s1.length !== s2.length) return false
  if(s1.length === 0) return false
  for (let i = 0; i < s1.length; i++){
    const s1Char = s1[i]
    const s2Char = s2[i]
    if(s1Char === s1Char.toLowerCase()){
      if(s1Char.toUpperCase() !== s2Char) return false
    } else {
      if (s1Char.toLowerCase() !== s2Char) return false
    }
  }
  return true
}