function cocktailSort(array) { 
    let arrayLength = array.length;

    for (var i = 0; i < arrayLength - 1; i++) {
        // 有序标记 如果数列已经有序，那么后边几轮排序就不必执行了
        var isSorted = true;

        if (i % 2 == 0) {
            // 从左到右
            for (var j = i / 2; j < arrayLength - 1 -  i / 2; j++) {
                console.log('从左到右');
                if (array[j] > array[j + 1]) {
                    var tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;

                    isSorted = false;
                }
            }
        } else {
            // 从右到左
            for (var j = arrayLength - 2 - (i - 1) / 2; j > (i - 1) / 2; j--) {
                console.log('从右到左');
                if (array[j] < array[j - 1]) {
                    var tmp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = tmp;

                    isSorted = false;
                }
            }
        }

        if (isSorted) {
            break;
        }
    }
}


/************************鸡尾酒排序************************/
// var array = [3, 6, 1, 5, 9, 0, 4, 8];
var array = [2, 3, 4, 6, 1, 0, 9, 16, 18];
cocktailSort(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}