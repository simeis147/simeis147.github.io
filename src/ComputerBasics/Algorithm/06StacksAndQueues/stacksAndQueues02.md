---
order: 2
date: 2024-03-05
category: 
  - 算法
  - 栈与队列
---

# 用队列实现栈

[225. 用队列实现栈](https://leetcode.cn/problems/implement-stack-using-queues/)

## 写法

```java
class MyStack {

    Queue<Integer> queue1; // 和栈中保持一样元素的队列
    Queue<Integer> queue2; // 辅助队列

    /** Initialize your data structure here. */
    public MyStack() {
        queue1 = new LinkedList<>();
        queue2 = new LinkedList<>();
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        queue2.offer(x); // 先放在辅助队列中
        while (!queue1.isEmpty()){
            queue2.offer(queue1.poll());
        }
        Queue<Integer> queueTemp;
        queueTemp = queue1;
        queue1 = queue2;
        queue2 = queueTemp; // 最后交换queue1和queue2，将元素都放到queue1中
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        return queue1.poll(); // 因为queue1中的元素和栈中的保持一致，所以这个和下面两个的操作只看queue1即可
    }
    
    /** Get the top element. */
    public int top() {
        return queue1.peek();
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return queue1.isEmpty();
    }
}
```

```java
class MyStack {
    //q1作为主要的队列，其元素排列顺序和出栈顺序相同
    Queue<Integer> q1 = new ArrayDeque<>();
    //q2仅作为临时放置
    Queue<Integer> q2 = new ArrayDeque<>();

    public MyStack() {

    }
    //在加入元素时先将q1中的元素依次出栈压入q2，然后将新加入的元素压入q1，再将q2中的元素依次出栈压入q1
    public void push(int x) {
        while (q1.size() > 0) {
            q2.add(q1.poll());
        }
        q1.add(x);
        while (q2.size() > 0) {
            q1.add(q2.poll());
        }
    }

    public int pop() {
        return q1.poll();
    }

    public int top() {
        return q1.peek();
    }

    public boolean empty() {
        return q1.isEmpty();
    }
}
```

```java
class MyStack {
    // Deque 接口继承了 Queue 接口
    // 所以 Queue 中的 add、poll、peek等效于 Deque 中的 addLast、pollFirst、peekFirst
    Deque<Integer> que1; // 和栈中保持一样元素的队列
    Deque<Integer> que2; // 辅助队列
    /** Initialize your data structure here. */
    public MyStack() {
        que1 = new ArrayDeque<>();
        que2 = new ArrayDeque<>();
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        que1.addLast(x);
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        int size = que1.size();
        size--;
        // 将 que1 导入 que2 ，但留下最后一个值
        while (size-- > 0) {
            que2.addLast(que1.peekFirst());
            que1.pollFirst();
        }

        int res = que1.pollFirst();
        // 将 que2 对象的引用赋给了 que1 ，此时 que1，que2 指向同一个队列
        que1 = que2;
        // 如果直接操作 que2，que1 也会受到影响，所以为 que2 分配一个新的空间
        que2 = new ArrayDeque<>();
        return res;
    }
    
    /** Get the top element. */
    public int top() {
        return que1.peekLast();
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return que1.isEmpty();
    }
}
```

```java
class MyStack {
    // Deque 接口继承了 Queue 接口
    // 所以 Queue 中的 add、poll、peek等效于 Deque 中的 addLast、pollFirst、peekFirst
    Deque<Integer> que1;
    /** Initialize your data structure here. */
    public MyStack() {
        que1 = new ArrayDeque<>();
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        que1.addLast(x);
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        int size = que1.size();
        size--;
        // 将 que1 导入 que2 ，但留下最后一个值
        while (size-- > 0) {
            que1.addLast(que1.peekFirst());
            que1.pollFirst();
        }

        int res = que1.pollFirst();
        return res;
    }
    
    /** Get the top element. */
    public int top() {
        return que1.peekLast();
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return que1.isEmpty();
    }
}
```

```java
class MyStack {

    Queue<Integer> queue;

    public MyStack() {
        queue = new LinkedList<>();
    }

    //每 offer 一个数（A）进来，都重新排列，把这个数（A）放到队列的队首
    public void push(int x) {
        queue.offer(x);
        int size = queue.size();
        //移动除了 A 的其它数
        while (size-- > 1)
            queue.offer(queue.poll());
    }

    public int pop() {
        return queue.poll();
    }

    public int top() {
        return queue.peek();
    }

    public boolean empty() {
        return queue.isEmpty();
    }
}
```

```java
class MyStack {
    Queue<Integer> queue;
    
    public MyStack() {
        queue = new LinkedList<>();
    }
    
    public void push(int x) {
        queue.add(x);
    }
    
    public int pop() {
        rePosition();
        return queue.poll();
    }
    
    public int top() {
        rePosition();
        int result = queue.poll();
        queue.add(result);
        return result;
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }

    public void rePosition(){
        int size = queue.size();
        size--;
        while(size-->0)
            queue.add(queue.poll());
    }
}
```
