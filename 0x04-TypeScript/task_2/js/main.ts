// Type predicate to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on role
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks
