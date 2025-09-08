class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    printList() {
        let current = this.head;
        const list = []
        while (current) {
            list.push(current.data);
            current = current.next;
        }
        console.log(list.join('->'));
    }
    rotateLinkedList(list, rotation) {
        list = list.head;
        if (!list || !list.next) return;
        let temp = list;
        let length = 0;

        while (temp) {
            temp = temp.next;
            length++
        }
        rotation = rotation % length;
        length = (length - rotation) - 1;

        let current = list;
        while (length > 0) {
            current = current.next;
            length--
        }
        this.head = current.next
        let newHead = this.head;
        current.next = null;

        while (newHead.next) {
            newHead = newHead.next;
        }
        newHead.next = list
    }


    findCycleStart(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow) {
                break;
            }
        }
        if (!fast || !fast.next) {
            return -1;
        }
        slow = head;
        while (fast != slow) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow
    }

}



const list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.rotateLinkedList(list, 3)
list.printList(5)




class Node {
    constructor(data, next = null, random = null) {
        this.data = data;
        this.next = next;
        this.random = random;
    }
}

function cloneLinkedList(head) {
    let current = head;
    while (current) {
        let newNode = new Node(current.data, current.next)
        current.next = newNode;
        current = current.next.next
    }
    current = head;
    while (current) {
        current.next.random = current.random.next;
        current = current.next.next
    }

    let cloneHead = head.next;
    let copy = cloneHead;
    current = head;
    while (current) {
        current.next = current.next.next;
        copy.next = copy.next ? copy.next.next : null;
        current = current.next;
        copy = copy.next;
    }

    return cloneHead;
}

// Create a simple test with random pointers
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;

a.random = c;
b.random = a;
c.random = b;

function printList(head) {
    let curr = head;
    while (curr) {
        const randVal = curr.random ? curr.random.data : "null";
        console.log(`Node: ${curr.data}, Random: ${randVal}`);
        curr = curr.next;
    }
}

console.log("Original List:");
printList(a);

const cloned = cloneLinkedList(a);
console.log("Cloned List:");
printList(cloned);
