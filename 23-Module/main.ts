import UserInfoType, { greet } from "./module.js";
import { StudentInfoType, StudentInfoType2, name2 } from "./module.js";

console.log(name2);

greet("Mudasir Khan");

const userInfo: UserInfoType = {
  name: "Mudasir",
  age: 30,
  isActive: true,
  password: "123456",
};

console.log(userInfo);

const studentInfo: StudentInfoType = {
  name: "Ali",
  age: 25,
  isActive: false,
};

console.log(studentInfo);

const studentInfo2: StudentInfoType2 = {
  name: "Ali",
  age: 25,
  isActive: false,
};

console.log(studentInfo2);
