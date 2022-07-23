import { twoSum, addTwoNumbers, removeElement, removeDuplicates } from ".";

describe("1. Two Sum", () => {
  test("should get the target indices of [1,2] ", () => {
    const indices = twoSum([2, 1, 5, 3], 4);

    expect(indices).toStrictEqual([1, 3]);
  });
  test("should get the target indices of [2,7,11,15] [0,1] ", () => {
    const indices = twoSum([2, 7, 11, 15], 9);

    expect(indices).toStrictEqual([0, 1]);
  });
});

import { LinkedList } from "../../dataStructures/linkedList";
describe("2. Add Two Numbers", () => {
  test("should return sum of two linked list sample1", () => {
    const linkedList = new LinkedList();
    const list1 = linkedList.fromArray([2, 4, 3]);
    const list2 = linkedList.fromArray([5, 4, 4]);
    const resultLinkedList = linkedList.fromArray([7, 8, 7]);

    const result = addTwoNumbers(list1, list2);
    expect(result).toEqual(resultLinkedList);
  });

  test("should return sum of two linked list sample2", () => {
    const linkedList = new LinkedList();
    const list1 = linkedList.fromArray([2, 4, 3]);
    const list2 = linkedList.fromArray([5, 6, 4]);
    const resultLinkedList = linkedList.fromArray([7, 0, 8]);

    const result = addTwoNumbers(list1, list2);
    expect(result).toEqual(resultLinkedList);
  });

  test("should return sum of two linked list sample3", () => {
    const linkedList = new LinkedList();
    const list1 = linkedList.fromArray([7]);
    const list2 = linkedList.fromArray([8]);
    const resultLinkedList = linkedList.fromArray([5, 1]);

    const result = addTwoNumbers(list1, list2);
    expect(result).toEqual(resultLinkedList);
  });

  test("27. removeElement", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  });
});

test("26. Remove Duplicates from Sorted Array", () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});
