"use strict";
// What is a Promise in TypeScript / JavaScript?
function test1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Mudasir", age: 30 });
        }, 3000);
    });
}
test1().then((result) => {
    console.log(result);
});
/// TODO: Most Common Pattern in Modern TypeScript
// async function getData(): Promise<string> {
//   return "Hello";
// }
// async function main() {
//   const data = await getData();
//   console.log(data);
// }
// main();
/// TODO: Promise All
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Doctor");
const p3 = Promise.resolve("Patient");
Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
});
