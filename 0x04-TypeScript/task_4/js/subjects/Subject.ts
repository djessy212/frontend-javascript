/// <reference path="Teacher.ts" />
["setTeacher(teacher:Teacher)"]
namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
