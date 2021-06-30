// 链表节点
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isCircle(node) {
    var p1 = node;
    var p2 = node;
    // 链表是否有环
    var isCircleFlag = false;
    // 每次相遇节点
    var meetNode = null;

    while (p1 != null && p2 != null) {
        // p1每次移动一个节点
        p1 = p1.next;
        // p2 每次移动两个节点
        p2 = p2.next;
        if (p1 ==null) 
            return false;
        if (p2 == null)
            return false;

        p2 = p2.next;
        if (p1 == p2) {
            // 代表链表有环，因为环形才可相遇
            isCircleFlag = true;
            break;
        }
    }
    
    // 统计环的长度
    var circleLength = 0;
    do {
        // p1每次移动一个节点
        p1 = p1.next;
        // p2 每次移动两个节点
        p2 = p2.next.next;
        circleLength++;
    } while(p1 != p2)
    console.log('相遇节点', p1.data);

    // 入环节点
    // p2重新指向根节点
    p2 = node;
    do {
        p1 = p1.next;
        p2 = p2.next;
    } while(p1 != p2)
    console.log('入环节点', p1.data);

    console.log('链表环的长度', circleLength);

    return isCircleFlag;
}


/************************判断链表是否有环************************/
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
var node8 = new Node(8);
var node9 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node4;

console.log("链表是否有环", isCircle(node1));