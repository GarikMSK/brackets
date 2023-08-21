
module.exports = function check(str, bracketsConfig) {
  

const stack = [];
stackWasEqualZero = "N";
let lineCounter = 0;
let lineCounter7 = 0;
let lineCounter8 = 0;
console.log("zadacha "+str);
for (const bracket of str) 
  {
    if (bracket === "1" || bracket === "3" || bracket === "5" ||  bracket === "(" || bracket === "[" || bracket === "{" || (bracket === "|" && (lineCounter === 0)) || (bracket === "7" && (lineCounter7 === 0)) || (bracket === "8" && (lineCounter8 === 0))) {
    if (bracket === "|") {lineCounter++}
    if (bracket === "7") {lineCounter7++; place7stack = stack.length+1;console.log("add"+place7stack);}
    if (bracket === "8") {lineCounter8++; place8stack = stack.length+1;console.log("add"+place8stack);}
    stack.push(bracket);

    }

    else if (bracket === '6') {
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();
      if('5' != stackElement) {result = false;} else {result = true;}
    }
    else if (bracket === '4') {
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();
      if('3' != stackElement) {result = false;} else {result = true;}
    }
    else if (bracket === '2') {
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();
      if('1' != stackElement) {result = false;} else {result = true;}
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
      if('|' != stackElement) {result = false;} else {result = true;}
      lineCounter = 0;
     }
     else if (bracket === "7" && (lineCounter7 === 1)) {
      console.log("remove"+stack.length);
      if (stack.length > place7stack) {stackWasEqualZero = "Y";} 
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();
      //console.log(stackElement);
      if('7' != stackElement) {result = false;} else {result = true;}
      lineCounter7 = 0;
     }
     else if (bracket === "8" && (lineCounter8 === 1)) {
      if (stack.length > place8stack) {stackWasEqualZero = "Y";} 
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      let stackElement = stack.pop();
      //console.log(stackElement);
      if('8' != stackElement) {result = false;} else {result = true;}
      lineCounter8 = 0;
     }
     
    
  }

  if(result != false && stack.length === 0 && stackWasEqualZero == "N"){result = true} else {result = false}; 
  console.log(result);
  return result;
}

