import { LinkedListNode } from "../../dataStructures/linkedList";

var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const m = getMid(head);
  const left = sortList(head);
  const right = sortList(m);
  return merge(left, right);
};

const getMid = (head) => {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const m = slow.next;
  slow.next = null;
  return m;
};

const merge = (list1, list2) => {
  let dummy = new LinkedListNode(1);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  }

  if (list2) {
    tail.next = list2;
  }

  return dummy.next;
};

var swapNodes = function (head, k) {
  let fast = head;
  let first,
    second,
    slow = head;

  for (let i = 1; i < k; i++) {
    fast = fast.next;
  }

  first = fast;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  second = slow;

  let temp = first.val;
  first.val = second.val;
  second.val = temp;

  return head;
};
export { sortList, swapNodes };
