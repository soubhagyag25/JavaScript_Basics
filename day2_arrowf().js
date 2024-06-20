//ARROW FUNCTION
//In This program,we will use arrow function in different ways and try to understand the concepts
//Day 2, Program 4
let sum=()=>{console.log("Hello")} //1.Simplest use
let sum1=()=>console.log("Hello") //2.In Single line codes,the arrow f() will also work without {}
let sum2=(name)=>console.log("Hello " +name)//3.taking argument name
let sum3=name=>console.log("Hello "+name)//4.If only one argument is there,the arrow f() will also work without()
let sum4=(greeting,name)=>console.log(greeting,name)//5.Passing two arguments
let subi={
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

subi.show2()//this is an arrow f(),so "this" keyword will not work here
sum2("Soubhagya")
sum3("Soubhagya")
sum4("Good Morning","Soubhagya")
subi.show()//calling the show f() from object subi

let fun=(a,b)=>
    {
        return a+b
    }
    console.log(fun(10,20))
    /*
    Why JavaScript is called Non-Breaking Language?
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
