// 删除k个数字后的最小值
function removeKDigits(numStr, k) {
    var sNum = numStr;
    if (k == sNum.length || k > sNum.length) 
        return '0';
    if (k ==0) 
        return numStr;
    
    // 存储最终结果
    var item = [];

    for (var i = 0; i < sNum.length; i++) {
        if (item.length == 0) {
            item.push(sNum.charAt(i));
            continue;
        }
        while (k != 0 &&  sNum.charAt(i) < item[item.length - 1]) {
            // 当前元素 小于 它左侧元素
            item.pop();
            k--;
        }
        // 入栈
        item.push(sNum.charAt(i));
    }
    
    // k还存在，删除尾部元素
    while(k != 0) {
        item.pop();
        k--;
    }

    // 去除开头的0
    while(item[0] == 0 && item.length > 1) {
        item.shift();
    }

    return item.join('');
}

console.log("1593212 去掉 1个数 最小值", removeKDigits('1593212', 1))
console.log("30200 去掉 1个数 最小值", removeKDigits('30200', 1))
console.log("10 去掉 2个数 最小值", removeKDigits('10', 2))
console.log("3549 去掉 1个数 最小值", removeKDigits('3549', 1))
console.log("541270936 去掉 1个数 最小值", removeKDigits('541270936', 1))
console.log("1593212 去掉 3个数 最小值", removeKDigits('1593212', 3))
console.log("1593212 去掉 4个数 最小值", removeKDigits('1593212', 4))
console.log("1593212 去掉 7个数 最小值", removeKDigits('1593212', 7))
console.log("1593212 去掉 8个数 最小值", removeKDigits('1593212', 8))
console.log("1593212 去掉 6个数 最小值", removeKDigits('1593212', 6))
console.log("1593331 去掉 6个数 最小值", removeKDigits('1593331', 6))