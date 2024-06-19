// const coding = ["js", "ruby", "python", "java"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   //   return item;
// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

// const newNums = [];
// myNums.forEach((item) => {
//   if (item > 4) {
//     newNums.push(item);
//   }
// });

// console.log(newNums);

// const userBooks = books.filter((bk) => bk.genre === "History");

// const userBooks = books.filter((item) => {
//   return item.PublishDate >= 2000 && bk.genre === "history";
// });

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//add 10 to all

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

// console.log(newNums);

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
