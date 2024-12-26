

const prompt = require("prompt-sync")();
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // constructor to the head 

    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;

        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNodes(x) {
        let dummy = new Node(0);
        dummy.next = this.head;
        let current = dummy;

        while (current.next !== null) {
            if (current.next.value > x) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        this.head = dummy.next;
    } 
    //remove every thing bigger then x 

    printList() {
        let current = this.head;
        const result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" "));
    } 
    //print the list
}

const list = new LinkedList();
let values = prompt("Enter the linked list values: ");
values = values.split(" ");
values.forEach((val) => list.addNode(parseInt(val)));
const x = prompt("Enter the value of x:");
list.removeNodes(x);
list.printList()