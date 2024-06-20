//arrays
 let marks=[12,2,4,5,7,8,9,10]
 console.log(`Length of array is ${marks.length}`)
 console.log(marks[0])
 //Join method
 let a=marks.join(' and ')
 console.log(a)//it will print like 1 and 2 and 4 and 5 
 console.log(marks.pop())//Deletes the last element and prints the last element of the array
 console.log(marks)
 marks.push(15)// adds an element in the last and returns the new length of the array
 console.log(marks)
 let b=marks.shift()//Deletes the first element and returns the deleted element
 console.log(b,marks)
 //DELETE OPERATOR: delete is not a f() but it is an operator
 let num=[23,34,55,67,87]
 delete num[0]// But the length of the array will be remain same
 console.log(num)
 console.log(`Length of array is ${num.length}`)
 let arr1=[1,2,3,4,5]
 let arr2=[6,7,8,9,10]
 let new_array=arr1.concat(arr2)//old arrays remain unaffected
 console.log(new_array)
 // You can also concatenate more than one arrays to a new array
 let array3=[26,55,68,43,33]
 let array4=arr1.concat(arr2,array3)
 console.log(array4)
 