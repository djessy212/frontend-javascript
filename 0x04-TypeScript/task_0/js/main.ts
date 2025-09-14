// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Create the table
const table: HTMLTableElement = document.createElement("table");

// Optional: Add a header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
const headerFirstName: HTMLTableCellElement = document.createElement("th");
const headerLocation: HTMLTableCellElement = document.createElement("th");
headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Loop through the array and create rows for each student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
