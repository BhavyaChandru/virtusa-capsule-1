"use strict";
class EmployeeDetails {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Employee Name: " + this.name);
        console.log("Salary: ₹" + this.salary);
    }
}
const employee = new EmployeeDetails("Bhavya", 50000);
const employee = new EmployeeDetails("Bhavya", 50000);
employee.displayDetails();
