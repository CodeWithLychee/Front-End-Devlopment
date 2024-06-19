//1) if
// -> Conditions:

// const isUserLoggedIn = true;

// const temp = 41;
// if (temp < 50) {
//   console.log("Temp Less than 50");
// } else {
//   console.log("Temp is greater than 50");
// }
// if (false) {
//   //will never run
// }

// const score = 200;
// if (score > 100) {
//   var power = "fly";
//   console.log(`User power is ${power}`);
// }

// const balance = 1000;

// if (balance > 500) console.log("Test");

// if (balance < 500) {
//   console.log("Less Than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// } else {
//   console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;
// if (userLoggedIn && debitCard) {
//   console.log("Allowed to buy");
// }

// if (LoggedInFromEmail || LoggedInFromGoogle) {
//   console.log("Allowed to enter");
// }

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;

// val1 = undefined ?? 15;
// val1 = null ?? undefined ?? 20;
// console.log(val1);

//Ternary Operator

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("Yes you can buy it ")
  : console.log("Leave it");
