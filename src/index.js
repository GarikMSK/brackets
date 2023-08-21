
module.exports = function check(str, bracketsConfig) {
  

const stack = [];
stackWasEqualZero = "N";
let lineCounter = 0;
console.log("zadacha "+str);
for (const bracket of str) 
  {
    if (bracket === "(" || bracket === "[" || bracket === "{" || (bracket === "|" && (lineCounter === 0))) {
    if (bracket === "|") {lineCounter++}
    stack.push(bracket);

    }
    else if (bracket === ')') {
      if (stack.length === 0) {stackWasEqualZero = "Y";}

      let stackElement = stack.pop();

        if('(' != stackElement) {result = false;} else {result = true;}
    }
    else if (bracket === ']') {
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();

      if('(' != stackElement) {result = false;} else {result = true;}
     }
     else if (bracket === '}') {
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();

      if('}' != stackElement) {result = false;} else {result = true;}
     }
     else if (bracket === "|" && (lineCounter === 1)) {
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();
      //console.log(stackElement);
      if('|' != stackElement) {result = false;} else {result = true;}
      lineCounter = 0;
     }
     
    
  }
 /* console.log(stack.length === 0); */
  if(result != false && stack.length === 0 && stackWasEqualZero == "N"){result = true} else {result = false}; 
  console.log(result);
  return result;
}


