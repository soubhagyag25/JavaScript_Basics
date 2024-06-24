//JavaScript is an Asynchronous language
//But it does not mean that it does not support synchronous logic
//1. Synchronous Logic:To demonstrate synchronous logic in JavaScript,
//we can use a simple example where operations are executed one after another without any asynchronous behavior.
console.log("Start")

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

const sum = add(5, 3)
console.log("Sum:", sum)

const product = multiply(sum, 2)
console.log("Product:", product)

console.log("End")

//2.Asynchronous Logic: 

console.log("Start");

setTimeout(() => {
    console.log("This is an asynchronous message");
}, 2000);

console.log("End");

