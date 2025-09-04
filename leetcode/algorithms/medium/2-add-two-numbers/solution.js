/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let cl1 = l1, cl2 = l2, carry = 0;

  let head = new ListNode(0);
  let tail = head;

  while (cl1 || cl2 || carry) {
    const sum = (cl1 ? cl1.val : 0) + (cl2 ? cl2.val : 0) + carry;
    carry = Math.floor(sum / 10);

    const node = new ListNode(sum % 10);
    tail.next = node;
    tail = node;

    if (cl1) cl1 = cl1.next;
    if (cl2) cl2 = cl2.next;
  }

  return head.next;
};