
function bracketclose(brackets) {
  const bracketArray = brackets.split("");
  let testArray = [];
  
  for (let i = 0; i < brackets.length; i++) {
    if (bracketArray[i] === "{" || bracketArray[i] === "(" || bracketArray[i] === "[") {
      testArray.push(bracketArray[i]);
    } else {
      if (
        (bracketArray[i] === "}" && testArray[testArray.length - 1] === "{") ||
        (bracketArray[i] === ")" && testArray[testArray.length - 1] === "(") ||
        (bracketArray[i] === "]" && testArray[testArray.length - 1] === "[")
      ) {
        testArray.pop();
      } else {
        return false; 
      }
    }
  }
  
  return testArray.length === 0; }

console.log(bracketclose("{}()[]")); 
console.log(bracketclose("{[()]}")); 
console.log(bracketclose("([)]")); 
