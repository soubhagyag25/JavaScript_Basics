//12th of July,2024
enum Roles
{
    admin="admin",
    user="user"
}
type loginDetails={
    name?:string;
    email:string;
    id:number;
    password:string,
    role:Roles//giving the enum type Roles
}
let Alok:loginDetails={
    email:"aloklal@gmail.com",
    id:1011,
    password:"123Alok@123",
    role:Roles.user
}
let Soubhagya:loginDetails={
    name:"Soubhgya Ji Gautam",
    email:"soubhagyag25@gmail.com",
    id:1025,
    password:"Soubhagya123",
    role:Roles.admin
}
console.log(Soubhagya.email);
console.log(Soubhagya.role);
console.log(Alok.email);
console.log(Alok.role);