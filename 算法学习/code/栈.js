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

/************************栈************************/
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
console.log("栈顶出栈" + stack.pop());
console.log("栈顶出栈" + stack.pop());