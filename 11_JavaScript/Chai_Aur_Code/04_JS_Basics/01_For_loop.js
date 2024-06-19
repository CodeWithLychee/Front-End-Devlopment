//for

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log("5 is best number");
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   //   console.log(`++->Outer Loop : ${i}`);
//   for (let j = 0; j < 5; j++) {
//     // console.log(`Inner Loop : ${j}`);
//     // console.log(i + " * " + j + " = " + i * j);
//   }
// }

// const myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

//break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is dectected");
    // return;
    // break;
    continue;
  }
  console.log(i);
}
