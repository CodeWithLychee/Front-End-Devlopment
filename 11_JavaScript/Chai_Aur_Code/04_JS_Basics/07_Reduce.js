// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curr_val) {
//   console.log(`acc : ${acc} , curr : ${curr_val}`);
//   return acc + curr_val;
// }, 0);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 99,
  },
  {
    itemName: "python",
    price: 999,
  },
  {
    itemName: "mobile dev",
    price: 5999,
  },
  {
    itemName: "DS",
    price: 12999,
  },
];

//add all prices
//reduce
// const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(total);
// let total = 0;
// shoppingCart.forEach((item) => {
//   total += item.price;
// });
// console.log(total);
