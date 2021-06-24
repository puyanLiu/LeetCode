class Queue {
    constructor() {
        this.items = [];
    }

    // 入队
    enqueue(data) {
        this.items.push(data);
    }

    // 出队
    dequeue() {

        return this.items.shift();
    }

    // 队头元素
    head() {
        return this.items[0];
    }

    tail() {
        return this.items[this.length() - 1];
    }

    // 判断队列是否为空
    isEmpty() {
        return this.items.length == 0;
    }

    // 返回队列的大小
    length() {
        return this.items.length;
    }

    // 清空队列
    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items);
        console.log("队列的大小：" + this.length());
    }
}

/************************栈************************/
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("队头元素：" + queue.head());
console.log("队尾元素：" + queue.tail());
console.log("出队：" + queue.dequeue());
queue.print();