interface Info {
  name: string;
  age: number;
  isActive: boolean;
}

interface TeacherType extends Info {
  subject: string;
}

var studentObj: Info = {
  name: "John Doe",
  age: 25,
  isActive: true,
};

var teacherObj: TeacherType = {
  name: "Jane Smith",
  age: 40,
  isActive: false,
  subject: "Mathematics",
};

// console.log(studentObj);
// console.log(teacherObj);

console.log(studentObj);
console.log(
  `Teacher Object: ${teacherObj.name}, Age: ${teacherObj.age}, Active: ${teacherObj.isActive}, Subject: ${teacherObj.subject}`,
);
