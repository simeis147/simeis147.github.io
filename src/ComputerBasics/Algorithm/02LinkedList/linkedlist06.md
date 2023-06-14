---
order: 6
date: 2023-06-14
category: 
  - 算法
  - 链表
---

# 删除链表的倒数第N个节点

## 相关题目推荐

[19.删除链表的倒数第N个节点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

## 写法

```java
public ListNode removeNthFromEnd(ListNode head, int n){
    ListNode dummyNode = new ListNode(0);
    dummyNode.next = head;

    ListNode fastIndex = dummyNode;
    ListNode slowIndex = dummyNode;

    //只要快慢指针相差 n 个结点即可
    for (int i = 0; i < n  ; i++){
        fastIndex = fastIndex.next;
    }

    while (fastIndex.next != null){
        fastIndex = fastIndex.next;
        slowIndex = slowIndex.next;
    }

    //此时 slowIndex 的位置就是待删除元素的前一个位置。
    //具体情况可自己画一个链表长度为 3 的图来模拟代码来理解
    slowIndex.next = slowIndex.next.next;
    return dummyNode.next;
}
```
