// What is keyof in TypeScript?

// keyof is an operator that extracts the property names (keys)
// from an object type and creates a union of those keys.

// Example:
type Patient22 = {
  patientId: number;
  name: string;
  disease: string;
};

type PatientKeys = keyof Patient22; // "patientId" | "name" | "disease"

let field: PatientKeys;

field = "name"; // ✅
field = "disease"; // ✅
field = "patientId"; // ✅

// field = "doctor"; // ❌ Error

// keyof with Generics (Very Important)

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Usage:

const user32 = {
  name: "Mudasir",
  age: 30,
};

console.log(getValue(user32, "name"));
console.log(getValue(user32, "age"));

// Error cases:
// getValue(user, "email"); // ❌ Error  // Because "email" is not a key of user.

// Interview Definition

// keyof is a TypeScript operator that creates
// a union type from the property names of an object type.

// Difference Between typeof and keyof

// | Operator | Purpose
// | -------- | -------------------------------
// | `typeof` | Gets the type of a variable
// | `keyof`  | Gets the keys of an object type

const user30 = {
  name: "Mudasir",
  age: 30,
};

type UserType = typeof user30; // { name: string; age: number }

// Result:
// {
//   name: string;
//   age: number;
// }

// Now:
type UserKeys = keyof UserType; // "name" | "age"

// Result:
// "name" | "age"

// One-Line Summary

// keyof extracts all property names from an object type
// and turns them into a union type. 🚀

type PersonT = {
  name: string;
  age: number;
  isEmp: boolean;
};

type PersonKeys = keyof PersonT; // "name" | "age" | "isEmp"
let keyData: PersonKeys;

keyData = "name";
keyData = "age";
keyData = "isEmp";
// keyData = "city"; // ❌ Error
