/*1.CallBack Functions: A callback function is a function passed into another function as an argument,which is then invoked inside the 
outer function to complete an action.
*Note: Don't call the function in the argument otherwise the function will get executed right away{don't use ()}
Ques: Why do we use callback function?
Ans: If we want that a particular function should be executed after that function,then we pass that function as a callback
Call Backs are used to handle asynchronous operations*/
//For Example:
function hello(callback)//Suppose if this hello function takes a lot of time for loading then obviously it will be executed after some time,
{                       // we want that once the loading is done then a particular function will be executed after it.
    console.log("Hello!")
    callback()
}
//now suppose we want that "greet" function should be executed after the 'hello' function
function mood()
{
    console.log("How are you feeling today?")
}
function greet()
{
    console.log("Good Afternoon")
}
function bye()
{
    console.log("Good Bye!")
}
hello(greet)
mood()
bye()
//Example 2
let first=()=>console.log("I am First")
let second=()=>console.log("I am Second")
let third=()=>console.log("I am Third")
function delayed(callback)
{
setTimeout(function()
{
    console.log("I am a delayed function")
    callback()
        
    },1500);
}
delayed(first)
second()
third()
//Example 3.
// Callback function that processes the fetched data
function processData(data) {
    console.log("Processing data: " + data);
}

// Function that simulates a database query with a delay
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        let data = "Database record";  // Simulated fetched data
        console.log("Data fetched");
        callback(data);  // Execute the callback with the fetched data
    }, 3000);  // 3-second delay
}
fetchData(processData);
