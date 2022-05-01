const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.q = null;
  }

  getUnderlyingList() {
    return this.q;
  }

  enqueue(val) {
    if (!this.q) {
      this.q = new ListNode(val);
    } else {
      let endQ = this.q;
      while (endQ.next !== null) {
        endQ = endQ.next;
      }
      endQ.next = new ListNode(val);
    }
  }

  dequeue() {
    let val = this.q.value;
    this.q = this.q.next;
    return val;
  }

}

module.exports = {
  Queue
};
