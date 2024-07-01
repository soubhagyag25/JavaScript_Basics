//what is a closure?
//Any function which is bundled together with its lexical environment.
//Closures are a fundamental concept in JavaScript that allow a function to access variables from its enclosing scope,
//even after the outer function has finished executing. This capability is what gives closures their power and utility
//Example:01
function one()
{
    let a=10
    function two()
    {
        console.log(a)
    }
    two()
}
one()
//example:02
//we can store the function in a variable 
function one1()
{
    let a=101
    function two1()
    {
        console.log(a)
    }
    return two1
}
let function_holder=one1()
function_holder()
//Even after the execution of the function one1(), the variable "function_holder" stills holds the inner function two1(),
//and whenever we call "function_holder", it can access all the things which the function two1 could access.

function_holder()// It will again print 101


// OR
function one12()
{
    let a=101
    return function two12()//returning a function from here itself
    {
        console.log(a)
    }
}
let function_holder1=one1()
function_holder1()


function outer_most()
{
    let b=89
    function f1()
    {
    let a=101
    return function f2()//returning a function from here itself
       {
        console.log(a)
        console.log(b)
       }
    }
let fh=f1()
return fh
}
let f=outer_most()
f()
