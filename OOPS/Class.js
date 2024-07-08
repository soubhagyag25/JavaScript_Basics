//In JS,there are two ways to declare a Class
// 1. class declaration
class car
{

}
//2.Class Expression:
let cars=class{

}
//Every class a special function called as Constructor and its name also should be constructor
class person{
    constructor(name,birthYear,gender)
    {
        this.Name=name;
        this.Birth_year=birthYear;
        this.Gender=gender;
        this.calculateAge=function()
        {
            let age=new Date().getFullYear()-this.Birth_year
            console.log(age)

        }
    }
}
let Soubhagya=new person('Soubhagya',2000,'Male')
Soubhagya.calculateAge()
console.log(Soubhagya)