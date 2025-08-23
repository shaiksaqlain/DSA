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
