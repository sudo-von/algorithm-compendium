var Node = function ({ next = null, previous = null, val }) {
  this.next = next;
  this.previous = previous;
  this.val = val;
}

/**
* @param {string} homepage
*/
var BrowserHistory = function (homepage) {
  const node = new Node({ val: homepage });
  this.current = node;
  this.head = node;
  this.tail = node;
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function (url) {
  let current = this.current;

  const node = new Node({
    previous: current,
    val: url,
  });

  if (current.next) {
    current.next.previous = null;
  }
  current.next = node;

  this.current = node;
  this.tail = node;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function (steps) {
  let current = this.current;
  let iterator = 0;

  while (current.previous && iterator < steps) {
    current = current.previous;
    iterator++;
  }

  this.current = current;
  return current.val;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function (steps) {
  let current = this.current;
  let iterator = 0;

  while (current.next && iterator < steps) {
    current = current.next;
    iterator++;
  }

  this.current = current;
  return current.val;
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/