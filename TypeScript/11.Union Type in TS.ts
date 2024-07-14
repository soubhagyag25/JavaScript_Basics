let a:number | string;
a="Soubhagya"
a=10;
console.log(a);


type Admin=
{
    username:string;
    id:string;
}
type Employee=
{
employeeName:string;
id:number
}
let Shankha:Admin | Employee=
{
    username:"Shankha ",
    id:"Shankha001"
}
console.log(Shankha);
console.log(Shankha.id);
console.log(Shankha.username);