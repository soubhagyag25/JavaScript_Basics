class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // New prev pointer for doubly linked list
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // New tail pointer for doubly linked list
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    insert(index, value) {
        if (index < 0 || index > this.getSize()) {
            console.log("Invalid Index");
            return;
        } else if (index === 0) {
            this.prepend(value);
        } else if (index === this.getSize()) {
            this.append(value);
        } else {
            let node = new Node(value);
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            node.next = temp.next;
            node.prev = temp;
            temp.next.prev = node;
            temp.next = node;
            this.size++;
        }
    }

    removebyIndex(index) {
        if (this.isEmpty()) {
            console.log("List is Empty. Nothing to Delete");
            return;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.getSize() - 1) {
            removedNode = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let temp = this.head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            removedNode = temp.next.value;
            temp.next = temp.next.next;
            temp.next.prev = temp;
        }
        this.size--;
        console.log("Removed Node:", removedNode);
    }

    removebyValue(value) {
        if (this.isEmpty()) {
            console.log("List is Empty. Nothing to Remove");
            return;
        }
        let temp = this.head;
        while (temp) {
            if (temp.value === value) {
                if (temp === this.head) {
                    this.head = temp.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                } else if (temp === this.tail) {
                    this.tail = temp.prev;
                    this.tail.next = null;
                } else {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                }
                this.size--;
                console.log("Removed Node:", value);
                return;
            }
            temp = temp.next;
        }
        console.log("Node with value", value, "not found.");
    }

    display() {
        if (this.isEmpty()) {
            console.log("List is Empty");
        } else {
            let temp = this.head;
            let view = "";
            while (temp) {
                view += `${temp.value} `;
                temp = temp.next;
            }
            console.log(view);
        }
    }
}

// Example usage:
let list = new DoublyLinkedList();
list.prepend(16);
list.prepend(14);
list.prepend(12);
list.prepend(10);
list.display();

list.append(18);
list.append(20);
list.display();

list.insert(2, 13);
list.display();

list.removebyIndex(2);
list.display();

list.removebyValue(16);
list.display();
