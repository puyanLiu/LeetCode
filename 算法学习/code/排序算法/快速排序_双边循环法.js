
// 生成[n, m]的随机整数
function randomNum(minNum, maxNum) {
    // Math.random();  //0.0 ~ 1.0 之间的一个伪随机数【包含0不包含1】
    return parseInt(Math.random() * (maxNum + 1 - minNum) + minNum, 10);
}

// 分治 双边循环法
function partition(array, startIndex, endIndex) {

    console.log('-------------------开始位置', startIndex, '结束位置', endIndex)
    var arrayLength = array.length;
    if (arrayLength < 1 || startIndex > endIndex)
        return; 
    // 选定基准元素，简单方案，使用数组的初始索引位置元素
    // var pivot = array[startIndex];

    // 选定基准元素 数组中随机一个元素
    let randomIndex = randomNum(startIndex, endIndex);
    // 基准元素
    var pivot = array[randomIndex];
    var tmp = array[startIndex];
    array[startIndex] = pivot;
    array[randomIndex] = tmp;

    // 左指针，指向数组最左侧元素下标
    var left = startIndex;
    // 右指针，指向数组最右侧元素下标
    var right = endIndex;
    
    while (left != right) {

        // 如果右指针指向元素大于或等于基准元素，向左移动
        while (right > 0 && array[right] >= pivot && right != left) {
            // 向左移动
            right--;
        }

        // 如果左指针指向元素小于或等于基准元素，向右移动
        while(left < arrayLength && array[left] <= pivot && right != left) {
            left++;
        }

        // 交换left和right位置元素
        var tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
    }
    
    // 基准元素和 左右指针重合点交换位置
    if (left === right) {
        array[startIndex] = array[left];
        array[left] = pivot;
        // 返回基准元素的位置
        return left;
    }
}

function qucikSort(array, startIndex, endIndex) { 
    var arrayLength = array.length;
    if (arrayLength < 1 || startIndex >= endIndex)
        return; 
    // 分治法 基准元素索引
    var pivotIndex = partition(array, startIndex , endIndex);
    console.log('基准元素位置', pivotIndex);
    // 基准元素左部分
    if (pivotIndex - startIndex > 1) {
        qucikSort(array, startIndex, pivotIndex - 1);
    }
    // 基准元素右部分
    if (endIndex - pivotIndex > 1) {
        qucikSort(array, pivotIndex + 1, endIndex);
    }
}

/************************快速排序************************/
var array = [3, 6, 1, 5, 9, 0, 4, 8];
// var array = [2, 3, 4, 6, 1, 0, 9, 16, 18];
// 从小到大排序
qucikSort(array, 0 , array.length - 1);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
