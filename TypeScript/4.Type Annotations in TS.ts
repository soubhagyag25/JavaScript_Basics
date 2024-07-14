//Type Annotations in JS
//Explicitly specifying the type of the variable is called type annotation
//syntax: let/var/const variable:type
let a:number=10;
let b:string="Unico Connect";
function print(num:number,str:string):any
{
    return console.log(num,str);
}
print(a,b);
let arr:string="Hello Doston."
let arr2:string="Namaskar Deviyon aur Sajjano."
console.log(arr.concat(arr2));
//or
console.log(arr+arr2);


//Boolean Datatype
let isEven:boolean;
function evenCheck(num:number):boolean
{
    return num%2===0;
}
isEven=evenCheck(5);
console.log(isEven);

