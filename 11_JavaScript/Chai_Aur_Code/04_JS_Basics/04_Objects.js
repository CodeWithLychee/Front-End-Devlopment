const myObject = {
  js: "javscript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

// for (const key in myObject) {
//   console.log(`${key} --> ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];

// for (const i in programming) {
//   //   console.log(i);
//   console.log(programming[i]);
// }

const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("Fr", "France");

for (const key in map) {
  console.log(map[key]);
}
