class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;//returns a boolean value.Returns true if it is true.
    }

    getSize() {
        return this.size;
    }

    prepend(value) {//prepend means to add something in the beginning
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List Is Empty");
        } else {
            let temp = this.head;
            let listValue = '';
            while (temp) {//this means,run the loop while temp is not null
                listValue += `${temp.value} `;
                temp = temp.next;
            }
            console.log(listValue);
        }
    }

    append(value) {//append means to add something in the end
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.getSize()) {
            console.log("Index Is Invalid");
            return;
        }
        if (index == 0) {
            this.prepend(value);
        } else {
            let node = new Node(value);
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.getSize()) {
            console.log("Index Is Invalid");
            return;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }
        else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            removedNode = temp.next;
            temp.next = temp.next.next;
        }
        this.size--;
        console.log(removedNode.value);
    }

    removeValue(value)
        {
            if (this.isEmpty()) 
                {
                console.log("List is Empty. Nothing to Remove");
                return;
            }
            let removedNode=value
            let temp=this.head
            let prev=null
            while(temp)
                {
                    if(temp.value===value)
                        {
                            prev.next=temp.next
                            this.size--
                            console.log("Removed Node:",removedNode)
                            return
                        }
                        prev=temp
                        temp=temp.next
                }
            }
        }

let list = new SingleList();

console.log(list.isEmpty());
console.log(list.getSize());

list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
// list.print();

list.append(90);
list.print();

list.insert(50, 0);
list.print();

list.insert(80, 3);
list.print();

list.removeAt(0)
list.print()