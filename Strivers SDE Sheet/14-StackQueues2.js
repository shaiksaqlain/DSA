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


// const array = [4, 0, -1, 3, 5, 3, 6, 8], k = 3;
// console.log(slidingWindowMaximum(array, k));

//########################################################## Min Stack ###############################################

class MinStack {
    constructor() {
        this.stack = [];
        this.min = null;
    }

    push(x) {
        if (this.stack.length == 0) {
            this.stack.push(x)
            this.min = x;
            return
        }
        if (x > this.min) {
            this.stack.push(x);
        } else {
            this.stack.push((2 * x) - this.min)
            this.min = x
        }
    }
    pop() {
        if (this.stack.length === 0) return null;
        const top = this.stack.pop();
        if (top < this.min) {
            const originalMin = this.min
            this.min = (2 * this.min) - top
            return originalMin
        } else {
            return top
        }
    }

    top() {
        const top = this.stack[this.stack.length - 1]
        return top < this.min ? this.min : top;
    }

    getMin() {
        return this.min
    }
}

// const minStack = new MinStack();
// minStack.push(5);
// minStack.push(3);
// minStack.push(7);
// console.log(minStack.getMin()); // 3
// minStack.pop();
// console.log(minStack.getMin()); // 3
// minStack.pop();
// console.log(minStack.getMin()); // 5

//#################################### Rotten Oranges  ###############################################

function rottanOranges(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshOranges = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j])
            } else if (grid[i][j] == 1) {
                freshOranges++
            }
        }
    }
    if (freshOranges === 0) return 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let timeElasped = -1

    while (queue.length > 0) {
        const currentLength = queue.length;
        timeElasped++
        for (let i = 0; i < currentLength; i++) {
            let [currentRow, currentCol] = queue.shift();
            for (let [moveByRow, moveByCol] of directions) {
                const newRow = currentRow + moveByRow;
                const newCol = currentCol + moveByCol;
                if (newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] == 1
                ) {
                    grid[newRow][newCol] = 2
                    freshOranges--;
                    queue.push([newRow, newCol])
                }
            }
        }
    }
    return freshOranges != 0 ? -1 : timeElasped
}


// const grid = [
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1]
// ];

// console.log(rottanOranges(grid));


//#################################### Stock span problem  ###############################################

function stockSpan(stocks) {
    const stack = [];
    const span = [];
    for (let i = 0; i < stocks.length; i++) {
        while (stack.length && stocks[stack[stack.length - 1]] <= stocks[i]) {
            stack.pop()
        }

        span[i] = stack.length ? i - stack[stack.length - 1] : i + 1;

        stack.push(i)
    }
    return span
}

// console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));

//#################################### The Celebrity Problem  ###############################################

function findCelebrity(M) {
    const n = M.length;
    let start = 0, end = n - 1;

    while (start < end) {
        if (M[start][end] == 1) {
            start++
        } else {
            end--
        }
    }
    const candidate = start;

    for (let i = 0; i < n; i++) {
        if (start != i) {
            if (M[candidate][i] == 1 && M[i][candidate] == 0) {
                return -1
            }
        }
    }
    return candidate
}

// const M = [
//     [0, 1, 1],
//     [0, 0, 1],
//     [0, 0, 0]
// ]
// const M = [
//     [0, 1, 0, 1],
//     [1, 0, 1, 0],
//     [0, 0, 0, 1],
//     [1, 1, 0, 0]
// ]
// console.log(findCelebrity(M));


