class Bucket {
    constructor() {
        this.max;
        this.min;
    }
}
function maxDiffer(array) {
    var max = array[0];
    var min = array[0];
    var arrayLength = array.length;
    for (var i = 1; i < arrayLength; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }

    if (max == min) {
        return 0;
    }

    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray.push(new Bucket());
    }

    // 原数组插入到桶中 记录最大值 最小值
    var diff = (max - min) / (arrayLength - 1);
    for (var i = 0; i < arrayLength; i++) {
        if (max == array[i]) {
            var bucket = newArray[arrayLength - 1];
            bucket.max = array[i];
            bucket.min = array[i];
            continue;
        }
        var index = Math.floor(array[i] / diff - min);
        var bucket = newArray[index];
        if (bucket.max == undefined || bucket.min == undefined) {
            bucket.max = array[i];
            bucket.min = array[i];
        } else {
            if (bucket.max < array[i]) {
                bucket.max = array[i];
            }
            if (bucket.min > array[i]) {
                bucket.min = array[i];
            }
        }
        
    }

    var maxDiff;
    var lastbucketMax = newArray[0].max;
    // 遍历每个桶 获得最大值，跟相邻桶最小值比较
    for (var i = 1; i < newArray.length; i++) {
        var bucket = newArray[index];
        var bucketMin = bucket.min;
        var bucketMax = bucket.max;
        var bucketDiff = Math.max(lastbucketMax, bucketMin) - Math.min(lastbucketMax, bucketMin);
        if (i == 1) {
            maxDiff = bucketDiff;
            lastbucketMax = bucketMax;
            continue;
        }
        if (maxDiff < bucketDiff) {
            maxDiff = bucketDiff;
        }
        lastbucketMax = bucketMax;
    }

    return maxDiff;
}


var array = [1, 5, 3, 6, 9, 2, 0, 3];
// var array = [1, 5, 3, 6, 8, 2, 0, 3];
console.log(maxDiffer(array));