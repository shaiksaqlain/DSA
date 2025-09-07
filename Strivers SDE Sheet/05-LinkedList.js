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

    prepend(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
            return;
        }
        newNode.next = this.head
        this.head = newNode
    }

    insertAt(index, data) {
        if (index == 0) {
            this.prepend(data)
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;
        while (current.next && count < index) {
            previous = current
            current = current.next;
            count++
        }
        if (previous) {
            previous.next = newNode;
            newNode.next = current;
        }
    }

    delete(data) {
        if (!this.head) {
            console.log("No Data! Empty");
            return;
        }
        if (this.head.data == data) {
            this.head = this.head.next
            return;
        }
        let current = this.head;
        while (current.next && current.next.data != data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        } else {
            console.log("data not found");
        }
    }

    search(data) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.data == data) {
                console.log(`Data ${data} found at ${index} `);
            }
            current = current.next
            index++
        }
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


    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = previous
            previous = current
            current = next
        }
        this.head = previous
    }

    recursiveReverse(head) {
        if (head == null || head.next == null) {
            return head;
        }
        const newHead = this.recursiveReverse(head.next);
        const front = head.next;
        front.next = head;
        head.next = null
        return newHead
    }

    reverseLinkedListRecursively() {
        this.head = this.recursiveReverse(this.head);
    }


    middleNodeList() {
        let singleJump = this.head;
        let doubleJump = this.head;
        while (doubleJump !== null && doubleJump.next !== null) {
            singleJump = singleJump.next;
            doubleJump = doubleJump.next.next;
        }
        console.log(singleJump.data);
    }

    mergeTwoSortedLinkedList(list1, list2) {
        let i = list1.head
        let j = list2.head
        let result = new Node(0);
        let dummy = result;

        while (i && j) {
            if (i.data < j.data) {
                dummy.next = new Node(i.data)
                i = i.next
            } else {
                dummy.next = new Node(j.data)
                j = j.next
            }
            dummy = dummy.next
        }
        while (i) {
            dummy.next = new Node(i.data)
            i = i.next
            dummy = dummy.next
        }
        while (j) {
            dummy.next = new Node(j.data)
            j = j.next
            dummy = dummy.next
        }
        const resultList = []
        while (result.next) {
            resultList.push(result.next.data)
            result = result.next
        }
        console.log(resultList.join('->'));
    }


    removeNthNode(n) {
        if (!this.head) {
            console.log("Not Possible!");
            return
        }
        let i = this.head;
        let j = this.head
        let count = 0
        while (i && count < n) {
            i = i.next;
            count++
        }
        while (i.next) {
            i = i.next;
            j = j.next;
        }
        j.next = j.next.next
    }

    addTwoLinkedList(list1, list2) {
        let a = list1.head
        let b = list2.head
        let result = new Node(null);
        let dummy = result;
        let carry = 0;

        while (a || b || carry) {
            const sum = a.data + b.data + carry;
            carry = Math.floor(sum / 10);
            const tempResult = sum % 10;
            dummy.next = new Node(tempResult);
            a = a.next
            b = b.next
            dummy = dummy.next
        }
        result = result.next;
        const list = []
        while (result) {
            list.push(result.data);
            result = result.next;
        }
        console.log(list.join('->'));
    }
}

// const list = new LinkedList();
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// console.log("All data after append");
// list.printList()
// list.prepend(50)
// console.log("All data after Prepend");
// list.printList()
// list.insertAt(3, 60)
// console.log("All data after insert at");
// list.printList()
// list.delete(40)
// console.log("All data after detele 40");
// list.printList()
// list.search(40)
// console.log("Search 60 in linkedlist...");
// list.printList()
// console.log("Itrative Reverse of linkedlist");
// list.reverse()
// list.printList()
// console.log("Recursive Reverse of linkedlist");
// list.reverseLinkedListRecursively()
// list.printList()
// console.log("Middle Node of the linked List");
// list.middleNodeList()

// const list1 = new LinkedList();
// list1.append(10)
// list1.append(20)
// list1.append(30)
// list1.append(40)
// const list2 = new LinkedList();
// list2.append(11)
// list2.append(21)
// list2.append(29)
// list2.append(44)
// list1.mergeTwoSortedLinkedList(list1, list2)

// const list = new LinkedList();
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.append(60)
// list.removeNthNode(3)
// list.printList()


const list1 = new LinkedList();
list1.append(9)
list1.append(2)
list1.append(3)
list1.append(4)
const list2 = new LinkedList();
list2.append(3)
list2.append(2)
list2.append(2)
list2.append(2)
list1.addTwoLinkedList(list1, list2)



