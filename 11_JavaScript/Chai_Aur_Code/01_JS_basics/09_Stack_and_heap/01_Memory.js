//stack(premitivie)

//heap(non -premitive)

let myYtName = "Hiteshchoudry";

let anotherName = myYtName;
anotherName = "chaiaurcode";
console.table([anotherName, myYtName]);

let userone = {
  email: "User@gmail.com",
  upi: "user@ybl",
};
let usertwo = userone;

usertwo.email = "abc@gmail.com";

console.log(userone.email);
console.log(usertwo.email);
