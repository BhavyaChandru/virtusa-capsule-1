interface Employee {
    name: string;
    salary: number;
    displayDetails(): void;
}

class Developer implements Employee {

    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayDetails(): void {
        console.log("Employee Name: " + this.name);
        console.log("Salary: ₹" + this.salary);
    }
}

class Designer implements Employee {

    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayDetails(): void {
        console.log("Employee Name: " + this.name);
        console.log("Salary: ₹" + this.salary);
    }
}

const developer = new Developer("Bhavya", 50000);
const designer = new Designer("sara", 45000);

console.log("Developer Details:");
developer.displayDetails();

console.log("\nDesigner Details:");
designer.displayDetails();
