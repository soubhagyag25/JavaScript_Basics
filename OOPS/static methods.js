//There are two types of methods:
//1. Static Method    2.Instance Method
//Static methods are those methods which are associated with the class and not with the instances.
class person{
    constructor(name,birthYear,gender)
    {
        this.Name=name;
        this.Birth_year=birthYear;
        this.Gender=gender;    
    }
    calculateAge()
        {
            let age=new Date().getFullYear()-this.Birth_year
            console.log(age)

        }
        static greet()
        {
            console.log(`Hi ${this.name},How are you?`)
        }
}
let Subi=new person('Soubhagya',2000,'Male')
console.log(Subi)
Subi.calculateAge()
//Subi.greet() 
//Note that,Instances of a class cannot access static methods


















