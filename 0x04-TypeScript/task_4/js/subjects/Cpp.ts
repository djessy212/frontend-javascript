/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
