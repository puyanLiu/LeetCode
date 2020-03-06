/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (m == 0) {
    for (var j = 0; j < n; j++) {
      nums1.pop();
      nums1.splice(j, 0, nums2[j]);
    }
    return nums1;
  }
  let i2 = 0;
  for (var i = 0; i < nums1.length; i++) {
    if (i2 == n) {
      break;
    }
    if ((nums2[i2] > nums1[i] && nums2[i2] <= nums1[i + 1])
    || (nums2[i2] > nums1[i] && nums1[i] > nums1[i + 1])) {
      nums1.pop();
      nums1.splice(i + 1, 0, nums2[i2]);
      i2++;
    } else if (nums2[i2] < nums1[i]) {
      nums1.pop();
      nums1.splice(i, 0, nums2[i2]);
      i2++;
    }
  }
  while(nums1.length > m + n) {
    nums1.pop();
  }
  return nums1;
};
// @lc code=end

