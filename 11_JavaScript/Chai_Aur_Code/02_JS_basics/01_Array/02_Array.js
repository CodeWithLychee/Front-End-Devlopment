const marver_Heroes = ["Thor", "Ironman", "Spiderman"];
const dc_Heroes = ["Superman", "Flash", "Batman"];

// marver_Heroes.push(dc_Heroes);
// console.log(marver_Heroes, dc_Heroes);

// const all_heores = marver_Heroes.concat(dc_Heroes);
// console.log(marver_Heroes);

//spread
// const all_new_heroes = [...marver_Heroes, ...dc_Heroes];
// console.log(all_new_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.from("Hitesh"));
// console.log(Array.from({ name: "Hitesh", class: 20 }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3, score1, score2));
