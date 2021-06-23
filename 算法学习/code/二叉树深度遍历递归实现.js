class TreeNode {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
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
    preOrderTraveral(treeNode, resultArray) {
        if (treeNode == null)
            return;
        resultArray.push(treeNode.data);
        this.preOrderTraveral(treeNode.leftChild, resultArray);
        this.preOrderTraveral(treeNode.rightChild, resultArray);
    }

    // 二叉树中序遍历
    inOrderTraveral(treeNode, resultArray) {
        if (treeNode == null)
            return;
        this.inOrderTraveral(treeNode.leftChild, resultArray);
        resultArray.push(treeNode.data);
        this.inOrderTraveral(treeNode.rightChild, resultArray);
    }

    // 二叉树后序遍历
    postOrderTraveral(treeNode, resultArray) {
        if (treeNode == null)
            return;
        this.postOrderTraveral(treeNode.leftChild, resultArray);
        this.postOrderTraveral(treeNode.rightChild, resultArray);
        resultArray.push(treeNode.data);
    }

    printStr(resultArray) {
        var str1 = resultArray[0];
        for (var i = 1; i < resultArray.length; i++) {
            str1 += ' ' + resultArray[i];
        }
        console.log(str1);
    }
}


/************************深度遍历递归实现************************/
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
