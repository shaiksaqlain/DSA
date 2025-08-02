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
    findIntersectionPointV1(list1, list2) {
        list1 = list1.head;
        list2 = list2.head
        let dummy1 = list1;
        let dummy2 = list2;
        let i = 0, j = 0;
        while (dummy1.next) {
            i++
            dummy1 = dummy1.next
        }
        while (dummy2.next) {
            j++
            dummy2 = dummy2.next
        }

        let differance = Math.abs(i - j);

        if (i > j) {
            while (differance) {
                list1 = list1.next
                differance--
            }
        } else {
            while (differance) {
                list2 = list2.next
                differance--
            }
        }
        while (list1 && list2) {
            if (list1 == list2) {
                console.log("found", list1.data);
                return;
            }
            list1 = list1.next;
            list2 = list2.next
        }
    }
    findIntersectionPointV2(list1, list2) {

        list1 = list1.head;
        list2 = list2.head;
        let dummy1 = list1;
        let dummy2 = list2;

        while (dummy1 || dummy2) {
            if (dummy1 == dummy2) {
                console.log('found', dummy1);
                return;
            }
            if (!dummy1.next) {
                dummy1 = list2
            } else {
                dummy1 = dummy1.next
            }
            if (!dummy2.next) {
                dummy2 = list1
            } else {
                dummy2 = dummy2.next
            }
        }
    }

    findCycle(list1) {
        let slow = list1;
        let fast = list1;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                console.log("Has Cycle");
            }
        }
        return "Don't have Cycle";
    }

    isPalindrome(list) {
        list = this.head;

        let slow = list;
        let fast = list;

        // Find Middle node
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        // Reverse from middle+1 to lastnode
        slow = slow.next;

        let previous = null;
        let current = slow;
        let next = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current
            current = next;
        }

        slow = previous
        let dummy = list;
        while (slow.next) {
            if (dummy.data != slow.data) {
                console.log("Not palindrome");
                return
            }
            dummy = dummy.next
            slow = slow.next
        }
        console.log("Palindrome");
    }

}


// const list1 = new LinkedList();
// list1.append(1)
// list1.append(3)
// list1.append(1)
// const list2 = new LinkedList();
// list2.append(3)
// list2.append(2)
// let shared = new Node(2);
// shared.next = new Node(1)
// shared.next = new Node(2)

// let last1 = list1.head;
// while (last1.next) last1 = last1.next;
// last1.next = shared;

// let last2 = list2.head;
// while (last2.next) last2 = last2.next;
// last2.next = shared;

// // list1.findIntersectionPointV1(list1, list2)
// list1.findIntersectionPointV2(list1, list2)


// const list1 = new LinkedList();
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(3)
// list1.append(2)
// list1.append(1)
// list1.isPalindrome(list1)


