/*
module.exports = function check(str, bracketsConfig) {
  // your solution
}
*/

const bracketsConfig = "[['(', ')']]";
let bracketsConfig2 = [1, 2, 3]
const stack = [];
for (const bracket of bracketsConfig) 
  {
    if (bracket === '(') {
    stack.push(bracket);
    }
    else if (bracket === ')') {
      if (!stack.pop()) {
        return false;
      }
    }
    console.log(stack);
  }