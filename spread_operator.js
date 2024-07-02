//Spread Operator: It allows an iterable such as an array or string to be expanded into separate elements 
//(unpack the elements)
let numbers=[1,2,3,4,5]
let maximum=Math.max(numbers)//It will return NaN  i.e Not a Number
console.log(maximum)
//now we use our spread operator (...)
maximum=Math.max(...numbers)
console.log(maximum)
console.log(numbers)
console.log(...numbers)
// We can also use the spread operator in function calls
let num=[4,5,6]
let sum=(num1,num2,num3)=> //3 parameters 
    {
        return num1+num2+num3
    }
console.log(sum(...num))// by using spread operator, 4 , 5 and 6 will be passed as arguments to the function sum
//...operator is also used to combine two arrays
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let combine=[...arr1,...arr2]
console.log(combine)
//using ...operator with strings:
let username='soubhagyag25'
let letters=[...username]
console.log(letters)
//Destructuring without using ...operator
let ab=[1,4,6]
let [a,b,c]=ab
console.log(a,b,c)// 1 4 6
console.log(a)//1
console.log(b)//4
console.log(c)//6
//rest operator:
const [first, second, ...rest] = [1, 2, 3, 4, 5,6,7,8,9,10];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3,4,5,6,7,8,9,10]
