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

function qucikSort(array, startIndex, endIndex) { 
    let pivotIndex = partition(array, startIndex, endIndex);
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
qucikSort(array, 0, array.length - 1);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
