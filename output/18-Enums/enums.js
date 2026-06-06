"use strict";
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
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Doctor"] = "DOCTOR";
    UserRole["Nurse"] = "NURSE";
    UserRole["Patient"] = "PATIENT";
})(UserRole || (UserRole = {}));
const role = UserRole.Doctor;
console.log(role); // Output: "DOCTOR"
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
})(Days || (Days = {}));
let today = Days.Wednesday;
console.log(today); // Output: 2 (since enums are zero-indexed by default)
let status2 = "APPROVED";
console.log(status2); // Output: "APPROVED"
// type UserRoles = "ADMIN" | "DOCTOR" | "NURSE" | "PATIENT";
// const role1: UserRoles = "DOCTOR";
// console.log(role1); // Output: "DOCTOR"
// type Days11 = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";
// let today2: Days11 = "WEDNESDAY";
// console.log(today2); // Output: "WEDNESDAY"
