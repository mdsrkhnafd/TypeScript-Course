// Intersection Types in TypeScript using type aliases
type PersonTA = {
  name: string;
  age: number;
};

type PersonTB = {
  city: string;
};

type PersonTC = PersonTA & PersonTB;

const person: PersonTC = {
  name: "Mudasir",
  age: 30,
  city: "Lahore",
};

// console.log(person);

// Intersection Types in TypeScript using interfaces

interface PersonIA {
  name: string;
  age: number;
}

interface PersonIB {
  city: string;
}
// We can create an intersection type using interfaces as well, but we cannot use the extends keyword to create an intersection type. Instead, we can use the & operator to create an intersection type.

// interface PersonIC extends PersonIA, PersonIB {
//   name: string;
//   age: number;
//   city: string;
// }

// The above code will give an error because we cannot use the extends keyword to create an intersection type. Instead, we can use the & operator to create an intersection type.
type PersonIC = PersonIA & PersonIB;

const person2: PersonIC = {
  name: "Mudasir",
  age: 30,
  city: "Lahore",
};

console.log(person2);
