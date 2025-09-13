/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = 0, lenB = 0;
  let currA = headA, currB = headB;

  while (currA || currB) {
    if (currA) { currA = currA.next; lenA++; }
    if (currB) { currB = currB.next; lenB++; }
  }

  let longer = lenA > lenB ? headA : headB;
  let shorter = lenA > lenB ? headB : headA;

  let diff = Math.max(lenA, lenB) - Math.min(lenA, lenB);

  while (diff) {
    longer = longer.next;
    diff--;
  }

  while (shorter && longer) {
    if (shorter === longer) return longer
    shorter = shorter.next;
    longer = longer.next;
  }

  return null;
};