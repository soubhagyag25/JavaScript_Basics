let object1={
    name:"Soubhagya Gautam",
    age:24,
    gender:"Male",
    role:"Backend Developer"
}
console.log(Object.keys(object1))
console.log(Object.values(object1))

console.log(Object.entries(object1))//It will print the keys as well as values
//Other Ways to achieve the Same
//1.Using for in loop
let result=""
for(let key in object1)
    {
    result +=(`${key} is ${object1[key]} \n`)//key will print the key and obj[key] will print the value
    }
console.log(result,"\n")
//2.Using for of loop
    for(let [key,value] of Object.entries(object1)){//we are also using 'entries' here
        console.log(`${key} is ${value}`)
    }
object1['company']="Unico Connect Pvt. Ltd."
console.log(object1)