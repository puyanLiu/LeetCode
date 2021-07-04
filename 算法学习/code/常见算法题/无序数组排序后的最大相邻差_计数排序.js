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

    var diff = max - min + 1;
    var newArray = [];
    for (var i = 0; i < diff; i++) {
        newArray.push(0);
    }

    for (var i = 0; i < arrayLength; i++) {
        newArray[array[i] - min]++;
    }

    var maxDiff = 0;
    var preIndex = 0;
    for (var i = 1; i < newArray.length; i++) {
        if (newArray[i] != 0) {
            if (i - preIndex > maxDiff) {
                maxDiff = i - preIndex;
            }
            preIndex = i;
        }
    }
    return maxDiff;
}


var array = [1, 5, 3, 6, 9, 2, 0, 3];
console.log(maxDiffer(array));