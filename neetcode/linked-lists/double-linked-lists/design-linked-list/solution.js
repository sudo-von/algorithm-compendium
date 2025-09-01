var Node = function ({ val, next = null, previous = null }) {
  this.val = val;
  this.next = next;
  this.previous = previous;
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  let counter = 0;
  while (counter < index) {
    current = current.next;
    counter++;
  }
  return current.val;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node({ val, next: this.head });
  if (this.head) this.head.previous = node;
  this.head = node;
  if (!this.tail) this.tail = node;
  this.size++;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node({ val, previous: this.tail });
  if (this.tail) this.tail.next = node;
  this.tail = node;
  if (!this.head) this.head = node;
  this.size++;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addAtTail(val);
  } else {
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    const node = new Node({
      val,
      previous: current.previous,
      next: current,
    });
    if (current.previous) current.previous.next = node;
    current.previous = node;
    this.size++;
  }
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  let current = this.head;
  let counter = 0;
  while (counter < index) {
    current = current.next;
    counter++;
  }

  if (current.previous) {
    current.previous.next = current.next;
  } else {
    this.head = current.next;
  }

  if (current.next) {
    current.next.previous = current.previous;
  } else {
    this.tail = current.previous;
  }

  current.next = null;
  current.previous = null;

  this.size--;
};

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/