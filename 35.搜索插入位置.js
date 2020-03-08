/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = -1;
    for (var i = 0, len = nums.length; i < len; i++) {
        if (nums[i] == target) {
            index = i;
            break
        } else if (i == 0 && target < nums[i]) {
            index = 0;
            break
        } else if (target > nums[i] && target < nums[i + 1]) {
            index = i + 1;
            break;
        } else if (i == len - 1 && index == -1) {
            index = i + 1;
            break;
        }
    }
    return index;
};
// @lc code=end

