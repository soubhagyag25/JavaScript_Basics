//Type Alias is similar to user defined data type like we use structure in C++.
// we create a Type Alias by using 'type' keyword
// Type Alias can be a Function or an Object
type Person={
    name:string;
    gender:string;
    age:number;
    address?:{//Optional
        city:string;
        country:string
    }
}
let subi:Person={
    name:"Soubhagya",
    gender:"Male",
    age:24,
    address:{
        city:"Kathua",
        country:"India"
    }
}
console.log(subi);
console.log(subi.address.city);
console.log(subi.age);

let nikhil:Person={
    name:"Nikhil",
    gender:"Male",
    age:35
}
console.log(nikhil.age);