
function countSort(array) {
    let arrayLength = array.length;
    if (arrayLength < 1)
        return;
    var min = array[0];
    var max = array[0];
    for (var i = 1; i < arrayLength; i++) {
        if (min > array[i]) {
            min = array[i];
        }

        if (max < array[i]) {
            max = array[i];
        }
    }
    // 确定数组的长度
    let diff = max - min + 1;
    // 初始化一个都为0的数组列表
    var countArray = [];
    for (var i = 0; i < diff; i++) {
        countArray.push(0);
    }
    // 数组计数
    for (var i = 0; i < arrayLength; i++) {
        // 根据数列偏移量来计算
        countArray[array[i] - min]++;
    }

    // 对count数组进行变形
    for (var i = 0; i < countArray.length - 1; i++) {
        countArray[i + 1] = countArray[i + 1] + countArray[i];
    }

    // 初始化一个都为0的数组列表, 数组长度和array数组长度一致
    var resultArray = [];
    for (var i = 0; i < arrayLength; i++) {
        resultArray.push(0);
    }

    // 不稳定排序 正序
    // for (var i = 0; i < arrayLength; i++) {
    //     // 在count数组中的索引位置
    //     let countIndex = array[i] - min;
    //     // 代表在result数组中的索引位置
    //     let resultIndex = countArray[countIndex] - 1;
    //     // 给result数组赋值
    //     resultArray[resultIndex] = array[i];
    //     // count数组元素自减1
    //     countArray[countIndex]--;
    // }

    // 稳定排序 倒序方式
    for (var i = arrayLength - 1; i >=0; i--) {
        // 在count数组中的索引位置
        let countIndex = array[i] - min;
        // 代表在result数组中的索引位置
        let resultIndex = countArray[countIndex] - 1;
        // 给result数组赋值
        resultArray[resultIndex] = array[i];
        // count数组元素自减1
        countArray[countIndex]--;
    }
    return resultArray;
}

/************************计数排序************************/
var array = [9, 5, 7, 4, 7, 9, 7, 6, 2, 1, 7, 8, 7, 10];
// 从小到大排序
var resultArray = countSort(array);
console.log(resultArray)
