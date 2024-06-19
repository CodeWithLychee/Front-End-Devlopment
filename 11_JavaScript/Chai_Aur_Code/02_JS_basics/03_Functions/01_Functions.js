function sayMyName(name) {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const result = addTwoNumbers(2, 3);

// console.log(result);

function loginUserMessage(username = "Sam") {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just LoggedIN`;
}

console.log(loginUserMessage("Ekta"));
