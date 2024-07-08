let array=[10,40,50,60,45,66,34,12,2,78]
function binarysearch(key)
{
let compare=(a,b)=>
    {
        return a-b
    }
array=array.sort(compare)
let low=0
let high=(array.length-1)
let found=false
while(low<=high)
    {
       
        let mid=Math.floor((low+high)/2)
        if(key<array[mid])
            high=mid-1
        else if(key>array[mid])
            low=mid+1
        else if(key===array[mid])
        {
         console.log(`${key} found at index ${mid}`)
         found=true
            break
        }
        
    }
    if(!found)
        console.log("Element not found")

}
binarysearch(78)