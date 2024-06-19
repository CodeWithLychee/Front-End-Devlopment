// OOP

//Object
//-Collection of properties and methods
//-toLowerCase

// Why use OOP
//-Constructor function
// -Prototype
// -Classes
// -Instances(new,this)

//4 pillars
//1)Abstraction
//2)Encapusation
//3) INheritance
//4)Polymorphism

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username : ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// user.getUserDetails();

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIN) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIN = isLoggedIN;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const user1 = new User("hitesh", 12, true);
console.log(user1.greeting());

const user2 = new User("chai aur code", 11, false);
console.log(user2);
