/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
/// <reference path="Cpp.ts" />
/// <reference path="Java.ts" />
/// <reference path="React.ts" />

namespace Subjects {
  // Create and export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Create and export a teacher object
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
  };

  // Use cpp subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // Use java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // Use react subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
