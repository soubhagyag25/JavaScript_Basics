/*syntax: let promise(any user defined name)= new Promise(here we will pass an arrow function with two arguments or handlers)
let promise=new Promise((resolve,reject)=>{
    }) 
let promise1=new Promise((resolve,reject)=>
{
    console.log("I am a Promise")
    resolve("Success")
}) */


//To use the promises, we use two functions: .then() and .catch() 
//If the promise gets fulfilled then we use the .then method
//If the promise gets rejected then we use .catch method to handle the errors
//Suppose we are passing a function in .then(),then that function will be executed only when our promised is resolved


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        reject("An error has been occurred.");
    });
};

let promise = getPromise();

promise.then((res) => {
    // Write your logic here which you want to be executed if your promise is fulfilled
    console.log("Promise Fulfilled \n", res);
})
.catch((err) => {
    console.log("Oops!", err);
});
