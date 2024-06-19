function calaculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calaculateCartPrice(200, 400, 500));

const user = {
  username: "ABhinav",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and Price is ${anyObject["price"]}`
  );
}

// handleObject(user);
// handleObject({
//   username: "sam",
//   price: 399,
// });

let myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[2];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([1, 2, 3, 4, 5]));
