//There are 7 primitive datatypes in JS and majorly 3 non-primitive datatypes in JS
//1.Primitive: Null,Number,String,Symbol,Boolean,BigInt,Undefined
//2.Non-Primitive:Arrays,Functions,Objects
let num=null//1
let num1=undefined//2
let num2=true//boolean 3
let num3="Soubhagya"//string 3
//Symbols are always unique
let sym1=Symbol()//5
let sym2=Symbol()
console.log(sym1==sym2)//it will be false
let bigint1=BigInt(12345678901234567)//BigInt 6
console.log(bigint1)
let num4=1234//number 7

//Non-Primitive Datatypes
//1. Objects
let obj1={
    Alok:101,
    Aditya:104,
    Soubhagya:110
}
console.log(obj1)
//2. Arrays
let array=[10,20,null,34.5,true,-54]
for(let i of array)
    console.log(i)
//3. Functions
function fun1()
{
    console.log("I am a function")
}
fun1()