function bubblesSort(array) {
    let arrayLength = array.length;

    // 记录最后一次交换的位置
    var lastExchangeIndex = 0;
    // 无序数列的边界，每次比较只需要到这里即可，后面的元素表示肯定是有序的
    var sortBorder = arrayLength - 1;

    // 外循环控制排序轮数
    for (var i = 0; i < arrayLength - 1; i++) {
        // 有序标记 如果数列已经有序，那么后边几轮排序就不必执行了
        var isSorted = true;

        // 内循环实现每一轮的冒泡处理，先进行元素比较，再进行元素交换
        // for (var j = 0; j < arrayLength - 1 - i; j++) {
        // 改造for循环结束语句
        for (var j = 0; j < sortBorder; j++) {
            console.log('排序次数');
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;

                // 有交换，说明不是有序的，标记为false
                isSorted = false;
                // 更新最后一次交换的位置
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;

        if (isSorted) {
            break;
        }
    }
}

/************************冒泡排序************************/
// var array = [3, 6, 1, 5, 9, 0, 4, 8];
var array = [2, 3, 4, 6, 1, 0, 9, 16, 18];
bubblesSort(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}