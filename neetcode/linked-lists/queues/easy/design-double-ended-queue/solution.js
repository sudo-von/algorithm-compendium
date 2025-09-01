class Node {
  next;
  previous;
  value;

  constructor({ next = null, previous = null, value }) {
    this.next = next;
    this.previous = previous;
    this.value = value;
  }
}

class MyDeque {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.head === null && this.tail === null;
  }

  /**
   * @param {number} value
   */
  append(value) {
    const node = new Node({ value, previous: this.tail });
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
  }

  /**
   * @param {number} value
   * @return {void}
   */
  appendleft(value) {
    const node = new Node({ value, next: this.head });
    if (this.head) {
      this.head.previous = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  /**
   * @return {number}
   */
  pop() {
    if (!this.tail) {
      return -1;
    }
    const value = this.tail.value;
    if (!this.tail.previous) {
      this.head = null;
      this.tail = null;
      return value;
    }
    this.tail.previous.next = null;
    this.tail = this.tail.previous;
    return value;
  }

  /**
   * @return {number}
   */
  popleft() {
    if (!this.head) {
      return -1;
    }
    const value = this.head.value;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      return value;
    }
    this.head.next.previous = null;
    this.head = this.head.next;
    return value;
  }
}
