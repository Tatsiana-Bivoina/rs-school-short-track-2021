const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
let arrList = [];
class Queue {
  constructor() {
    arrList = [];
  }

  get size() {
    return arrList.length;
  }

  enqueue(element) {
    if (arrList.length === 0) {
      arrList.push(new ListNode(element));
    } else {
      const node = new ListNode(element);
      arrList[arrList.length - 1].next = node;
      arrList.push(node);
    }
  }

  dequeue() {
    return arrList.shift().value;
  }
}

module.exports = Queue;
