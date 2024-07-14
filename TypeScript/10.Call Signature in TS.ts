//In TypeScript, a call signature is a way to define the type of a function, including its parameters and return type.
//It's a way to describe what arguments a function takes and what it returns, without providing the actual implementation
//of the function.
//Syntax:A call signature is usually defined within an interface or a type alias.
//type MyFunction = (param1: type1, param2: type2) => returnType;
//or
// interface MyFunction {
//     (param1: type1, param2: type2): returnType;
// }
//eg:
type Add = (x: number, y: number) => number;

const add: Add = (x, y) => {
    return x + y;
};

console.log(add(2, 3)); // Output: 5


//eg2:
interface Calculator {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
}

const calculator: Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2





type Student=()=>
{
    readonly name:string;// We use readonly to make the variable immutable.
    age:number;
    gender:string;
    id?:number//optional
}
let student1:Student=()=>
    {
        return{
    name:"Soubhagya",
    age:24,
    gender:"Male"
        }
}
console.log(student1().age);

//or

type Student1 = {
    name: string;
    age: number;
    gender:"Male" | "Female";
    id?: number; // optional
};

let student: Student1 = {
    name: "Soubhagya",
    age: 24,
    gender:"Male"     
};

console.log(student.age); // Output: 24
