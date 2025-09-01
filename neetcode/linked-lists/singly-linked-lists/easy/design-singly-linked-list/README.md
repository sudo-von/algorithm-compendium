# Design Singly Linked List

Your LinkedList class should support the following operations:

- LinkedList() will initialize an empty linked list.
- int get(int i) will return the value of the ith node (0-indexed). If the index is out of bounds, return -1.
- void insertHead(int val) will insert a node with val at the head of the list.
- void insertTail(int val) will insert a node with val at the tail of the list.
- bool remove(int i) will remove the ith node (0-indexed). If the index is out of bounds, return false, otherwise return true.
- int[] getValues() return an array of all the values in the linked list, ordered from head to tail.

Example 1:

```js
Input: [
  "insertHead",
  1,
  "insertTail",
  2,
  "insertHead",
  0,
  "remove",
  1,
  "getValues",
];

Output: [null, null, null, true, [0, 2]];
```

Example 2:

```js
Input: ["insertHead", 1, "insertHead", 2, "get", 5];

Output: [null, null, -1];
```

Note:

- The index int i provided to get(int i) and remove(int i) is guaranteed to be greater than or equal to 0.
