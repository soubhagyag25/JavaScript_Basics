//.use method:
let name={
    firstname:'Soubhagya',
    lastname:'Gautam',
    printfullname:function(){
        console.log(this.firstname+" "+this.lastname)
    }

}
name.printfullname()
let name2={
    firstname:'Virat',
    lastname:'Kohli'
}
//Now I want to borrow the function 'printfullname' from the object 'name'
//so, I will use the .use method
name.printfullname.call(name2)
//or
let print=function(hometown,state)
{ console.log(this.firstname+" "+this.lastname +" from "+hometown+","+state )}
print.call(name,'Kathua','J&K')
print.call(name2,'Delhi',"India")
//Difference between call and apply
//apply:
print.apply(name,['J&K','India'])//we pass it here as an array list
//bind:
//To use bind method,we need a variable to store it
let fullname=print.bind(name,"Jammu","Jammu and Kashmir")
//rather than directly invoking the function,we have the copy of the function inside a variable and we can call it whenever we want it
fullname()
   
