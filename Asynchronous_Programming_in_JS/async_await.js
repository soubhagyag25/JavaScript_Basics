/* use of .then() again and again is called Promise Chaining
which also makes the code complex
Therefore, we got a new concept of async and await
"async" and "await" are keywords in JS and their task is to make asynchronous programming simpler to understand and manage
We can make any function as an async function by using the keyword "async"
An async function always returns a promise */

// "await": It pauses the execution of its surrounding async function until the promise is settled
// "await" keyword can be only used inside an 'async' function
function api(value)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("Weather Data for Value:",value)
        resolve(200)// 200 represents successful API call
        },2000
        )
        
    })
}
(async function()// new concept : IIFE
{
console.log("Fetching Data 1......")
await api(1)
console.log("Fetching Data 2......")
await api(2)
console.log("Fetching Data 3......")
await api(3)
})()
//now we are doing the same thing which we wanted to do with callbacks and promises that one particular action 
//should be executed after the completion of that action, but this syntax is much more simpler and understandable

//We actually wanted to create a situation that if one task is completed then only the another task should be completed