//Different ways to declare an array
let cars=['Mercedes G-Class','Toyota Fortuner','Mahindra Thar','Jeep Wrangler Rubicon']
let bikes=new Array('Honda CBR','Bajaj Pulsar 200 RS','Yamaha R15')
let fruit1=['Apple','Mango','Grapes','Banana']
let fruit=fruit1[2]//Index two's item will be stored in this variable
console.log(fruit)
//other way to achieve this
let fruit2=fruit1.at(2)//syntax: array.at(index)
console.log(fruit2)
//concat method: let new_array=array1.concat(array2,array3,array_N)
let vehicles=cars.concat(bikes,fruit1)
console.log(vehicles)

let fruit4 = ["Banana", "Orange", "Apple", "Mango","Grapes","Pear","Peach","Guava"];
fruit4.copyWithin(3,5)//paste at index 3,start from index 5 and 3rd argument is not given i.e copy till array length
console.log(fruit4)
let fruit3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi","Grapes","Pineapple","Watermelon","Dragon fruit","Coconut","Raspberry"];
console.log(fruit3.copyWithin(3,4,8))//paste at index 3, start from index 0 and copy till index 8[8 is not included]

//fill method: to fill the whole array with a particular value
let arr=['Abc','Bcd','Cde','Def',"Efg","Fgh"]
arr.fill("Ghi")
console.log(arr)
let arr1=['Abc','Bcd','Cde','Def',"Efg","Fgh"]
arr1.fill("Xyz",2,5)//fill the array with 'Xyz',start filling from index 2 and fill till index 5(5 is not included) 
console.log(arr1)


// use of '.includes' method in array: returns boolean values i.e true or false
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));

//every():It also returns boolean values 
//syntax: create a function
// let fun_name=(argument)=> return the condition[no need to use 'return' in single line arrow functions]
//create an array
//array.every(pass the function as argument)
let check_adult=(age)=>age>=18
let ages=[20,18,19,35,16,55]
console.log(ages.every(check_adult))


//convert array to string: using .toString()
let array_1=[1,2,3,4,5,6,7] 
console.log(array_1.join(" and "))
let str=array_1.toString()
console.log(str)//checking it
console.log(typeof(str))//string

//pop(): Deletes the last element from the array and also returns the deleted element
let a=[12,23,45,32,43,67,82]
console.log(a.pop())/
console.log(a)
console.log(a.length)

//push():push inserts the new element at the last and returns the length of the array
let b=[10,20,23,45,43,45]
console.log(b.push())
console.log(b)
b.push(82,45,66)//we can push multiple elements
console.log(b)


//shift method: shift removes the first element from an array and returns it
let cv=[101,102,103,104,105]
console.log("Original array ",cv)
console.log("Deleted element is:",cv.shift())//it will print the deleted element i.e 101,it also reduces the size of an array by -1
console.log("No of elements remaining:",cv.length,"\n")

//unshift(): adds an element in the beginning and returns the new length
let xyz=[20,30,40,50,60]
console.log("Original array:",xyz)
console.log("New length after unshifting",xyz.unshift(10))
console.log("Array becomes:",xyz,"\n")

//splice(): It is also used to delete elements from an array
//syntax: array.splice(start from index number,no of elements you want to remove,add new elements,add_n)
let abc=[1011,1022,1033,1044,1055]
console.log("Original:",abc)
abc.splice(1,4,1012,1013,1014,1015)
console.log("After Splice:",abc,"\n")
//slice()
let bk1=[20,45,97,65,41,67,43,22,33]
console.log(bk1.slice(2,4))//delete first two elements and then delete from index 4 to end
let bk2=[20,45,97,65,41,67,43,22,33]
console.log(bk2.slice(4))//delete first 4 elements
console.log(bk1,bk2)//slice() does not modify the array

//DELETE operator
let num=[23,34,55,67,87]
delete num[0]// But the length of the array will be remain same
console.log(num)
console.log(`Length of array is ${num.length}`)

//Methods that modify the array:
//Note: Methods that removes an element from an array returns the deleted element
//and methods that adds the element to an array returns the new length of the array
//push and push performs their function at the last while shift and unshift performs their function at the beginning
//1.push 2.pop 3.splice 4.shift 5.unshift 6.reverse 7.copyWithin



