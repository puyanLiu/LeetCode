/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var ans = nums[0];
    var sum = 0;
    for (var i = 0, len = nums.length; i < len; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        ans = Math.max(sum, ans);
    }
    return ans;
};
// @lc code=end

