//In JavaScript, flat and flatMap are methods available on arrays.
//They are useful for working with arrays of arrays (nested arrays) and for transforming and 
//flattening arrays in a more concise way.
let arr=[10,20,30,,[55,23,66],[22,43,55]]
arr=arr.flat()//it will flat till depth 1
console.log(arr)
let arr2=[10,20,30,,[55,23,[2,4,6],66],[22,43,55]]
arr2=arr2.flat(2)//flat till depth 2
console.log(arr2)
//we can also pass infinity in flat method
//flat(Infinity): this will flat arrays of all depths
let arr3=[1,2,3,[1,2,3,[1,2,3,[1,2,3]]]]
arr3=arr3.flat(Infinity)//'I' of the Infinity should be in capital letter
console.log(arr3)



let xyz=[1,2,3]
xyz=xyz.map(x => [x, x * 2]//[first element itself , double of that element]
)
console.log(xyz)//[ [1,2], [2,4], [3,6] ]
xyz=xyz.flat()
console.log(xyz)
//instead of writing this long logic, we can directly use flatMap method
//using flatMap
const arr1 = [1, 2, 3];
console.log(arr1.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]


//practice:
function sum(x)
{
    return x+x
}
let abc=[1,2,3,4,5,6,7,8,9]
abc=abc.map(sum)
console.log(abc)