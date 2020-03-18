/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var RomeEnum = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM',
    }; 

    var str = '';
    var q = parseInt(num / 1000);
    var b = parseInt(num % 1000 / 100);
    var s = parseInt(num % 100 / 10);
    var g = parseInt(num % 10);
    if (q > 0)
        str += RomeEnum[q * 1000];
    if (b > 0)
        str += RomeEnum[b * 100];
    if (s > 0)
        str += RomeEnum[s * 10];
    if (g > 0)
        str += RomeEnum[g];
    return str;
};
// @lc code=end

