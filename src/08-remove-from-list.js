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
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  let nodeList = l;
  let list = [];
  const arr = [];
  do {
    if (nodeList.value !== k) {
      arr.push(nodeList.value);
    }
    nodeList = nodeList.next;
  } while (nodeList !== null);
  list = arr.reverse().reduce((prev, current) => {
    if (typeof prev === 'number' && typeof current === 'number') {
      const nodePrev = new ListNode(prev);
      const nodeCur = new ListNode(current);
      nodeCur.next = nodePrev;
      return nodeCur;
    }
    const node = new ListNode(current);
    node.next = prev;
    return node;
  });
  return list;
}

module.exports = removeKFromList;
