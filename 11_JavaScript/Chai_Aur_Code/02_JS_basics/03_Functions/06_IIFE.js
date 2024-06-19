//Immediately invoked function Expressions

// function chai() {
//   console.log("DB connected");
// }

// chai();

(function chai() {
  console.log("DB connected");
})();

// ()()

((name) => {
  console.log("Db connecetd 2", name);
})("hitesh");
