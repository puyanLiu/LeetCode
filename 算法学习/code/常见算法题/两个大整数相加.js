function bigNumPlus(num1, num2) {
    // 分别逆序存储到两个数组中
    var numArray1 = [];
    var numArray2 = [];
    num1 = num1.toString();
    num2 = num2.toString();
    for (var i = num1.length - 1; i >= 0; i--) {
        numArray1.push(parseInt(num1.charAt(i)));
    }
    for (var i = num2.length - 1; i >= 0; i--) {
        numArray2.push(parseInt(num2.charAt(i)));
    }

    var result = [];
    // 存储需要进位加的数字
    var carry = 0;
    let len = Math.max(numArray1.length, numArray2.length);
    for (var i = 0; i < len; i++) {
        let n1 = numArray1[i] ? numArray1[i] : 0;
        let n2 = numArray2[i] ? numArray2[i] : 0;
        let r = n1 + n2 + carry;
        carry = Math.floor(r / 10);
        result.push( r % 10);
    }
    if (carry != 0) {
        result.push(carry);
    }

    var str = '';
    // 输出最终结果
    for (var i = result.length - 1; i >= 0; i--) {
        str += result[i];
    }

    return str;
}

console.log('1 + 1 = ', bigNumPlus(1, 1))
console.log('17 + 1 = ', bigNumPlus(17, 1))
console.log('137 + 1 = ', bigNumPlus(137, 1))
console.log('1111111 + 11111 = ', bigNumPlus(1111111, 11111))
console.log('1111111 + 8964 = ', bigNumPlus(1111111, 8964))
console.log('8 + 9 = ', bigNumPlus(8, 9))