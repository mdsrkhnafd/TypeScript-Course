// What is an Index Signature?

// An Index Signature allows an object to have dynamic keys
// when you don't know the property names beforehand.

// Without Index Signature

type UserData1 = {
  name: string;
  age: number;
  city: string;
};

var userData1: UserData1 = {
  name: "Mudasir",
  age: 30,
  city: "Rawalpindi",
};

interface User21 {
  name: string;
  age: number;
}

const user21: User21 = {
  name: "Mudasir",
  age: 30,
  //   city: "Rawalpindi", // ❌ Error // TypeScript complains because city is not defined in the interface.
};

// With Index Signature

interface User33 {
  [key: string]: any;
}

const user33: User33 = {
  name: "Mudasir",
  age: 30,
  city: "Rawalpindi",
  country: "Pakistan",
  isEmp: true,
};

// ✅ Now any property name is allowed.

// Mixed Properties + Index Signature

interface User34 {
  name: string;
  age: number;

  [key: string]: string | number;
}

const user34: User34 = {
  name: "Mudasir",
  age: 30,
  city: "Rawalpindi",
  experience: 5,
};

// One-Line Summary

// Index Signature is used when you don't know the property names
// in advance but want TypeScript to enforce the type of their values. 🚀
