/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function removeKFromList(l, k) {
  let current = l;
  let node = current;
  let prev = null;
  while (node) {
    if (!prev) {
      if (current.value === k) {
        current = current.next;
      } else {
        prev = node;
      }
    } else if (node.value === k) {
      prev.next = node.next;
    } else {
      prev = node;
    }
    node = node.next;
  }
  return current;
}

module.exports = removeKFromList;
