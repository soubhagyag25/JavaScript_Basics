let arr=[10,11,12,13,14,15,16]
//Learn the syntax of foreach loop
arr.forEach(element => {
    console.log(element)
});
console.log("Multiplication")
arr.forEach(element => {
    console.log(element*element)
});
//ARRAY FROM:syntax--> Array.from(array_name). Array.from is also used to convert an HTML collection into an array
let new_arr=Array.from(arr)
console.log(new_arr)
let name="Soubhagya"
console.log(Array.from(name))// It will create an array of my name's alphabets
//Print all the elements of an array using for of loop
for(let i of arr)
    console.log(i)
for(let j in arr)
    console.log(j)//It will print the index numbers from o to last
//How to print the elements of an array using for in loop
for(let k in arr)
    console.log(arr[k])