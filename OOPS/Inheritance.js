class Parent
{
    hello(name)
    {
        this.name=name
        console.log("Hello ",name)
    }
}
class Child extends Parent{}
let obj=new Child();
obj.hello('Soubhagya')