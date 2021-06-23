// 优先队列
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // 获取父节点索引
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 获取左节点索引
    leftChildIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }

    // 获取右节点索引
    rightChildIndex(parentIndex) {
        return parentIndex * 2 + 2;
    }

    // 上浮调整
    upAdjust() {
        let compareIndex = this.items.length - 1;
        while (compareIndex > 0) {
            // 父节点索引
            let parentIndex = this.parentIndex(compareIndex);
            // 跟父节点对比，大于父节点，就交换位置
            if (this.items[compareIndex] > this.items[parentIndex]) {
                let tmp = this.items[parentIndex];
                this.items[parentIndex] = this.items[compareIndex];
                this.items[compareIndex] = tmp;
            }
            compareIndex = parentIndex;
        }
    }

    // 下沉调整
    downAdjust(downIndex) {
        let compareIndex = downIndex;
        while (compareIndex < this.items.length - 1) {
            // 左节点
            let leftChildIndex = this.leftChildIndex(compareIndex);
            // 右节点
            let rightChildIndex = this.rightChildIndex(compareIndex);
            // 如果左右字数相同，调整左子树
            let maxIndex = this.items[leftChildIndex] >= this.items[rightChildIndex] ? leftChildIndex : rightChildIndex;
            // 跟左、右节点中最大值比较，如果大于孩子节点，就交换位置
            if (this.items[compareIndex] < this.items[maxIndex]) {
                let tmp = this.items[maxIndex];
                this.items[maxIndex] = this.items[compareIndex];
                this.items[compareIndex] = tmp;
            }
            compareIndex = maxIndex;
        }
    }

    // 构建堆
    buildHeap() {
        // 从最后一个非叶子节点开始下沉 最后一个节点的父节点
        let compareIndex = this.parentIndex(this.items.length - 1);
        for (var i = compareIndex; i >= 0; i--) {
            // 下沉
            this.downAdjust(i);
        }
    }

    // 入队
    enqueue(data) {
        this.items.push(data);
        this.upAdjust();
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            console.log('队列为空了');
            return null;
        }
        let deleteData = this.items[0];
        if (this.length() == 1) {
            this.clear();
        } else {
            this.items[0] = this.items.pop();
            this.downAdjust(0);
        }
        return deleteData;
    }

    // 队头元素
    head() {
        return this.items[0];
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

/************************优先队列************************/
var queue = new PriorityQueue();
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(12);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(17);
queue.enqueue(7);
console.log("队头元素：" + queue.head());
console.log("出队：" + queue.dequeue());
queue.print();