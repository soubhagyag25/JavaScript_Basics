//any vs unknown
//any:The any type is the most flexible type in TS. It essentially turns off all type checking for the variables and
//expressions it is applied to
//writing code with 'any' is  similar to writing code in JS
let number:any=123;
number='Soubhagya';//assigned string
number=true;//assigned boolean value
console.log(number);
//use cases of any:
//1. Working with Dynamic Data: When dealing with data from dynamic sources like user inputs,network responses,
//or JSON objects,the any can be useful
//2. Migration from JS to TS and manually changing the types where required
//-------------------------
//     Unknown Type
//-------------------------
//The unknown type is a safer alternative to 'any' because it still enforces type checking and type safety.
//The variables of type unknown can hold values of any type but you must perform type check or type assertions before
//using them in specific ways.
let xyz:unknown="Soubhagya";
xyz=true;
xyz=123;

if(typeof xyz==='string')
    {
        console.log(`${xyz} is a string`);
    }
else if(typeof xyz==='number')
{
    console.log(xyz+5);
}
else if(typeof xyz==='boolean')
    console.log(xyz);
