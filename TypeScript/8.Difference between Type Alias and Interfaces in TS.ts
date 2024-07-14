//Interface:
//Interfaces are declared using the interface keyword.
//Interfaces can be extended using the extends keyword.
//This allows you to create complex types by combining simpler interfaces.
interface Person {
    name: string;
    age: number;
    gender?: string; // Optional property
}

interface Employee extends Person {
    employeeId: number;
}

const employee: Employee = {
    name: "Alice",
    age: 30,
    employeeId: 123
};
console.log(employee.employeeId,employee.age);

//Type Aliases:
//A type alias can define the shape of an object,
// but it can also represent other types such as primitives, unions, tuples, and intersections.
//Type aliases cannot be extended in the same way as interfaces.
//However, you can use intersections to achieve similar functionality.
//Type aliases do not support declaration merging
type Person1 = {
    name: string;
    age: number;
    gender?: string; // Optional property
};

type Employee1 = Person1 & {
    employeeId: number;
};

const employee1: Employee1 = {
    name: "Alice",
    age: 30,
    employeeId: 123
};
console.log(employee1.employeeId);