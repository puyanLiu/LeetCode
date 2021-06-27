
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
    var resultArray = [];
    for (var i = 0; i < countArray.length; i++) {
        for (var j = 0; j < countArray[i]; j++) {
            resultArray.push(i + min);
        }
    }

    return resultArray;
}

/************************计数排序************************/
var array = [9, 5, 7, 4, 7, 9, 7, 6, 2, 1, 7, 8, 7, 10];
// 从小到大排序
var resultArray = countSort(array);
console.log(resultArray)
