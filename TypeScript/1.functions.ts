function greet(name:string,id:number)
{
    console.log(`Good Morning ${name} and your id is ${id}`);
}
greet("Soubhagya",25)
//Arrow Function
let sum=(num1:number,num2:number):number=>num1+num2//return type of sum function is number 
console.log(sum(10,20));//passing number arguments

function isPalindrome(value:string)
{
    let rev:string=value.split("").reverse().join("")
    if(value===rev)
        return console.log((`${rev} is a Pallindrome`));
    else
    return console.log(`${value} is not a Palindrome`);
}
isPalindrome("NAMAN");
isPalindrome("123321");
isPalindrome("RAMAN")
