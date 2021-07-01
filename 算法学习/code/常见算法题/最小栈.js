class Stack {
    constructor() {
        this.items = [];
        // 存储最小元素
        this.items_min = [];
    }

    // 入栈
    push(data) {
        if (this.items.length < 1) {
            this.items.push(data);
            this.items_min.push(data);
            return;
        }
        var items_min_length = this.items_min.length;
        var min = this.items_min[items_min_length - 1];
        if (data <= min) {
            this.items_min.push(data);
        }
        this.items.push(data);
    }

    // 出栈
    pop() {
        var last = this.items.pop();
        var items_min_length = this.items_min.length;
        var min = this.items_min[items_min_length - 1];
        if (last == min) {
            this.items_min.pop();
        }

        return last;
    }

    // 最小元素
    getMin() {
        var items_min_length = this.items_min.length;
        if (items_min_length < 1)
            return null;
        return this.items_min[items_min_length - 1];
    }

}

/************************最小栈************************/
var stack = new Stack();
stack.push(4);
stack.push(6);
stack.push(9);
stack.push(3);
stack.push(7);
stack.push(4);
stack.push(3);
stack.push(8);

console.log('最小元素', stack.getMin());
console.log('出栈', stack.pop());
console.log('出栈', stack.pop());
console.log('最小元素', stack.getMin());
console.log('出栈', stack.pop());
console.log('出栈', stack.pop());
console.log('出栈', stack.pop());
console.log('最小元素', stack.getMin());