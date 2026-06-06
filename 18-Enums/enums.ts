// What is an Enum in TypeScript?

// Enum stands for Enumeration.

// An Enum is used when you have a fixed set of values and want to give them meaningful names.

// Quick Definition

// An Enum is a TypeScript feature used to define a fixed set of named constants.

// enum Status {
//   Pending,
//   Approved,
//   Rejected,
// }

// let status1: Status = Status.Approved;

// console.log(status1); // Output: 1

// By default, enums are assigned numeric values starting from 0. You can also assign custom values to the enum members.

// enum Status {
//   Pending = "PENDING",
//   Approved = "APPROVED",
//   Rejected = "REJECTED",
// }

// let status1 = Status.Approved;

// console.log(status1); // Output: "APPROVED"

enum UserRole {
  Admin = "ADMIN",
  Doctor = "DOCTOR",
  Nurse = "NURSE",
  Patient = "PATIENT",
}

const role: UserRole = UserRole.Doctor;

console.log(role); // Output: "DOCTOR"

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

let today: Days = Days.Wednesday;

console.log(today); // Output: 2 (since enums are zero-indexed by default)

// Enums can also be used with string values, as shown in the Status and UserRole examples above. This can make the code more readable and easier to maintain.

type Statuss = "PENDING" | "APPROVED" | "REJECTED";

let status2: Statuss = "APPROVED";

console.log(status2); // Output: "APPROVED"

// type UserRoles = "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT";

// const role1: UserRoles = "DOCTOR";

// console.log(role1); // Output: "DOCTOR"

// type Days11 = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";

// let today2: Days11 = "WEDNESDAY";

// console.log(today2); // Output: "WEDNESDAY"
