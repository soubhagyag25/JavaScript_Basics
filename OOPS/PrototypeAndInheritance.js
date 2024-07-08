//Prototype: Each and every JS object has a prototype property.
//Inheritance in JS is achieved using it.
let Employee=function(name,gender,birth_year)
{
    this.name=name;
    this.gender=gender;
    this.birth_year=birth_year
}
Employee.prototype.calculate_Age=function()
{
    let age=new Date().getFullYear()-this.birth_year
    console.log(age)
}
let Subi=new Employee("Soubhagya","Male",2000)
Subi.calculate_Age()//Subi can still access the function calculate_Age without even storing a copy of it within
console.log(Subi)
