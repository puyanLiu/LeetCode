function findNearestNumber(num) {
    var array = [];
    var sNum = num.toString();
    var len = sNum.length;
    for (var i = 0; i < len; i++) {
        array.push(sNum.charAt(i));
    }
    // 确定逆序区域
    // 逆序区域边界索引
    var reversedOrderIndex = len - 1;
    // 逆序区域的最大值
    var reveredOrderMaxIndex = len - 1;
    for (var i = len - 1; i > 0; i--) {
        if (array[i] > reveredOrderMaxIndex) {
            reveredOrderMaxIndex = i;
        }
        if (array[i - 1] < array[i]) {
            reversedOrderIndex = i - 1;
            reversedOrderMinIndex = array[i - 1];
            break;
        }
    }
    console.log('------------------> 逆序区域边界', reversedOrderIndex, "最大值索引", reveredOrderMaxIndex);

    // 逆序区域 大于 索引边界的 最小值
    var reversedOrderMinIndex = reveredOrderMaxIndex;
    for (var i = len - 1; i > reversedOrderIndex; i--) {
        if (array[i] < array[reversedOrderMinIndex] && array[i] > array[reversedOrderIndex]) {
            reversedOrderMinIndex = i;
        }
    } 
    console.log('------------------> 逆序区域最小值', reversedOrderMinIndex);

    // 逆序边界值 跟 逆序区域交换位置
    var tmp = array[reversedOrderIndex];
    array[reversedOrderIndex] = array[reversedOrderMinIndex];
    array[reversedOrderMinIndex] = tmp;
    // 逆序边界后的元素顺序排列
    countSort(array, reversedOrderIndex);

    // 数组转换为数字
    return array.join('');
}

// 计数排序
function countSort(array, startIndex) {
    console.log('------------------> 待排序数组', array.toString())
    var newArray = [];
    for (var i = 0; i < 10; i++) {
        newArray.push(0);
    }
    for (var i = startIndex + 1; i < array.length; i++) {
        newArray[array[i]]++;
    }
    var tmpStartIndex = startIndex + 1;
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] != 0) {
            array[tmpStartIndex++] = i;
        }
    }
}


console.log('12345 相邻最大', findNearestNumber(12345));
console.log('12354 相邻最大', findNearestNumber(12354));
console.log('12435 相邻最大', findNearestNumber(12435));
console.log('12386 相邻最大', findNearestNumber(12386));
console.log('23541 相邻最大', findNearestNumber(23541));
console.log('54321 相邻最大', findNearestNumber(54321));
console.log('45321 相邻最大', findNearestNumber(45321));