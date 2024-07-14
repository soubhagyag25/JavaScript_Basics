let arr1:number[]=[10,23,45,12,78,88,9]
let double1=(num:number):number=>num*2;
console.log(arr1.map(double1));

arr1.forEach((element)=>
{
console.log(element*2);
})
let numb=(a:number)=>
    {
        if(a>25)
            return a;
    }
console.log(arr1.filter(numb))
let ar:number[]=[2,3,5,6,1,7,10]
let sum=(a:number,b:number)=>
    {
        return a+b;
    }
console.log(ar.reduce(sum))
let numgreterthan5=(a:number)=>
    {
        return a>5

    }
console.log(ar.filter(numgreterthan5))