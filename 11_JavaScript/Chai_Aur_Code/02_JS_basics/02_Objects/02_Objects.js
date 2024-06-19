const tinderUser = new Object();
//const tinderUser={}

tinderUser.id = "123abc";
tinderUser.name = "Sami";
tinderUser.isLoggedIN = false;
// console.log(tinderUser);

// const regularUser = {
//   email: "Some@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "Abhinav",
//       lastname: "Sharma",
//     },
//   },
// };

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "A",
  2: "B",
  3: "c",
};

const obj2 = {
  4: "D",
  5: "E",
  6: "F",
};
const obj4 = {
  7: "D",
  8: "E",
  9: "F",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "2@gmail.com",
  },
  {
    id: 3,
    email: "3@gmail.com",
  },
];

// console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("islogged"));
