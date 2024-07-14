//TypeScript is used for Type Safety
//TypeScript catches errors in Compile Time which makes debugging easier and reduces the likelihood of bugs in production.
//Browser does not support TypeScript
//TypeScript is all about static typing
//We have to define the type of the variable before declaration.
let sum=(a:number,b:number)=>a+b;
console.log(sum(10,20));
//We can also declare a return type of a function
//eg:
function sub(a:number,b:number):number//return type of function sub
{
    return a-b;
} 
console.log(sub(20,10));