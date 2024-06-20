let compare=(a,b)=> a-b //ascending order
let array=[343,45,2,765,26,98,245,20]
console.log(array.sort())// 1s>2s>3s>like that..it will not sort the array.
array.sort(compare)
console.log(array)
let compare2=(a,b)=>b-a //descending order
array.sort(compare2)
console.log(array)
console.log(array.reverse())//reverse f()
// New Function:splice(from_index,to_index,replacement1,replacement_n)
let arr=[1,2,3,4,5,6]
console.log("Elements in old array1 are "+arr)
let arr1=arr.splice(0,3,)//splice will delete the elements from index 0 to 3 and will return the elements from index 0 to 3(index 3 is not included)
console.log("Deleted elements are "+arr1)
console.log("Array1 becomes "+arr)
let arr2=[11,12,13,14,15,16]
console.log("old array2 is "+arr2)
arr2.splice(0,3,1,2,3)
console.log("New array2 after deleting 11,12,13 is "+arr2)
let arr3=[10,11,12,13,14,15,16]
console.log(arr3.slice(4))//delete first 4 elements
console.log(arr3.slice(3))//delete first 3 elements
let arr4=[21,22,23,24,25,26,27,28]
console.log(arr4.slice(2,4))//delete first 2 elements and then delete from index 4 to end

