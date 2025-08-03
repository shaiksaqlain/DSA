// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(data) {
//         const newNode = new Node(data)
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
//     printList() {
//         let current = this.head;
//         const list = []
//         while (current) {
//             list.push(current.data);
//             current = current.next;
//         }
//         console.log(list.join('->'));
//     }
//     rotateLinkedList(list, rotation) {
//         list = list.head;
//         let dummy = list;
//         let count = 0

//         while (dummy) {
//             count++
//             dummy = dummy.next
//         }

//         rotation = rotation % count
//         if (!rotation) {
//             return
//         }
//         count = (count - rotation) - 1;
//         let dummy2 = list;
//         while (count > 0) {
//             dummy2 = dummy2.next;
//             count--
//         }
//         dummy = dummy2.next;
//         dummy2.next = null
//         this.head = dummy;
//         while (dummy.next) {
//             dummy = dummy.next;
//         }
//         dummy.next = list;
//     }


//     rotateLinkedList(list, rotation) {

//     }

// }



// const list = new LinkedList();
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// list.rotateLinkedList(list, 10)
// list.printList(5)




class Node {
    constructor(data, next = null, random = null) {
        this.data = data;
        this.next = next;
        this.random = random;
    }
}

function cloneLinkedList(head) {

    let curr = head
    while (curr) {
        let copyNode = new Node(curr.data, curr.next);
        curr.next = copyNode;
        curr = copyNode.next;
    }

    curr = head;
    while (curr) {
        curr.next.random = curr.random;
        curr = curr.next.next
    }

    let clonedLinkedList = head.next
    let dummyClonedLinkedList = clonedLinkedList;
    curr = head;
    while (curr) {
        curr.next = curr.next.next;
        dummyClonedLinkedList.next = dummyClonedLinkedList.next ? dummyClonedLinkedList.next.next : null;
        curr = curr.next;
        dummyClonedLinkedList = dummyClonedLinkedList.next
    }
    return clonedLinkedList
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
