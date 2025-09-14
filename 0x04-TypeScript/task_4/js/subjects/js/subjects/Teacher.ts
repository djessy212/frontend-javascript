namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Declaration merging - add optional property
  export interface Teacher {
    experienceTeachingC?: number;
  }
}
