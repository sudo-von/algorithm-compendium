# Design Double-ended Queue

Design a Double-ended Queue class.

Your Deque class should support the following operations:

- Deque() will initialize an empty queue.
- bool isEmpty() will return whether the queue is empty or not.
- void append(int value) will insert value at the end of the queue.
- void appendleft(int val) will insert value at the beginning of the queue.
- int pop() will remove and return the value at the end of the queue. If the queue is empty, return -1.
- int popleft() will remove and return the value at the beginning of the queue. If the queue is empty, return -1.

Note: You should implement each operation in O(1)O(1) time complexity.

Example 1:

```js
Input: [
  "isEmpty",
  "append",
  10,
  "isEmpty",
  "appendLeft",
  20,
  "popLeft",
  "pop",
  "pop",
  "append",
  30,
  "pop",
  "isEmpty",
];

Output: [true, null, false, null, 20, 10, -1, null, 30, true];
```
