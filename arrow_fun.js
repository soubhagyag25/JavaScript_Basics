//ARROW FUNCTION
//In This program,we will use arrow function in different ways and try to understand the concepts
let sum=()=>{console.log("Hello")} //1.Simplest use
let sum1=()=>console.log("Hello") //2.In Single line codes,the arrow f() will also work without {}
let sum2=(name)=>console.log("Hello " +name)//3.taking argument name
let sum3=name=>console.log("Hello "+name)//4.If only one argument is there,the arrow f() will also work without()
let sum4=(greeting,name)=>console.log(greeting,name)//5.Passing two arguments
let object1={
    Name:"Soubhagya",
    Role:"Backend Developer",
    Company:"Unico Connect Pvt Ltd",
    Age:"24 years",
   show:function()//so we are using a normal function,because with normal f()s,"this" binding works
        {
            console.log(`${this.Name} is an Employee of ${this.Company} and he is working as a ${this.Role}\nHe is ${this.Age} years old`)
        },
        show2:()=>
            {
                console.log(`${this.Name} is a good boy`)//Output: undefined is a good boy
            }
}

//object.show2()//this is an arrow f(),so "this" keyword will not work here
sum2("Soubhagya")
sum3("Soubhagya")
sum4("Good Morning","Soubhagya")
object1.show()//calling the show f() from object object1


//Arrow Functions have shorter syntax,they are very much useful for shorter codes
let fun=(a,b)=>a+b
    console.log(fun(10,20))

//General Function
function generalfunction(a,b)
{
    console.log(a+b)
}
generalfunction(10,20)//Longer syntax
    /*
    Why JavaScript is called Non-Blocking Language?
    Example:
    console.log("Start");
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
console.log("End");
Output:
Start
End
This runs after 2 seconds
So,here we conclude that,even the statement will be executed after 2 seconds but it will not wait and prints the next value.
*/ 
