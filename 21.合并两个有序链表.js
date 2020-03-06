/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    }
    let l1next = l1, l2next = l2;
    // 新的链表
    var ln;
    // 存放第一个元素
    if (l1.val > l2.val) {
        ln = new ListNode(l2.val);
        l2next = l2next.next;
    } else {
        ln = new ListNode(l1.val);
        l1next = l1next.next;
    }
    let lnnext = ln;
    while(l1next != null && l2next != null) {
        if (l1next.val > l2next.val) {
            lnnext.next = new ListNode(l2next.val);
            l2next = l2next.next;
        } else {
            lnnext.next = new ListNode(l1next.val);
            l1next = l1next.next;
        }
        lnnext = lnnext.next;
    }
    if (l1next != null) {
        lnnext.next = l1next;
    } else if (l2next != null) {
        lnnext.next = l2next;
    }
    return ln;
};
// @lc code=end

