//########################################################## Implement LRU Cache ###############################################

class Node {
    constructor(key, data) {
        this.key = key;
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(limit) {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.hashMap = new Map();
        this.head.next = this.tail;
        this.tail.prev = this.head
        this.capacity = limit;
    }
    addNodeToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    removeNode(node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
    put(key, data) {
        if (this.hashMap.has(key)) {
            const node = this.hashMap.get(key);
            node.data = data;
            this.removeNode(node)
            this.addNodeToFront(node)
        } else {
            if (this.capacity === this.hashMap.size) {
                const node = this.tail.prev
                this.removeNode(node);
                this.hashMap.delete(node.key);
            }
            const newNode = new Node(key, data);
            this.addNodeToFront(newNode);
            this.hashMap.set(key, newNode);

        }
    }
    get(key) {
        if (!this.hashMap.has(key)) return -1
        const node = this.hashMap.get(key)
        this.removeNode(node);
        this.addNodeToFront(node);
        return node.data;
    }

}

// const cache = new LRUCache(3);
// cache.put(1, "A");
// cache.put(2, "B");
// cache.put(3, "C");
// console.log(cache.get(2)); // "B" (2 becomes most recent)
// cache.put(4, "D");         // Removes 1 (least recently used)
// console.log(cache.get(1)); // -1 (1 was removed)
// console.log(cache.get(3)); // "C"
// console.log(cache.get(4)); // "D"


//########################################################## Largest rectangle in a histogram ###############################################
function largestRectangleAreaV1(heights) {
    const rightSmaller = [];
    const leftSmaller = [];
    let stack = [];
    let result = 0;
    const n = heights.length;

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        rightSmaller[i] = !stack.length ? n : stack[stack.length - 1]
        stack.push(i)
    }
    stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        leftSmaller[i] = !stack.length ? -1 : stack[stack.length - 1]
        stack.push(i)
    }

    for (let i = 0; i < n; i++) {
        const width = rightSmaller[i] - leftSmaller[i] - 1;
        const area = heights[i] * width;
        result = Math.max(result, area);
    }
    return result
}

function largestRectangleAreaV2(heights) {
    let stack = [];
    let result = 0;

    for (let i = 0; i <= heights.length; i++) {
        const currentHeight = (i == heights.length) ? 0 : heights[i];
        while (stack.length && currentHeight <= heights[stack[stack.length - 1]]) {
            const topIndex = stack.pop();
            const height = heights[topIndex];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            result = Math.max(result, height * width)
        }
        stack.push(i)
    }
    return result
}

// const heights = [2, 1, 5, 6, 2, 3];
// console.log(largestRectangleAreaV2(heights));

//########################################################## Sliding Window Maximum ###############################################

function slidingWindowMaximum(array, k) {
    const deque = [];
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (deque.length && deque[0] === i - k) {
            deque.shift();
        }
        while (deque.length && array[deque[deque.length - 1]] < array[i]) {
            deque.pop();
        }
        deque.push(i);
        if (i >= k - 1) {
            result.push(array[deque[0]]);
        }
        console.log(deque);

    }
    return result;
}


const array = [4, 0, -1, 3, 5, 3, 6, 8], k = 3;
console.log(slidingWindowMaximum(array, k));