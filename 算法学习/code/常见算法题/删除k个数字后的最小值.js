// 删除k个数字后的最小值
function removeKDigits(numStr, k) {
    var sNum = numStr;
    if (k == sNum.length || k > sNum.length) 
        return '0';
    if (k ==0) 
        return numStr;
        
    while(k > 0) {
        for (var i = 0; i < sNum.length; i++) {
            // 判断当前数字 大于 它右侧的数字，则删除
            if (sNum.charAt(i) > sNum.charAt(i + 1)) {
                // 删除当前数字
                sNum = sNum.substring(0, i) + sNum.substring(i + 1);
                break;
            }
        }
        k--;
    }

    // 去除开头的0
    while(sNum.charAt(0) == 0 && sNum.length > 1) {
        sNum = sNum.substring(1);
    }

    return sNum;    
}

console.log("1593212 去掉 1个数 最小值", removeKDigits('1593212', 1))
console.log("30200 去掉 1个数 最小值", removeKDigits('30200', 1))
console.log("10 去掉 2个数 最小值", removeKDigits('10', 2))
console.log("3549 去掉 1个数 最小值", removeKDigits('3549', 1))
console.log("541270936 去掉 1个数 最小值", removeKDigits('541270936', 1))
console.log("1593212 去掉 3个数 最小值", removeKDigits('1593212', 3))
console.log("1593212 去掉 7个数 最小值", removeKDigits('1593212', 7))
console.log("1593212 去掉 8个数 最小值", removeKDigits('1593212', 8))
console.log("1593212 去掉 6个数 最小值", removeKDigits('1593212', 6))
console.log("1593331 去掉 6个数 最小值", removeKDigits('1593331', 6))