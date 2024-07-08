class Node
{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}
class LinkedList
{
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
        if(this.isEmpty()){
            this.head=node
            this.size++
            return
        }
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
        let temp=this.head
        let view=''
        while(temp)
            {
                view += `${temp.value} `
                temp=temp.next
            }
            console.log(view)
    }
add(index,value)
{
    let node=new Node(value)
    if(index<0 || index>this.getSize())
        {
            console.log("Invalid Index")
            return
        }
    else if(index==0)
        {
            list.prepend(value)

        }
        else
        {
            let temp=this.head
            for(let i=0;i<index-1;i++)
                {
                    temp=temp.next
                }
                node.next=temp.next
                temp.next=node
        }
        this.size++

}
removebyindex(index)
{
    let deleted;
    if(index<0 || index>this.getSize())
        {
        console.log("Invalid Index")
        return
        }
        else if(index==0)
            {
                deleted=this.head.value
                this.head=this.head.next
            }

    else
    {
        let temp=this.head
        for(let i=0;i<index-1;i++)
            {
                temp=temp.next
            }
            deleted=temp.next.value
            temp.next=temp.next.next
    }
    this.size--
    console.log("Deleted Node:",deleted)
}
deletebyvalue(value)
{
    let deleted=value
    let temp=this.head
    let prev=null
    while(temp)
        {
            if(temp.value==value)
                {
                    prev.next=temp.next
                }
                prev=temp
                temp=temp.next
        }
        console.log("Deletd Node:",deleted)
        this.size--
}
}
let list=new LinkedList
list.append(20)
list.append(30)
list.append(40)
list.prepend(10)
list.display()
list.add(0,69)
list.add(5,55)
list.display()
list.removebyindex(2)
list.display()
list.deletebyvalue(40)
list.display()