var user: string[] = ["Mudasir", "Ali", "Ahmed"];
// var user2 : Array<string> = ["Mudasir", "Ali", "Ahmed"];
user.push("Khan");
// user.pop();
console.log(user);

var user2: (string | number)[] = ["Mudasir", "Ali", "Ahmed", 1, 2, 3];
user2.push("Khan", 4);
// user2.pop();
console.log(user2);

var num: number[] = [1, 2, 3];
// var num2 : Array<number> = [1,2,3];
num.push(4);
// num.pop();
console.log(num);

var dataArray = [1, "Mudasir", true];
console.log(dataArray);

var collageName: ReadonlyArray<string> = ["Mudasir", "Ali", "Ahmed"]; // can't add or remove
// collageName.push("Khan");
// collageName.pop();
console.log(collageName);

// Loop
user.forEach((user) => {
  console.log(user);
});
