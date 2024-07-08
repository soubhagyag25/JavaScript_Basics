//Bubble Sort: It is called bubble sort because with every pass,largest element came out as a bubble
//The passes are always one less than the size of the array
//For Example:If the size of the array is 10, then the number of passes will be 9
//In this algorithm,we compare the first element of the array with the second element,
//if the first element is larger than the second element,then we swap the elements
//We will repeat this until the array becomes sorted in increasing order
//Logical Implementation: 
let array=[90,34,12,1,65,7,39,2]
console.log("Unsorted Array:",array)
function bubble_sort()
{
    let passes=1
    let n=array.length
    while(passes<n)
        {
            for(let i=0;i<n-passes;i++)
                {
                    if(array[i]>array[i+1])
                        {
                            let temp=array[i]
                            array[i]=array[i+1]
                            array[i+1]=temp
                        }
                }
            passes++
        }
console.log("Sorted Array:",array)
}
bubble_sort()