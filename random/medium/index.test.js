import { sortList, swapNodes } from ".";
import { LinkedList } from "../../dataStructures/linkedList";

test("148. Sort List", () => {
  const linkedList = new LinkedList();
  const list1 = linkedList.fromArray([2, 5, 4, 3]);
  const resultLinkedList = linkedList.fromArray([2, 3, 4, 5]);

  expect(sortList(list1)).toStrictEqual(resultLinkedList);
});

test("1721. Swapping Nodes in a Linked List", () => {
  const linkedList = new LinkedList();
  const list1 = linkedList.fromArray([1, 2, 3, 4, 5]);
  const resultLinkedList = linkedList.fromArray([1, 4, 3, 2, 5]);

  expect(swapNodes(list1, 2)).toStrictEqual(resultLinkedList);
});
