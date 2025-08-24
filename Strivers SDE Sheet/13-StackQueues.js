//##########################################################  Stack implemention ###############################################

class Stack {
    constructor() {
        this.stack = [];
        this.size = 10;
        this.top = -1
    }

    push(data) {
        if ((this.top + 1) > this.size) {
            console.log('Stack overfolw!');
            return;
        }
        this.stack[++this.top] = data;
    }

    pop() {
        if (this.top < 0) {
            console.log('Stack is empty!');
            return;
        }
        const temp = this.stack[this.top]
        this.stack[this.top] = null;
        this.top--
        return temp
    }

    peek() {
        return this.top == -1 ? null : this.stack[this.top];
    }
    printStack() {
        console.log(this.stack.slice(0, this.top));
    }
}

// const stack = new Stack();

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.push(8)
// stack.push(9)
// stack.push(10)
// stack.push(11)
// stack.printStack()

// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.printStack()
// console.log(stack.peek());

//##########################################################  Queue implemention ###############################################

class Queue {
    constructor() {
        this.queue = [];
        this.start = -1;
        this.end = -1;
        this.size = 10;
    }

    enQueue(data) {
        if (((this.end + 1) % this.size) == this.start) {
            return console.log("Queue overflow!");
        }
        if (this.start == -1) {
            this.start = 0
        }
        this.end = (this.end + 1) % this.size
        this.queue[this.end] = data;
    }
    deQueue() {
        if (((this.start + 1) % this.end == 0)) {
            return console.log("Queue Empty!");
        }
        const removed = this.queue[this.start];
        this.queue[this.start] = null;

        if (this.start == this.end) {
            this.start = this.end = -1;
        } else {
            this.start = ((this.start + 1) % this.size)
        }

        return removed;
    }
    top() {
        return this.start == -1 ? null : console.log(this.queue[this.start]);
    }

    printQueue() {
        if (this.start == -1) return console.log("Queue Empty!");

        let i = this.start;
        const result = [];
        while (true) {
            result.push(this.queue[i])
            if (i == this.end) break;
            i = ((i + 1) % this.size)
        }
        console.log(result);
    }

}

// const myQueue = new Queue();
// myQueue.enQueue(1)
// myQueue.enQueue(2)
// myQueue.enQueue(3)
// myQueue.enQueue(4)
// myQueue.enQueue(5)
// myQueue.enQueue(6)
// myQueue.enQueue(7)
// myQueue.enQueue(8)
// myQueue.enQueue(9)
// myQueue.enQueue(10)
// myQueue.enQueue(11)
// myQueue.enQueue(11)
// myQueue.enQueue(11)
// myQueue.enQueue(11)

// myQueue.printQueue()
// myQueue.deQueue()
// myQueue.deQueue()
// myQueue.deQueue()
// myQueue.enQueue(1)
// myQueue.enQueue(2)
// myQueue.enQueue(3)
// myQueue.printQueue()
// myQueue.top();

//##########################################################  Stack implemention using Linkedlist ###############################################

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLL {
    constructor() {
        this.head = null;
        this.count = 0;
        this.size = 3;
    }

    push(data) {

        if (this.count >= this.size)
            return console.log('Stack overflow!');
        const newNode = new Node(data)
        const head = this.head;
        this.head = newNode;
        newNode.next = head;
        this.count++
    }

    pop() {
        if (!this.head)
            return console.log('Stack is empty');
        this.head = this.head.next;
    }

    top() {
        if (!this.head)
            return console.log('Stack is empty');
        console.log(this.head.data);

    }

    printStack() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data)
            current = current.next
        }
        console.log(result);
    }
}

// const mystack = new StackLL();
// mystack.push(2)
// mystack.push(3)
// mystack.push(3)
// mystack.printStack();
// mystack.pop()
// mystack.printStack();
// mystack.top()


//##########################################################  Queue implemention using Linkedlist ###############################################

class QueueLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
        this.size = 3;
    }

    enQueue(data) {
        if (this.count >= this.size)
            return console.log('Stack overflow!');

        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
        return console.log('Added', data);
    }

    deQueue() {
        if (!this.head)
            return console.log('Stack is empty');
        const removed = this.head.data;
        this.head = this.head.next;
        this.count--
        return console.log("Removed", removed);
    }

    top() {
        if (!this.head)
            return console.log('Stack is empty');
        return console.log(this.head.data);
    }

    printQueue() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data)
            current = current.next
        }
        return console.log({ result });
    }
}

// const mystack = new QueueLL();
// mystack.enQueue(2)
// mystack.enQueue(3)
// mystack.enQueue(4)
// mystack.printQueue();
// mystack.deQueue()
// mystack.deQueue()
// mystack.printQueue();
// mystack.top()


//##########################################################  Stack implemention using Queue ###############################################

class StackUsingQueue {

    constructor() {
        this.mainQueue = [];
        this.helperQueue = [];
    }

    push(data) {
        this.helperQueue.push(data);
        while (this.mainQueue.length > 0) {
            this.helperQueue.push(this.mainQueue.shift());
        }
        [this.helperQueue, this.mainQueue] = [this.mainQueue, this.helperQueue]
        console.log('Added element:', data);
    }

    pop() {
        if (this.mainQueue == 0) {
            return console.log('Stack is Empty!');
        }
        console.log('Removed first element:', this.mainQueue[0]);
        return this.mainQueue.shift();
    }

    top() {
        if (this.helperQueue == 0) {
            return console.log('Stack is Empty!');
        }
        return this.helperQueue[0];
    }

    print() {
        console.log(this.mainQueue);
    }

}

// const myStackUsingQueue = new StackUsingQueue();
// myStackUsingQueue.push(1)
// myStackUsingQueue.push(2)
// myStackUsingQueue.push(3)
// myStackUsingQueue.print()
// myStackUsingQueue.pop()
// myStackUsingQueue.pop()
// myStackUsingQueue.pop()
// myStackUsingQueue.print()


//##########################################################  Queue implemention using Stack ###############################################

class QueueUsingStack {
    constructor() {
        this.mainStack = [];
        this.helperStack = [];
    }

    enqueue(data) {
        while (this.mainStack.length) {
            this.helperStack.push(this.mainStack.pop())
        }
        this.mainStack.push(data);
        while (this.helperStack.length) {
            this.mainStack.push(this.helperStack.pop())
        }
        console.log('Added element:', data);
    }

    deQueue() {
        if (!this.mainStack.length) {
            console.log('Empty Stack');
        }
        console.log('Poped element:', this.mainStack.pop());
    }
    print() {
        console.log(this.mainStack);
    }
}

const myQueueUsingStack = new QueueUsingStack();
// myQueueUsingStack.enqueue(1)
// myQueueUsingStack.enqueue(2)
// myQueueUsingStack.enqueue(3)
// myQueueUsingStack.print()
// myQueueUsingStack.deQueue()
// myQueueUsingStack.deQueue()
// myQueueUsingStack.deQueue()

//########################################################## Check for balanced parentheses ###############################################

function balancedParentheses(str) {
    const parentheses = { '}': '{', ']': '[', ')': '(' }
    const stack = [];
    for (char of str) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char)
        } else if (char === '}' || char === ']' || char === ')') {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (parentheses[char] != top) return false
        }
    }
    return stack.length === 0;
}
// const s = "()[]{}";
// // const s = "()[}]{}";
// console.log(balancedParentheses(s));

//########################################################## Next Greater Element Using Stack ###############################################

function nextGreaterElement(array) {
    const stack = []
    const result = []
    for (let i = array.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= array[i]) {
            stack.pop()
        }

        if (stack.length == 0) {
            result[i] = -1
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(array[i])
    }
    return result
}

// const array = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9];
// console.log(nextGreaterElement(array));

//########################################################## sort Stack ###############################################


function sortStack(stack) {
    const tempStack = [];
    while (stack.length > 0) {
        const temp = stack.pop()
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    while (tempStack.length > 0) {
        stack.push(tempStack.pop())
    }
    return stack
}

// const stack = [34, 3, 31, 98, 92, 23];
// console.log(sortStack(stack));

//########################################################## Next Smaller Element Using Stack ###############################################

function nextSmallerElement(array) {
    const stack = [];
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {

        while (stack.length > 0 && array[i] <= stack[stack.length - 1]) {
            stack.pop()
        }
        if (stack.length == 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(array[i])
    }
    return result
}

// const array = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9];
// console.log(nextSmallerElement(array));