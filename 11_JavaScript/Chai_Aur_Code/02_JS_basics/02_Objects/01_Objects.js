//singleton

//objects litrals

const JsUser = {
  name: "Abhinav",
  "full name ": "Abhinav Sharma",
  Age: 20,
  location: "Jaipur",
  email: "Abhi@google.com",
  isloggedIN: false,
  lastLoginDats: ["Monday", "Saturday"],
};

// console.log(JsUser["name"]);
// console.log(JsUser["full name "]);

// JsUser.email = "Abhi@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "Abhi@.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user how are u ?");
  return 10;
};

JsUser.greeting2 = function () {
  console.log(`Hello js user how are u ${this.name}`);
  return 10;
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
