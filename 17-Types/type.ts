// What is type in TypeScript?

// A Type Alias (type) is a way to create your own custom type name.
// It allows you to define a type that can represent a variety of different types,
// such as objects, unions, intersections, arrays, tuples, and functions.
// Type aliases are useful for improving code readability and maintainability
// by giving meaningful names to complex types.

// type is more flexible because it can represent:

// Objects
// Unions
// Intersections
// Arrays
// Tuples
// Functions

// while interface is mainly used to describe object shapes.

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Ali",
  age: 25,
};

const user3: User = {
  name: "Ahmed",
  age: 30,
};

type UserId = string | number;

let id: UserId;

id = "EMP001";
id = 1001;

type Names = string[];

const students: Names = ["Mudasir", "Ali", "Ahmed"];

type AddFunction = (a: number, b: number) => number;

const add1: AddFunction = (a, b) => {
  return a + b;
};

type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const worker: Staff = {
  name: "Mudasir",
  salary: 50000,
};

// Type vs Interface
// Type

type User3 = {
  name: string;
  age: number;
};

// Interface

interface User4 {
  name: string;
  age: number;
}
