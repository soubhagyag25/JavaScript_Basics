class Parent
{
    constructor(name)
    {
        this.name=name
    }
    eats()
    {
        
        console.log(`${this.name} eats Chicken.`)
    }
}
class child extends Parent{
    
    eats()
    {
        super.eats()//super keyword must be used within a function or a constructor and before the use of 'this' keyword
        console.log(`${this.name} eats Pizza`)
    }
    
}
let childobj=new child("Soubhagya")
childobj.eats()// this will call this method of its own class, not the method of parent class
//in order to call the method of parent class,we need to use the 'super' keyword
