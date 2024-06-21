//Map,Filter and Reduce are called as Higher Order Array Methods
//Note:These methods do not modify or change the original array but create a new array 
let arr=[1,20,30,40,50]
//using map()
let y=arr.map((value) => {
console.log(value)
return value
})
//using for in loop
for(let i in arr)
    console.log(arr[i])
//for of loop
for (let j of arr)
    console.log(j)
let x=arr.forEach((element)=>
    {
        console.log(element)
        return element
    })
console.log(y)
console.log(x)// forEach loop returns nothing
//Difference between forEach and map f()
//1.map f() can also return a value and map f() creates a new array which can be stored in a new array
//2.forEach loop is used for to perform certain operations while map() is used when we want to create a new array to store the result
let z=arr.map((value,index,array)=>
    {
        console.log(value,index,array)
        return index
    })
console.log(z)
//filter()
let variable=arr.filter((element)=>
    {
        console.log(element)//prints the array elements just like forEach and Map
        return (element>20)//but this method can return the values which satisfies the particular condition
    })
    console.log(variable)
//Now we will learn about reduce()
//reduce method reduces an array to a single value
let arr2=[0,1,3,2,4,6,8]
let newarr=arr2.reduce((h1,h2)=>
{
    return h1+h2//0+1=1>1+3=4>4+2=6>6+4=10>10+6=16>16+8=24 o/p=24
})//we can return our desired condition
console.log(newarr)
