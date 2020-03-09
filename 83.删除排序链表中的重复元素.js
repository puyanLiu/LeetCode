/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null)
        return null;
    // 新的链表
    var ln = new ListNode(head.val);
    var lnnext = ln;
    var headnext = head.next;
    while (headnext != null) {
        if (lnnext.val != headnext.val) {
            lnnext.next = new ListNode(headnext.val);
            lnnext = lnnext.next;
        }
        headnext = headnext.next;
    }

    return ln;
};
// @lc code=end

