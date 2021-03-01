class LinkedList {
    constructor(headValue, tailValue = null) {
        this.head = new Node(headValue);
        this.tail = new Node(tailValue);

        if (!tailValue) {
            this.tail = this.head;
        }
    }

    push(value) {
        const node = new Node(value);

        this.tail.next = node;
        this.tail = node;
    }

    pop() {
        let node = this.head;

        while (node.next !== this.tail) {
            node = node.next;
        }

        this.tail = node;
        this.tail.next = null;
    }

    unshift(value) {
        const head = this.head;
        const node = new Node(value);

        this.head = node;
        this.head.next = head;
    }

    shift() {
        const node = this.head.next;

        this.head = node;
    }

    getNodeAtIndex(index) {
        let node = this.head;

        for (let i = 0; i < index; i++) {
            node = node.next;

            if (!node) break;
        }

        return node;
    }

    insertAtIndex(index, value) {
        const nodeAtPrevIndex = this.getNodeAtIndex(index - 1);
        const nodeAtIndex = this.getNodeAtIndex(index);

        if (!nodeAtPrevIndex) {
            return;
        } else if (nodeAtPrevIndex === this.tail) {
            this.push(value);
            return;
        } else {
            const node = new Node(value);

            nodeAtPrevIndex.next = node;
            node.next = nodeAtIndex;
        }
    }

    deleteAtIndex(index) {
        const nodeAtPrevIndex = this.getNodeAtIndex(index - 1);
        const nodeAtNextIndex = nodeAtPrevIndex.next.next;

        nodeAtPrevIndex.next = nodeAtNextIndex;
    }

    toArray() {
        const array = [];
        let node = this.head;

        while (node) {
            array.push(node.value);

            node = node.next;
        }

        return array;
    }

    get reversed() {
        const reversedList = new LinkedList(this.tail.value, this.head.value);
        let node = this.head;

        while (node !== this.tail) {
            reversedList.insertAtIndex(1, node.value);
            node = node.next;
        }

        return reversedList;
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const linkedList = new LinkedList('neven');