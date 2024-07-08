class Node
{
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
}
getSize()
{
    return this.size
}
prepend(value)
{
    let node=new Node(value)
    if(this.isEmpty())
        {
            this.head=node
        }
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
    let temp=this.head
    while(temp.next)
        {
            temp=temp.next
        }
        temp.next=node
        this.size++
}
insert(value,index)
{
    let node=new Node(value)
    if(index<0 || index>this.getSize())
        {
        console.log("Invalid Index")
        return
    }
    if(index===0)
        {
        this.prepend(value)
        return
    }
        let temp=this.head
        for(let i=0;i<index-1;i++)
            {
                temp=temp.next
            }
            node.next=temp.next
            temp.next=node
            this.size++
}
removebyValue(value)
{
    let removed=value
    console.log("Removing ",removed)
    let temp=this.head
    let prev=null
    while(temp)
        {
            if(temp.value===value)
                {
                    prev.next=temp.next
                }
            prev=temp
            temp=temp.next
        }
this.size--
}
removebyIndex(index)
{
    
    let temp=this.head
    if(index<0 || index>this.getSize())
        {
            console.log("Invalid Index")
            return
        }
    if(index===0)
        {
            console.log("Removing ",this.head.value)
            this.head=this.head.next
            return
        }
    for(let i=0;i<index-1;i++)
        {
            temp=temp.next
        }
    let removed=temp.next.value
    console.log("Removing ",removed)
    temp.next=temp.next.next
    this.size--
    
}

display()
{
    let temp=this.head
    let view=''
    while(temp)
        {
            view += `${temp.value} `
            temp=temp.next
        }
        console.log(view)
}
}
let list=new LinkedList
list.prepend(10)
list.prepend(8)
list.prepend(6)
list.prepend(4)
list.display()
list.append(12)
list.append(14)
list.append(16)
list.display()
list.insert(18,2)
list.insert(20,3)
list.insert(13,6)
list.display()
list.removebyValue(10)
list.display()
list.removebyIndex(0)
list.removebyIndex(1)
list.removebyIndex(3)
list.display()