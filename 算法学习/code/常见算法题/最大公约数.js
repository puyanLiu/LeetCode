// 检查是否是整除
function isDivisible (dividend, divisor) {
    return dividend % divisor == 0;
}

// 是否偶数
function isEvenNumer(num) {
    // num % 2
    // 整数和1进行与运算，== 0就是偶数
    // &1 取二进制的最末位，最末尾为0表示偶数，最末位为1表示奇数
    return (num & 1) == 0;
}

// ********************************求最大公约数最终方案********************************
// 在更相减损术的基础上使用移位运算
// 移位运算 >> 1 (除2)     << 1（乘2）
function getHighestCommonDivissor(num1, num2) {
    console.log(num1, num2);
    // if (num1 == 0 || num2 == 0)
    //     return 0;
    if (num1 == num2)
        return num1;
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    // 如果两个都是偶数 同时除以2
    if (isEvenNumer(max) && isEvenNumer(min)) {
        return getHighestCommonDivissor(max >> 1, min >> 1) << 1;
    }
    // 如果两个都是奇数 max - min
    else if (!isEvenNumer(max) && !isEvenNumer(min)) {
        return getHighestCommonDivissor(min, max-min);
    }
    // 如果max是偶数，min是奇数   偶数又移位1
    else if (isEvenNumer(max) && !isEvenNumer(min)) {
        return getHighestCommonDivissor(max >> 1, min)
    }
    // 如果max是奇数，min是偶数    偶数又移位1
    else if (!isEvenNumer(max) && isEvenNumer(min)) {
        return getHighestCommonDivissor(max, min >> 1)
    }
}


// 更相减损术
// 两个正整数a和b(a > b)，它们的最大公约数等于(a - b)差值c和较小数b的最大公约数
// 存在问题：更相减损术依靠两数求差的方式来递归，运算次数会远大于辗转相除法的取模方式
function getHighestCommonDivissor_back1(num1, num2) {
    if (num1 == num2)
        return num1;
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    var c = max - min;
    return getHighestCommonDivissor_back1(c, min);
}

// 辗转相除法
// 两个正整数a和b(a > b)，它们的最大公约数等于(a/b)的余数c和b之间的最大公约数
// 存在问题：当两个整数较大时，做a%b取模运算的性能会比较差
function getHighestCommonDivissor_back2(num1, num2) {
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    if (isDivisible(max, min))
        return min;

    var c = max % min;
    return getHighestCommonDivissor_back2(c, min);
}


console.log("3 和 5的最大公约数", getHighestCommonDivissor(3, 5));
console.log("14 和 7的最大公约数", getHighestCommonDivissor(14, 7));
console.log("106 和 48的最大公约数", getHighestCommonDivissor(106, 48));
console.log("21 和 35的最大公约数", getHighestCommonDivissor(21, 35));
console.log("10000 和 10001的最大公约数", getHighestCommonDivissor(10000, 10001));
console.log("98 和 28的最大公约数", getHighestCommonDivissor(98, 28));