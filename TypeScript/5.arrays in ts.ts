let numbers:number[]=[1,2,3,4,5,6];
console.log(numbers);
//or
let num:number[]=new Array(1,2,3,4,5,6)
console.log(num);

let str:string[]=["Soubhagya","Rahul","Alok"]
console.log(str[1].toLowerCase());
console.log(str.length);
for(let i=0;i<str.length;i++)
    {
        console.log(str[i]);
    }
str.push("Harsh")
console.log(str);

// for(let i in str)
//     {
//     console.log(str)
//     }
for(let j of str)
    console.log(j);
for(let i in str)
    console.log(str[i]);
num.forEach((element:number)=>
{
    console.log(element);
})