+++
title = "232. Implement Queue using Stacks"
date = 2024-01-29 13:12:25
draft = false
categories = ["Coding", "LeetCode", "Easy"]
tags = ["Stack", "Design", "Queue"]
+++

:star:

## [題目敘述](https://leetcode.com/problems/implement-queue-using-stacks/description/?envType=daily-question&envId=2024-01-29)

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:
- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.

**Notes:**
- You must use only standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

### Example 1
> **Input**
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
**Output**
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

## 解題思路

## Solution
{{< tabs >}}
{{% tab "Java" %}}
```java
import java.util.ArrayList;

class MyQueue {
    private int front;
    private int rear;
    private ArrayList<Integer> queue = new ArrayList<>();

    public MyQueue() {
        this.front = 0;
        this.rear = 0;
    }

    public int getFront() {
        return this.front;
    }

    public int getRear() {
        return this.rear;
    }

    public void setFront(int f) {
        this.front = f;
    }

    public void setRear(int r) {
        this.rear = r;
    }

    public void push(int x) {
        queue.add(x);
        setRear(getRear() + 1);
    }

    public int pop() {
        int temp = queue.get(0);
        queue.remove(0);
        setFront(getFront() + 1);
        return temp;
    }

    public int peek() {
        int temp = queue.get(0);
        return temp;
    }

    public boolean empty() {
        return getFront() == getRear();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```
{{% /tab %}}
{{% tab "C++" %}}
```cpp
#include <vector>
using namespace std;

class MyQueue {
 private:
  int front;
  int rear;
  vector<int> queue;

 public:
  MyQueue() {
    this->front = 0;
    this->rear = 0;
  }

  int getFront() { return this->front; }

  int getRear() { return this->rear; }

  void setFront(int f) { this->front = f; }

  void setRear(int r) { this->rear = r; }

  void push(int x) {
    queue.push_back(x);
    setRear(getRear() + 1);
  }

  int pop() {
    int tmp = queue[getFront()];
    setFront(getFront() + 1);
    return tmp;
  }

  int peek() {
    int tmp = queue[getFront()];
    return tmp;
  }

  bool empty() {
    return getFront() == getRear();
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */
```
{{% /tab %}}
{{% tab "Python" %}}
```pyhton

```
{{% /tab %}}
{{< /tabs >}}