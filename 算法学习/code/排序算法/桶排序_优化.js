function bucketSort(array) {
    let arrayLength = array.length;
    if (arrayLength < 1)
        return;
    var min = array[0];
    var max = array[0];
    
    for (var i = 1; i < arrayLength; i++) {
        if (min > array[i])
            min = array[i];
        if (max < array[i])
            max = array[i];
    }

    // 创建的桶数量等于原始数列的元素数量，除最后一个桶只包含数列最大值外，前面各个桶的区间按照比例来确定
    // 区间跨度 = (最大值 - 最小值) / (桶的数量 - 1)
    var range = (max - min) / (arrayLength - 1);
    var bucketArray = [];
    for (var i = 0; i < arrayLength; i++) {
        bucketArray.push([]);
    }

    var bucketLength = bucketArray.length;
    // 遍历原始数列，把元素对号入座放入各个桶中
    for (var i = 0; i < arrayLength; i++) {
        if (array[i] == max) {
            // 直接放入最后一个桶
            bucketArray[bucketLength - 1].push(array[i]);
        } else {
            var bucketIndex = Math.floor((array[i] - min) / range);
            bucketArray[bucketIndex].push(array[i]);
        }
    }

    // 对每个桶分别排序
    for (var i = 0; i < bucketLength; i++) {
        var bucketData = bucketArray[i];
        var bucketDataLength = bucketData.length;
        if (bucketDataLength > 1) {
            // 进行排序
            for (var j = 0; j < bucketDataLength - 1; j++) {
                for (var k = 0; k < bucketDataLength - 1 - j; k++) {
                    if (bucketData[k] > bucketData[k + 1]) {
                        var tmp = bucketData[k];
                        bucketData[k] = bucketData[k + 1];
                        bucketData[k + 1] = tmp;
                    }
                }
            }
        }
    }

    var resultArray = [];
    // 输出所有的桶元素
    for (var i = 0; i < bucketLength; i++) {
        var bucketData = bucketArray[i];
        var bucketDataLength = bucketData.length;
        for (var j = 0; j < bucketDataLength; j++) {
            resultArray.push(bucketData[j]);
        }
    }
    return resultArray;
}

/************************桶排序************************/
var array = [4.5, 0.84, 3.25,2.18, 0.5, 0.6, 0.9, 8.8];
// 从小到大排序
var resultArray = bucketSort(array);
console.log(resultArray);
