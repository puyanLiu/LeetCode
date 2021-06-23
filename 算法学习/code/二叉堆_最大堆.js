
class BinaryHeap {

    constructor(data) {
        this.data = data;
        this.buildHeap();
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
        let compareIndex = this.data.length - 1;
        while (compareIndex > 0) {
            // 父节点索引
            let parentIndex = this.parentIndex(compareIndex);
            // 跟父节点对比，大于父节点，就交换位置
            if (this.data[compareIndex] > this.data[parentIndex]) {
                let tmp = this.data[parentIndex];
                this.data[parentIndex] = this.data[compareIndex];
                this.data[compareIndex] = tmp;
            }
            compareIndex = parentIndex;
        }
    }

    // 下沉调整
    downAdjust(downIndex) {
        let compareIndex = downIndex;
        while (compareIndex < this.data.length - 1) {
            // 左节点
            let leftChildIndex = this.leftChildIndex(compareIndex);
            // 右节点
            let rightChildIndex = this.rightChildIndex(compareIndex);
            // 如果左右字数相同，调整左子树
            let maxIndex = this.data[leftChildIndex] >= this.data[rightChildIndex] ? leftChildIndex : rightChildIndex;
            // 跟左、右节点中最大值比较，如果大于孩子节点，就交换位置
            if (this.data[compareIndex] < this.data[maxIndex]) {
                let tmp = this.data[maxIndex];
                this.data[maxIndex] = this.data[compareIndex];
                this.data[compareIndex] = tmp;
            }
            compareIndex = maxIndex;
        }
    }
    
    // 插入节点 插入到数组最后
    insert(treeNode) {
        this.data.push(treeNode);
        this.upAdjust();
    }

    // 删除节点 删除数组第一个元素
    delete() {
        let lastNode = this.data.pop();
        this.data[0] = lastNode;
        this.downAdjust(0);
    }

    // 构建堆
    buildHeap() {
        // 从最后一个非叶子节点开始下沉 最后一个节点的父节点
        let compareIndex = this.parentIndex(this.data.length - 1);
        for (var i = compareIndex; i >= 0; i--) {
            // 下沉
            this.downAdjust(i);
        }
    }

}


/************************最大堆************************/
// let treeArray = [1, 3, 2, 6, 5, 7, 8, 9, 10];
// let treeArray = [15, 2, 8, 12, 5, 2, 3, 4, 7];
let treeArray = [15, 6, 8, 18, 5, 2, 45, 5, 7];
var binaryTree = new BinaryHeap(treeArray);
binaryTree.insert(60);

// binaryTree.delete();

console.log(binaryTree.data);