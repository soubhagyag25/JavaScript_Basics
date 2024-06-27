// STRINGS
let name = "Soubhagya"
console.log(name.length) //9
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(0,4))// 0 to 4th and 4th one is not included 
// soubhagya
// 012345678
console.log(name.slice(4))//it will delete the first four letters
console.log(name[4])//h
let name1="Soubhagya Bhaiya"
let newName=name1.replace("Bhaiya","Bhaijaan")//It will replace Bhaiya with Bhaijaan
console.log(newName)
let naam="            Shabana           "
console.log(naam)
console.log(naam.trim())//It will remove the extra spaces
let friend="Shabeena"
console.log(name.concat(" is a friend of ",friend))
for(let i=0;i<name.length;i++)
    console.log(name[i])
//note: Strings are immutable i.e cannot be changed
// use of .includes f()
//.includes() is a boolean f() which returns true or false if the word in present in the string
let sentence="Hello! How are you?"
console.log(sentence.includes("Hello")) // true
console.log(sentence.startsWith("Hello"))
console.log(sentence.endsWith("?"))