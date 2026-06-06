// var userData: {
//   name: string;
//   age: number;
//   company: string;
// } = {
//   name: "Mudasir",
//   age: 30,
//   company: "Google",
// };

// userData.name = "Ali";
// console.log(userData);

// var userData: {
//   [key: string]: string | number | boolean | undefined;
// } = {
//   name: "Mudasir",
//   age: 30,
//   company: "Google",
// };

// userData.city = "Lahore";
// console.log(userData);

// object inside nested object
// var userData: {
//   name: string;
//   age: number;
//   company: string;
//   address: {
//     city: string;
//     country: string;
//   };
// } = {
//   name: "Mudasir",
//   age: 30,
//   company: "Google",
//   address: {
//     city: "Lahore",
//     country: "Pakistan",
//   },
// };
// console.log(userData);

var userData: {
  name: string;
  age: number;
  company: string;
  address: {
    city: string;
    country: string;
    sector?: string;
  };
} = {
  name: "Mudasir",
  age: 30,
  company: "Google",
  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};
userData.address.sector = "A";
userData.address.city = "Karachi";
console.log(userData);
