// 链表节点
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 单向链表
class LinkList {
    constructor() {
        this.head = null; // 头节点
        this.tail = null; // 尾节点
        this.length = 0; // 链表的长度
    }

    // 追加节点
    append(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    // 获得指定位置节点
    _getNode(index) {
        if (index < 0 || index >= this.length) {
            console.error('查找索引有误');
            return null;
        }
        let currentNode = this.head;
        let nodeIndex = index;
        while (nodeIndex > 0) {
            currentNode = currentNode.next;
            nodeIndex--;
        }
        return currentNode;
    }

    // 获得指定位置节点
    getData(index) {
        const node = this._getNode(index);
        if (node)
            return node.data;
        return null;
    }

    // 获得头部节点
    headData() {
        return this.getData(0);
    }

    // 获得尾部节点
    tailData() {
        return this.getData(this.length - 1);
    }

    // 插入节点
    insert(data, index) {
        if (index < 0 || index > this.length) {
            console.error('插入索引有误');
            return;
        }
        const node = new Node(data);
        if (index == 0) {
            // 头部
            node.next = this.head;
            this.head = node;
        } else if (index == this.length) {
            // 尾部
            this.tail.next = node;
            this.tail = node;
        } else {
            // 插入指定位置
            // 当前索引原来的节点
            const oldNode = this._getNode(index);
            node.next = oldNode;
            // 当前索引的前置节点
            const preNode = this._getNode(index - 1);
            preNode.next = node;
        }
        this.length++;
    }

    // 修改索引的值
    set(data, index) {
        const node = this._getNode(index);
        if (node)
            node.data = data;
    }

    // 删除节点
    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error('删除索引有误');
            return;
        }
        let deleteNode = this._getNode(index);
        if (index == 0) {
            // 头部
            this.head = deleteNode.next;
        } else if (index == this.length -  1) {
            // 尾部
            const preNode = this._getNode(index - 1);
            preNode.next = null;
            this.tail = preNode;
        } else {
            // 删除指定位置
            const preNode = this._getNode(index - 1);
            preNode.next = deleteNode.next;
        }
        this.length--;
        return deleteNode.data;
    }

    // 删除头节点
    removeHead() {
        this.remove(0);
    }

    // 删除尾节点
    removeTail() {
        this.remove(this.length - 1);
    }
    
    // 清空链表
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 返回链表大小
    length() {
        return this.length;
    }

    // 判断链表是否为空
    isEmpty() {
        return this.length == 0;
    }

    // 链表打印
    print() {
        if (this.isEmpty()) {
            console.log('链表为空');
            return;
        }
        let node = this.head;
        let str = "";
        while(node) {
            str += node.data.toString() + "->";
            node = node.next;
        }  
        str += "null";
        console.log(str);
        console.log('链表的长度：' + this.length);
    }
}

/************************链表************************/
var linklist = new LinkList();
linklist.append(1);
linklist.print();
linklist.append(2);
linklist.print();
console.log('索引0插入3');
linklist.insert(3, 0);
linklist.print();
console.log('索引3插入4');
linklist.insert(4, 3);
linklist.print();
console.log('索引2插入5');
linklist.insert(5, 2);
console.log('索引4插入6');
linklist.insert(6, 4);
linklist.print();
linklist.set('修改索引4的值', 4);
linklist.print();
linklist.insert(7, 10);
console.log("索引1的节点值：" + linklist.getData(1));
console.log("索引5的节点值：" + linklist.getData(5));
console.log("头部节点：" + linklist.headData());
console.log("尾部节点：" + linklist.tailData());
console.log('索引0移除');
linklist.remove(0);
linklist.print();
console.log('索引4移除');
linklist.remove(4);
linklist.print();
console.log('索引2移除');
linklist.remove(2);
linklist.print();
console.log('头节点移除');
linklist.removeHead();
linklist.print();
console.log('尾节点移除');
linklist.removeTail();
linklist.print();

