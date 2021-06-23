class TreeNode {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

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


class BinaryTree {
    // 创建二叉树 以层序遍历结果为例
    createBinaryTree(treeArray, index) {
        if (treeArray.length == 0)
            return null;
        if (index > treeArray.length)
            return null;
        var data = treeArray[index];
        if (data == null)
            return null;
        var node = new TreeNode(data);
        node.leftChild = this.createBinaryTree(treeArray, 2 * index + 1);
        node.rightChild = this.createBinaryTree(treeArray, 2 * index + 2);
        return node;
    }

    // 二叉树层序遍历
    levelOrderTraveral(root, resultArray) {
        var treeNode = root;
        var queue = new Queue();
        queue.enqueue(treeNode);
        while (!queue.isEmpty()) {
            treeNode = queue.dequeue();
            resultArray.push(treeNode.data);
            if (treeNode.leftChild) 
                queue.enqueue(treeNode.leftChild)
            if (treeNode.rightChild)
                queue.enqueue(treeNode.rightChild)
        }
    }

    printStr(resultArray) {
        var str1 = resultArray[0];
        for (var i = 1; i < resultArray.length; i++) {
            str1 += ' ' + resultArray[i];
        }
        console.log(str1);
    }
}


/************************广度遍历队列实现************************/
var binaryTree = new BinaryTree();
// 数组定义的二叉树 此处以层序遍历结果为例，null代表左孩子或右孩子为空的情况
let treeArray = [1, 3, 5, 8, 9, 6, 4, 12, null, 7, null, 13, 15];
var tree =binaryTree.createBinaryTree(treeArray, 0);

console.log('二叉树层序遍历');
var resultArray1 = [];
binaryTree.levelOrderTraveral(tree, resultArray1);
binaryTree.printStr(resultArray1);