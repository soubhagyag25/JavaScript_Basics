// "let" keyword
let a=20
a="Shiv"
//'a' is initialized again.JS allows you to change the type of the variables
console.log(a)// it will print the last value assigned to variable 'a' which is "Shiv"
let a1 
a1=45// this is also possible in "let". We can declare in one line and we can initialize in the next line
console.log(a1)
let b="Shakti"//we cannot redeclare the variables using let keyword but we can reinitialize them.
//let b=10
//It is not possible in JS 
//"var keyword"
var c=10
var c="Harry"// We can also redeclare the variables declared with 'var' keyword
c=4.5
console.log(c)//It will print the last value assigned to 'c' which is 4.5
//const keyword
const d=10//const variables must be declared and initialized in the same line
console.log(d)
//d=4.5 this is not possible in const variables

//Three Primary types of Scope:global,local and block-level
//variables declared with 'var' keyword have a Global-Scope
var var1=10
function print()
{
console.log("var1 has a global scope and its value is "+var1)
}
print()
//Local Scope vs Block-Level Scope
//local scope is within the functions
//while the block level scope is within the block or within code blocks like if,for,while
function add()
{
let num1=10//Local Variables
let num2=20
    if(num2>num1)
        {
            let sub=num2-num1//block scope of variable sub
            console.log(sub)
        }
//console.log(sub) it will not print 30
console.log(num1+num2)
}
add()