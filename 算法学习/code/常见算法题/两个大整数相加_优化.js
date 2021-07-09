function bigNumPlus(num1, num2) {
    // 分别逆序存储到两个数组中 每8位数分割，切割到可以直接计算即可
    let seg = 8;
    var numArray1 = [];
    var numArray2 = [];
    num1 = num1.toString();
    num2 = num2.toString();
    for (var i = num1.length; i >= 0; i -= seg) {
        if (i > seg) {
            numArray1.push(parseInt(num1.substr(i - seg, seg)));
        } else {
            numArray1.push(parseInt(num1.substr(0, i)));
        }
    }
    for (var i = num2.length; i >= 0; i -= seg) {
        if (i > seg) {
            numArray2.push(parseInt(num2.substr(i - seg, seg)));
        } else {
            numArray2.push(parseInt(num2.substr(0, i)));
        }
    }

    var result = [];
    // 存储需要进位加的数字
    var carry = 0;
    let len = Math.max(numArray1.length, numArray2.length);
    for (var i = 0; i < len; i++) {
        let n1 = numArray1[i] ? numArray1[i] : 0;
        let n2 = numArray2[i] ? numArray2[i] : 0;
        let r = n1 + n2 + carry;
        let tmp = r.toString();
        if (tmp.length > 8) {
            carry = tmp.substr(0, 1);
            result.push(tmp.substr(1));
        } else {
            carry = 0;
            result.push(tmp);
        }
    }
    if (carry != 0) {
        result.push(carry);
    }

    var str = '';    // 输出最终结果
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
console.log('1232313143536457757567575 + 2342342464645666121313442231 = ', bigNumPlus('1232313143536457757567575', '2342342464645666121313442231'))
console.log('8 + 9 = ', bigNumPlus(8, 9))
console.log('1 + 1000 = ', bigNumPlus(1, 1000))
console.log('1 + 999 = ', bigNumPlus(1, 999))