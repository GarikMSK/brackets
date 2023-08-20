
module.exports = function check(str, bracketsConfig) {
  
result = true;
const stack = [];
let lineCounter = 0;
for (const bracket of bracketsConfig) 
  {
    if (bracket === "(" || bracket === "[" || bracket === "{" || (bracket === "|" && (lineCounter == 0))) {
    if (bracket === "|") {lineCounter++}
    stack.push(bracket);
    }
    else if (bracket === ')') {
      
      let stackElement = stack.pop();
      console.log(stackElement);
      if('(' != stackElement) 
        {console.log("false4");result = false;}
    }
    else if (bracket === ']') {
      let stackElement = stack.pop();
      console.log(stackElement);
      if('[' != stackElement) 
        {console.log("false3");result = false;}
     }
     else if (bracket === '}') {
      let stackElement = stack.pop();
      console.log(stackElement);
      if('{' != stackElement) 
        {console.log("false2");result = false;}
     }
     else if (bracket === "|" && (lineCounter == 1)) {
      let stackElement = stack.pop();
      console.log(stackElement);
      if('|' != stackElement) 
        {console.log("false1");result = false;};
        lineCounter = 0;
     }
     
    console.log(stack);
  }
  console.log(stack.length === 0);
  if(result != false && stack.length === 0){result = true} else {result = false}; console.log("and total ",result);
return result;
}

/*
result = true;
const bracketsConfig = "([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))";
const stack = [];
let lineCounter = 0;
for (const bracket of bracketsConfig) 
  {
    if (bracket === "(" || bracket === "[" || bracket === "{" || (bracket === "|" && (lineCounter == 0))) {
    if (bracket === "|") {lineCounter++}
    stack.push(bracket);
    }
    else if (bracket === ')') {
      
      let stackElement = stack.pop();
      console.log(stackElement);
      if('(' != stackElement) 
        {console.log("false4");result = false;}
    }
    else if (bracket === ']') {
      let stackElement = stack.pop();
      console.log(stackElement);
      if('[' != stackElement) 
        {console.log("false3");result = false;}
     }
     else if (bracket === '}') {
      let stackElement = stack.pop();
      console.log(stackElement);
      if('{' != stackElement) 
        {console.log("false2");result = false;}
     }
     else if (bracket === "|" && (lineCounter == 1)) {
      let stackElement = stack.pop();
      console.log(stackElement);
      if('|' != stackElement) 
        {console.log("false1");result = false;};
        lineCounter = 0;
     }
     
    console.log(stack);
  }
  console.log(stack.length === 0);
  if(result != false && stack.length === 0){result = true} else {result = false}; console.log("and total ",result);
  */