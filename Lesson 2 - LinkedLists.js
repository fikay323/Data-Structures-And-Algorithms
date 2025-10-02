class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(1).push(2).push(3);

console.log(myLinkedList);
