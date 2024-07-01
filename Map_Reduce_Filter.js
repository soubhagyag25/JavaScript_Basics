//Higher-Order Functions:Higher-order functions are a fundamental concept in JavaScript and functional programming.
//A higher-order function is a function that either:
//1.Takes one or more functions as arguments.
//2.Returns a function as its result.
//Many built-in JavaScript functions take other functions as arguments
//example:map(),reduce(),filter()

//map(): It is used to transform an array.It does not modify the array and we can store it in another array.
//eg: To Double its elements or to triple its elements
let arr=[91,37,43,59,103,82,61,75,29]
console.log("Original:",arr)
let double=(num)=>num*2//Function to double:Elements of the array will be replaced by the doubled elements
let triple=(num)=>num*3//Function to triple the 
let square=(num)=>num*num//Function to do square
console.log("Doubled:",arr.map(double))
console.log("Tripled:",arr.map(triple))
console.log("Square:",arr.map(square))


//filter: to filter out the desired elements of the array which satisfy the particular condition
//eg: To filter the even elements or odd elements 
//to filter the prime numbers from an array, etc.
//let us make a function which returns the even elements 

let odd=(num)=>{
    if(num%2!=0)
        return num
}
let prime = (num) => {
    if (num <= 1) return false
    if (num === 2) return true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true; // If no divisors found, it's a prime number
}

console.log("Prime numbers are :",arr.filter(prime))
console.log("Even numbers are:",arr.filter((num)=>{
    if(num%2==0)
        return num
}  ))//we can also define a function here itself
console.log("Odd Numbers are:",arr.filter(odd))

//reduce: reduce method will reduce the whole array into a single result ex: Finding the sum of all the elements of an array
let output=arr.reduce(function(sum,keys)
{
sum+=keys
return sum
})

console.log("Sum of all the elements of the array are:",output)

let result=arr.reduce((mul,keys)=>{
    mul*=keys
    return mul
})
console.log("Multiplication of all the elements:",result)


let largest = arr.reduce((max, current) => {
    return current > max ? current : max;
}, arr[0])//arr[0] is given as the initial max value 

console.log(largest);
