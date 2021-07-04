class Stack {
    constructor() {
        this.items = [];
    }

    // 入栈
    push(data) {
        this.items.push(data);
    }

    // 出栈
    pop() {
        return this.items.pop();
    }

    // 判断栈是否为空
    isEmpty() {
        return this.items.length == 0;
    }

    // 返回栈的大小
    length() {
        return this.items.length;
    }

    // 清空栈
    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items);
        console.log("栈的大小：" + this.length());
    }
}


class StactkImiateQueue {
    constructor() {
        // 负责入队
        this.stack_A = new Stack();
        // 负责出队
        this.stack_B = new Stack();
    }

    // 入队
    enqueue(data) {
        this.stack_A.push(data);
    }

    // 出队
    dequeue() {
        if (this.stack_B.isEmpty()) {
            while(!this.stack_A.isEmpty()) {
                this.stack_B.push(this.stack_A.pop());
            }
        }
        return this.stack_B.pop();
    }
}


var queue = new StactkImiateQueue();
queue.enqueue(3);
queue.enqueue(8);
queue.enqueue(4);
queue.enqueue(7);
queue.enqueue(9);
console.log('出队', queue.dequeue());
console.log('出队', queue.dequeue());
console.log('出队', queue.dequeue());
console.log('出队', queue.dequeue());
console.log('出队', queue.dequeue());
console.log('出队', queue.dequeue());
queue.enqueue(0);
queue.enqueue(2);
console.log('出队', queue.dequeue());
console.log('出队', queue.dequeue());