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

const cache = new LRUCache(3);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
console.log(cache.get(2)); // "B" (2 becomes most recent)
cache.put(4, "D");         // Removes 1 (least recently used)
console.log(cache.get(1)); // -1 (1 was removed)
console.log(cache.get(3)); // "C"
console.log(cache.get(4)); // "D"
