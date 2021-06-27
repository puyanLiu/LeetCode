// 获取父节点索引
function parentIndex(index) {
    return Math.floor((index - 1) / 2);
}

// 获取左节点索引
function leftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
}

// 获取右节点索引
function rightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
}

// 下沉调整
function downAdjust(array, downIndex, heapEnableLength) {
    let compareIndex = downIndex;
    // 数组的一半即可
    while (compareIndex < (heapEnableLength - 1) / 2) {
        // 左节点
        let leftIndex = leftChildIndex(compareIndex);
        // 右节点
        let rightIndex = rightChildIndex(compareIndex);
        // 如果左右子树相同，调整左子树
        let maxIndex = array[leftIndex] >= array[rightIndex] ? leftIndex : rightIndex;
        // 跟左、右节点中最大值比较，如果大于孩子节点，就交换位置
        if (array[compareIndex] < array[maxIndex] && maxIndex < heapEnableLength) {
            let tmp = array[maxIndex];
            array[maxIndex] = array[compareIndex];
            array[compareIndex] = tmp;
        }
        compareIndex = maxIndex;
    }
}

// 构建堆
function buildHeap(array) {
    // 从最后一个非叶子节点开始下沉 最后一个节点的父节点
    let compareIndex = parentIndex(array.length - 1);
    for (var i = compareIndex; i >= 0; i--) {
        // 下沉
        downAdjust(array, i, array.length);
    }
}

function heapSort(array) {
    // 构建堆
    buildHeap(array);

    // 堆的有效大小
    let heapEnableLength = array.length;
    while(heapEnableLength > 1) {
        // 堆的第一个元素跟 堆的有效大小的最后元素交换
        let lastNode = array[heapEnableLength - 1];
        array[heapEnableLength - 1] = array[0];
        array[0] = lastNode;

        heapEnableLength--;
        // 执行下沉操作
        downAdjust(array, 0, heapEnableLength);
    }

}

/************************堆排序 从小到大************************/
let treeArray = [1, 3, 2, 6, 5, 7, 8, 9, 10];
// let treeArray = [15, 2, 8, 12, 5, 2, 3, 4, 7];
// let treeArray = [15, 6, 8, 18, 5, 2, 45, 5, 7];
heapSort(treeArray);
console.log(treeArray);