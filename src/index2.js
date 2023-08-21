

result = true;
const str = "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()";

const stack = [];
let lineCounter = 0;
stackWasEqualZero = "N";
console.log("zadacha "+str);
for (const bracket of str) 
  {
    if (bracket === "(" || bracket === "[" || bracket === "{" || (bracket === "|" && (lineCounter === 0))) {
    if (bracket === "|") {lineCounter++}
    stack.push(bracket);
    // console.log(stack+12);
    }
    else if (bracket === ')') {
      console.log(stack.length);
      if (stack.length === 0) {stackWasEqualZero = "Y";}
      // if (!stack.pop()) {
      //  return false;
      // }
      let stackElement = stack.pop();
        //console.log(stackElement);
        if('(' != stackElement) {result = false;} else {result = true;}
          /*
      let stackElement = stack.pop();
      console.log(stackElement);
      if('(' != stackElement) 
        {console.log("false4");result = false;} */
    }
    else if (bracket === ']') {
      let stackElement = stack.pop();
      //console.log(stackElement);
      if('(' != stackElement) {result = false;} else {result = true;}
     }
     else if (bracket === '}') {
      let stackElement = stack.pop();
      //console.log(stackElement);
      if('}' != stackElement) {result = false;} else {result = true;}
     }
     else if (bracket === "|" && (lineCounter === 1)) {
      let stackElement = stack.pop();
      //console.log(stackElement);
      if('|' != stackElement) {result = false;} else {result = true;}
      lineCounter = 0;
     }
     
    
  }
 /* console.log(stack.length === 0); */
  if(result != false && stack.length === 0 && stackWasEqualZero == "N"){result = true} else {result = false}; 
  console.log(result);
