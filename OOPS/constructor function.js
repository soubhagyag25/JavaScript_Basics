//A function constructor is a pattern in JS based on which we can create several objects.
//With constructor function,we can instantiate objects and implement inheritance.
//Instead of creating objects again and again, we can create multiple objects with a single line code
let Person=function(name,gender,birth_year)
{
    this.name=name;
    this.gender=gender;
    this.birth_year=birth_year
    this.calAge=function()
    {
        let age=new Date().getFullYear()-this.birth_year
        console.log(age)
    }
}//now we have created a blueprint for other objects.This blueprint is nothing but a Constructor Function
let Soubhagya=new Person("Soubhagya","Male",2000)
Soubhagya.calAge()
console.log(Soubhagya)

let Shipra=new Person("Shipra","Female",1993)
Shipra.calAge()
console.log(Shipra)

//here, the whole function is also passed and suppose if we create 1000 objects then 1000 functions will be copied to 
//those 1000 objects which will consume a lot of memory
//we will resolve this by using Prototype and Inheritance
