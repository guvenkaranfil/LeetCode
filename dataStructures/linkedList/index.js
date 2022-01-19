class LinkedListNode {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}

class LinkedList {
  fromArray(arr) {
    let head = null;

    arr.reverse().map((item) => {
      const newNode = new LinkedListNode(item, head);
      head = newNode;
    });

    return head;
  }
}

export { LinkedListNode, LinkedList };
