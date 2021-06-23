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
        return this.remove(0);
    }

    // 删除尾节点
    removeTail() {
        return this.remove(this.length - 1);
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
            str += '{ key: ' + node.data.key + ', value: ' + node.data.value + ' }->';
            node = node.next;
        }  
        str += "null 链表的长度：" + this.length;
        console.log(str);
    }
}

class HashTable {
    constructor() {
        this.table = []; // 定义数组长度
        this.count = 0; // 存储的元素个数
        this.limit = 7; // 初始长度
    }

    // 哈希函数
    hash(data, size) {
        // 将data转换成比较大的数字，然后进行取余操作
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += 30 * total + data.charCodeAt(i)
        }
        console.log('哈希化 ' + data + '->total ' + total + ' 对数组取余 ' + total % size);
        return total % size;
    }

    // 是否是质数
    isPrime(num) {
        // 质数：只能被1和num本身整除，不能被2~(num-1)整除
        // 1不是质数
        if (num <= 1)
            return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            console.log(i);
            if (num % i == 0)
                return false;
        }
        return true;
    }

    // 获得质数
    getPrime(num) {
        while(!this.isPrime(num)) {
            num++;
        }
        return num;
    }

    // 插入元素
    put(key, value) {
        // 插入元素之前先判断是否需要扩容
        // 装填因子>0.75扩容
        if (this.count > this.table.length * 0.75) {
            this.resize(this.getPrime(this.limit * 2));
        }

        // 插入元素
        var index = this.hash(key, this.limit);
        // 根据index找出对应的链表或数组
        let linklist = this.table[index];
        if (linklist == null) {
            linklist = new LinkList();
            this.table[index] = linklist;
        }
        let node = linklist.head;
        while(node) {
            // 修改
            if (key == node.data.key) {
                node.data.value = value;
                return;
            }
            node = node.next;
        }
        // 追加操作
        linklist.append({ key: key, value: value });
        this.count++;
    }

    // 获取元素
    get(key) {
        var index = this.hash(key, this.limit);
        // 根据index找出对应的链表或数组
        let linklist = this.table[index];
        if (linklist == null) {
            console.log('key有误');
            return null;
        }
        let node = linklist.head;
        while(node) {
            if (key == node.data.key) {
                return node.data;
            }
            node = node.next;
        }
    }

    // 移除元素
    remove(key) {
        // 移除元素之前先判断是否需要压缩
        // 装填因子<0.25扩容
        if (this.count < this.table.length * 0.25) {
            this.resize(this.getPrime(this.limit * 2));
        }

        var index = this.hash(key, this.limit);
        // 根据index找出对应的链表或数组
        let linklist = this.table[index];
        if (linklist == null) {
            console.log('key有误');
            return null;
        }
        let node = linklist.head;
        if (node && key == node.data.key) {
            this.count--;
            return linklist.removeHead();
        }
        while(node) {
            let nodenext = node.next;
            if (nodenext != null && key == nodenext.data.key) {
                if (nodenext == null) {
                    this.count--;
                    return linklist.removeTail();
                }
                node.next = nodenext.next;
                this.count--;
                return nodenext.data;
            }
            node = node.next;
        }
    }

    // 判断是否为空
    isEmpty() {
        return this.count == 0;
    }

    // 返回元素个数
    size() {
        return this.count;
    }

    // 清除当前数组内容
    clear() {
        this.table = [];
        this.count = 0;
    }

    // 对哈希表进行扩容操作
    resize(newLimit) {
        // 进行扩容的原因：随着数据越来越多，通过哈希函数哈希化的下标索引相同的越来越多，链表数据也越来也长，造成效读取数据率降低
        var oldTable = this.table;
        this.limit = newLimit;
        this.clear();
        for (var i = 0; i < oldTable.length; i++) {
            let linklist = oldTable[i];
            if (linklist == null) {
                continue;
            }
            let node = linklist.head;
            while(node) {
                this.put(node.data.key, node.data.value);
                node = node.next;
            }
        }
    }

    // 打印
    print() {
        for (var i = 0; i < this.table.length; i++) {
            let linklist = this.table[i];
            if (linklist == null) {
                continue;
            }
            linklist.print();
        }
    }

}

/************************散列表************************/
var hashTable = new HashTable();
hashTable.put('k1', 'value1');
hashTable.put('k2', 'value2');
hashTable.put('k3', 'value3');
hashTable.put('k4', 'value4');
hashTable.put('k5', 'value5');
hashTable.put('k6', 'value6');
hashTable.put('k7', 'value7');
hashTable.put('k8', 'value8');
hashTable.put('k9', 'value9');
hashTable.put('k10', 'value10');
hashTable.put('k11', 'value11');
hashTable.put('k2', '修改k2的值');

hashTable.print()
console.log('散列表总元素有：' + hashTable.size());

console.log('k2的value：' + hashTable.get('k2').value);
console.log('k1删除：' + hashTable.remove('k1').value);
console.log('k8删除：' + hashTable.remove('k8').value);

hashTable.print();
console.log('散列表总元素有：' + hashTable.size());

console.log('散列表扩容');
hashTable.resize(15);
hashTable.print();
console.log('散列表总元素有：' + hashTable.size());
