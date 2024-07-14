//Type Inference
let myName="Soubhagya";
//myName=123;//example of type inference
//infer=assume
console.log(myName);
//Here I initialized a variable with string type
//In the next line, I am assigning the number to the same variable but it is showing error because the NodeJS
//already knows that the type of variable is String. This is called Type Inference

//When we explicitly declare the variable with its type,it is called type annotation.
//eg:
let MyName:string="Soubhagya";
//MyName=123;
console.log(MyName);
