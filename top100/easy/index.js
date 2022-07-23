// Vide explanation for solution
// https://www.youtube.com/watch?v=KLlXCFG5TnA

var twoSum = function (nums, target) {
  let prevMap = {}; // val : index

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    const diff = target - number;

    if (diff in prevMap) {
      return [prevMap[diff], index];
    } else {
      prevMap[number] = index;
    }
  }
};

import { LinkedListNode } from "../../dataStructures/linkedList";
const addTwoNumbers = function (l1, l2) {
  let head = new LinkedListNode();
  let curr = head;

  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    carry = parseInt(sum / 10);
    sum = sum % 10;
    curr.next = new LinkedListNode(sum);

    curr = curr.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return head.next;
};

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

var removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }

  return k + 1;
};

export { twoSum, addTwoNumbers, removeElement, removeDuplicates };
