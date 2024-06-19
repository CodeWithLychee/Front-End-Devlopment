// let myName = "hitesh     ";
// console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "slig",

  getSpiderPower: function () {
    console.log(`Spidy power is : ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log("Power ");
};

// heroPower.hitesh();
myHeroes.hitesh();
