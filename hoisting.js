//Hoisting is the built-in behavior of JS through which declarations of functions,variables and classes are moved to
//the top of their scope-all before code execution

hello()//It will print "Hello, How are you?"
greet()// It will give error because arrow functions cannot be accessed before definition 
console.log(a)//Undefined
var a=10;
console.log(a)//It will print 10
function hello()
{
    console.log("Hello, How are you?")
}
let greet=()=>console.log("Good Afternoon")