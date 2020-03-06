/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsLen = nums.length;
    var obj = {};
    for(var i = 0; i < numsLen; i++) {
        let diff = target - nums[i];
        if (obj[diff] >= 0) {
            return [obj[diff], i];
        } else {
            obj[nums[i]] = i;
        }
    }
};
// @lc code=end

