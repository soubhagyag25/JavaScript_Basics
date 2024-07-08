// // // import readline from 'readline';
// // // const rl = readline.createInterface({
// // //     input: process.stdin,
// // //     output: process.stdout
// // // });

// // // function linear_search() {
// // //     let array = [];
// // //     rl.question("Enter the size of the array: ", (size) => {
// // //         size = parseInt(size);
        
// // //         function getInput(index) {
// // //             if (index < size) {
// // //                 rl.question(`Enter element ${index + 1}: `, (element) => {
// // //                     array.push(element);
// // //                     getInput(index + 1);
// // //                 });
// // //             } else {
// // //                 rl.question("Enter the element to search: ", (search) => {
// // //                     let found = false;
// // //                     for (let i = 0; i < array.length; i++) {
// // //                         if (array[i] === search) { // Ensure correct comparison
// // //                             console.log("Element found at index:", i + 1);
// // //                             found = true;
// // //                             break;
// // //                         }
// // //                     }
// // //                     if (!found) {
// // //                         console.log("Element not found");
// // //                     }
// // //                     rl.close();
// // //                 });
// // //             }
// // //         }

// // //         console.log(`Enter those ${size} elements:`);
// // //         getInput(0);
// // //     });
// // // }

// // // linear_search();



// // let array=[10,20,30,59,66,22,3,4]
// // let found=false
// // function search(value)
// // {
// // for(let i in array)
// //     {
// //         if(value===array[i]){
// //             console.log("Item found at index:",i)
// //         found=true
// //         }
        
// //     }
// //     if(found==false)
// //         console.log("Item not found")
// // }
// // search(59)

// let array=[10,1,45,23,78,90,3]
// function bubble_sort()
//     {
//         let passes=1
//         let n=array.length
// while(passes<n)
//     {
// for(let i=0;i<n-passes;i++)
//     {
//         if(array[i]>array[i+1])
//             {
//                 let temp=array[i]
//                 array[i]=array[i+1]
//                 array[i+1]=temp
//             }
//     }
//     passes++
// }
// console.log("Sorted array:",array)
// }
// bubble_sort()


class Node{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor()
    {
        this.head=null
        this.size=0
    }
    isEmpty()
    {
        return this.size===0
    }//returns true if this condition is true. 
    prepend(value)
    {
        let node=new Node(value)
        if(this.isEmpty())
            this.head=node
        else
        {
            node.next=this.head
            this.head=node
        }
this.size++
}
append(value)
{
    let node=new Node(value)
    if(this.isEmpty())
        this.head=node
    else
    {
        let temp=this.head
        while(temp.next)
            {
                temp=temp.next
            }
            temp.next=node
    }
    this.size++
}
display()
{
    if(this.isEmpty())
        console.log("List is Empty")
    else
    {
    let temp = this.head;
            let listValue = '';
            while (temp) {//this means,run the loop while temp is not null
                listValue += `${temp.value} `;
                temp = temp.next;
            }
            console.log(listValue);
        }
}
}
let list=new LinkedList
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.display()
list.append(89)
list.display()
