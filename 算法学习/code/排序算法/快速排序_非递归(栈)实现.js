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

// 分治 单边循环法
function partition(array, startIndex, endIndex) {
    if (array.length < 1)
        return;
    // 基准元素
    var pivot = array[startIndex];
    // markIndex指针代表小于基准元素的区域边界
    var markIndex = startIndex;

    for (var i = startIndex; i <= endIndex; i++) {
        if (pivot > array[i]) {
            markIndex++;
            let tmp = array[markIndex];
            array[markIndex] = array[i];
            array[i] = tmp;
        }
    }

    // markIndex指针位置的元素跟基准元素进行交换
    array[startIndex] = array[markIndex];
    array[markIndex] = pivot;

    // 返回基准元素所在位置下标
    return markIndex;
}

function qucikSort(array) { 
    
    var stack = new Stack();
    // 栈中每个元素存储开始索引和结束索引
    stack.push({startIndex: 0, endIndex: array.length - 1});

    while(!stack.isEmpty()) {
        // 取出栈顶元素
        let data = stack.pop();
        let startIndex = data.startIndex;
        let endIndex = data.endIndex;

        // 获取基准元素索引
        let pivotIndex = partition(array, startIndex, endIndex);

        // 按照基准元素的位置分成左右两部分
        if (pivotIndex - startIndex > 0) {
            // 左侧位置
            stack.push({startIndex: startIndex, endIndex: pivotIndex - 1});
        }

        if (endIndex - pivotIndex > 0) {
            // 右侧位置
            stack.push({startIndex: pivotIndex + 1, endIndex: endIndex});
        }

    }
}

/************************快速排序************************/
var array = [3, 6, 1, 5, 9, 0, 4, 8];
// var array = [2, 3, 4, 6, 1, 0, 9, 16, 18];
// 从小到大排序
qucikSort(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
