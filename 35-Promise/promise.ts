// What is a Promise in TypeScript / JavaScript?

// A Promise is an object that represents the
// future result of an asynchronous operation.

// Examples:

// API calls
// Database queries
// File reading
// Payment processing
// User authentication

// These operations take time, so JavaScript doesn't wait and block the application.

// Simple Definition

// A Promise is an object that represents a value
// that may be available now, later, or never if an error occurs.

// function test1() {
//   setTimeout(() => {
//     console.log("Hello Mudasir Test 1");
//   }, 3000);
// }

// function test2() {
//   console.log("Hello Mudasir Test 2");
// }

// test1();
// test2();

// function ComplexLogic(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello Mudasir");
//     }, 3000);
//   });
// }

// ComplexLogic().then((result: string) => {
//   console.log(result);
// });

// interface User34 {
//   name: string;
//   age: number;
// }

// function test1(): Promise<User34> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "Mudasir", age: 30 });
//     }, 3000);
//   });
// }

// test1().then((result: User34) => {
//   console.log(result);
// });

type User35 = {
  name: string;
  age: number;
};

function test1(): Promise<User35> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Mudasir", age: 30 });
    }, 3000);
  });
}

test1().then((result: User35) => {
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
