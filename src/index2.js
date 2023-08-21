

result = true;
const str = "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()";

const stack = [];
let lineCounter = 0;
console.log("zadacha "+str);
for (const bracket of str) 
  {
    if (bracket === "(" || bracket === "[" || bracket === "{" || (bracket === "|" && (lineCounter === 0))) {
    if (bracket === "|") {lineCounter++}
    stack.push(bracket);
    // console.log(stack+12);
    }
    else if (bracket === ')') {
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
  if(result != false && stack.length === 0){result = true} else {result = false}; 
  console.log(result);
