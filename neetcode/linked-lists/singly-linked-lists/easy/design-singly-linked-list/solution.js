class Node {
  val;
  next;

  constructor({ val, next }) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (!currentNode) {
      return -1;
    }

    return currentNode.val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const node = new Node({ val, next: null });
    if (!this.tail) {
      this.tail = node;
    }
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const node = new Node({ val, next: null });
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  /**
   * @param {number} index
   * @return {boolean}
   * 
   */
  remove(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentIndex === index) {
        if (!previousNode) {
          this.head = currentNode.next;
          if (!this.head) {
            this.tail = null;
          }
          return true;
        }

        previousNode.next = currentNode.next;
        if (!currentNode.next) {
          this.tail = previousNode;
        }
        return true;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }
    return values;
  }
}
