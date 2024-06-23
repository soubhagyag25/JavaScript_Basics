/*Promises are used to handle asynchronous operations in javascript
You create a Promise using the Promise constructor, which takes a function with two parameters: resolve and reject.
Example: Simulating Asynchronous Operation
Let's simulate a simple asynchronous operation using setTimeout.*/
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Change to false to simulate failure

        if (success) {
            resolve("Operation completed after 2 seconds!");
        } else {
            reject("Operation failed!");
        }
    }, 2000); // 2 seconds delay
});
//We can use .then() to handle the result when the Promise is fulfilled,
//and .catch() to handle errors when the Promise is rejected.
myPromise.then((message) => {
        console.log(message); // This runs after 2 seconds if the promise is fulfilled
    })
    .catch((error) => {
        console.error(error); // This runs if the promise is rejected
    });

/*Practical Example: Fetching Data from an API
//When we fetch a data from an API, it returns us a PROMISE,that promise may be resolved or rejected
//Here's a simpler version of using fetch to get data from an API:

fetch('https://jsonplaceholder.typicode.com/users/1') // Fetch data for user with id 1
.then((response) => {
    if (response.ok) {
        return response.json(); // Convert the response to JSON
    } else {
        throw new Error('Network response was not ok');//In JavaScript, throw is used to create an error. 
        //When you use throw, it stops the normal flow of your code and jumps to the nearest error handler,
        //which is usually a .catch() block if you're working with Promises.
    }
})
.then((data) => {
    console.log(data); // Handle the data from the API
})
.catch((error) => {
    console.error('Error:', error); // Handle any errors
}); */
