class TreeNode {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

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

    // 二叉树前序遍历
    preOrderTraveral(root, resultArray) {
        var treeNode = root;
        var stack = new Stack();
        // tree节点为null 并且 栈列表为空，结束循环
        while(treeNode != null || !stack.isEmpty()) {
            while(treeNode != null) {
                // 入栈
                stack.push(treeNode);
                resultArray.push(treeNode.data);
                treeNode = treeNode.leftChild;
            }
            
            if (!stack.isEmpty()) {
                // 出栈 获得栈顶的右孩子
                treeNode = stack.pop().rightChild;
            }
            
        }
    }

    // 二叉树中序遍历
    inOrderTraveral(root, resultArray) {
       var treeNode = root;
       var stack = new Stack();
       // tree节点为null 并且 栈列表为空，结束循环
       while(treeNode != null || !stack.isEmpty()) {
           while(treeNode != null) {
               stack.push(treeNode);
               treeNode = treeNode.leftChild;
           }

           if (!stack.isEmpty()) {
               treeNode = stack.pop();
               resultArray.push(treeNode.data);
               treeNode = treeNode.rightChild;
           }
       }
    }

    // 二叉树后序遍历
    postOrderTraveral(root, resultArray) {
        var treeNode = root;
        var stack = new Stack();
        // tree节点为null 并且 栈列表为空，结束循环
        while (treeNode != null || !stack.isEmpty()) {
            while (treeNode != null) {
                stack.push(treeNode);
                treeNode = treeNode.leftChild;
                
            }

            if (!stack.isEmpty()) {
                treeNode = stack.pop();
                var treeNodeRightChild = treeNode.rightChild;
                if (treeNode.rightChild != null) {
                    treeNode.rightChild = null;
                    stack.push(treeNode);
                } else {
                    resultArray.push(treeNode.data);
                }
                treeNode = treeNodeRightChild;
            }
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


/************************深度遍历栈实现************************/
var binaryTree = new BinaryTree();
// 数组定义的二叉树 此处以层序遍历结果为例，null代表左孩子或右孩子为空的情况
let treeArray = [1, 3, 5, 8, 9, 6, 4, 12, null, 7, null, 13, 15];
var tree =binaryTree.createBinaryTree(treeArray, 0);

console.log('二叉树前序遍历');
var resultArray1 = [];
binaryTree.preOrderTraveral(tree, resultArray1);
binaryTree.printStr(resultArray1);

console.log('二叉树中序遍历');
var resultArray2 = [];
binaryTree.inOrderTraveral(tree, resultArray2);
binaryTree.printStr(resultArray2);

console.log('二叉树后序遍历');
var resultArray3 = [];
binaryTree.postOrderTraveral(tree, resultArray3);
binaryTree.printStr(resultArray3);