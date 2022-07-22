import { sortList } from ".";
import { LinkedList } from "../../dataStructures/linkedList";

test("148. Sort List", () => {
  const linkedList = new LinkedList();
  const list1 = linkedList.fromArray([2, 5, 4, 3]);
  const resultLinkedList = linkedList.fromArray([2, 3, 4, 5]);

  expect(sortList(list1)).toStrictEqual(resultLinkedList);
});
