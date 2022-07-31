import { LinkedList } from "../dataStructures/linkedList";
import {
  twoSum,
  addTwoNumbers,
  removeElement,
  removeDuplicates,
  convert,
  findMedianSortedArrays,
  fourSum,
  intToRoman,
  isMatch,
  isPalindrome,
  isValid,
  lengthOfLongestSubstring,
  letterCombinations,
  longestCommonPrefix,
  maxArea,
  myAtoi,
  removeNthFromEnd,
  reverse,
  romanToInt,
  swapPairs,
  threeSum,
  threeSumClosest,
  mergeKLists,
  mergeTwoLists,
  searchRange,
  searchInsert,
  sortColors
} from "./";

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

describe("3. Longest Substring Without Repeating Characters", () => {
  test("should return longest non repeating character", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
});

describe("4. Median of Two Sorted Arrays", () => {
  test("sample1", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [1, 2, 3, 4, 5, 6, 7, 8];

    const median = findMedianSortedArrays(nums1, nums2);

    expect(median).toBe(4);
  });

  test("sample2", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 6, 7, 8, 9];

    const median = findMedianSortedArrays(nums1, nums2);

    expect(median).toBe(5);
  });

  test("sample3", () => {
    const nums1 = [2, 3, 5, 7, 9];
    const nums2 = [];

    const median = findMedianSortedArrays(nums1, nums2);

    expect(median).toBe(5);
  });

  test("sample4", () => {
    const nums1 = [2, 4]; // 2,4,6,8
    const nums2 = [];

    const median = findMedianSortedArrays(nums1, nums2);

    expect(median).toBe(3);
  });

  test("sample5", () => {
    const nums1 = [2, 3]; // 2,4,6,8
    const nums2 = [1];

    const median = findMedianSortedArrays(nums1, nums2);

    expect(median).toBe(2);
  });
});

describe("6. Zigzag Conversion", () => {
  test("should return conversion", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });
});

describe("7. Reverse Integer", () => {
  test("should return reversed integer", () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(-123)).toBe(-321);
    expect(reverse(120)).toBe(21);
  });
});

describe("8. String to Integer (atoi)", () => {
  test("should return converted number", () => {
    expect(myAtoi("42")).toBe(42);
    expect(myAtoi("   -42")).toBe(-42);
    expect(myAtoi("4193 with words")).toBe(4193);
  });
});

describe("9. Palindrome Number", () => {
  test("should check given number is palindrome or not", () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
    expect(isPalindrome(1221)).toBe(true);
  });
});

describe("10. Regular Expression Matching", () => {
  test("should check given string and path are matching or not", () => {
    expect(isMatch("aa", "a")).toBe(false);
    expect(isMatch("aa", "a*")).toBe(true);
  });
});

describe("11. Container With Most Water", () => {
  test("should calculate max area", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 1])).toBe(1);
  });
});

describe("12. Integer to Roman", () => {
  test("should return converted roman number", () => {
    expect(intToRoman(3)).toBe("III");
    expect(intToRoman(58)).toBe("LVIII");
    expect(intToRoman(1994)).toBe("MCMXCIV");
    expect(intToRoman(6)).toBe("VI");
  });
});

describe("13. Roman to Integer", () => {
  test("should return converted integer number", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});

describe("14. Longest Common Prefix", () => {
  test("should return longest prefix", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});

describe("15. 3Sum", () => {
  test("should return the sum 0 of there sub arrays", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([])).toEqual([]);
    expect(threeSum([])).toEqual([]);
  });
});

describe("16. 3Sum Closest", () => {
  test("should return closest target", () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
    expect(threeSumClosest([1, 1, 1, 0], -100)).toBe(2);
    expect(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)).toBe(82);
  });
});

describe("17. Letter Combinations of a Phone Number", () => {
  test("should return possible letter combinations", () => {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
    expect(letterCombinations("")).toEqual([]);
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  });
});

test("18. 4Sum", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toStrictEqual([
    [1, 2, -2, -1],
    [0, 2, -2, 0],
    [0, 1, -1, 0],
  ]);
});
test("19. Remove Nth Node From End of List", () => {
  const linkedList = new LinkedList();
  const list1 = linkedList.fromArray([1, 2, 3, 4, 5]);
  const resultLinkedList = linkedList.fromArray([1, 2, 3, 5]);

  expect(removeNthFromEnd(list1, 2)).toStrictEqual(resultLinkedList);

  const list2 = linkedList.fromArray([1, 2]);
  const resultLinkedList2 = linkedList.fromArray([2]);
  expect(removeNthFromEnd(list2, 2)).toStrictEqual(resultLinkedList2);
});

describe("20. Valid Parentheses", () => {
  test("should check given parantheses are valid order or not", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("(]")).toBe(false);
  });
});
test("21. Merge Two Sorted Lists", () => {
  const linkedList = new LinkedList();

  expect(
    mergeTwoLists(
      linkedList.fromArray([1, 2, 4]),
      linkedList.fromArray([1, 3, 4])
    )
  ).toStrictEqual(linkedList.fromArray([1, 1, 2, 3, 4, 4]));
});

test("23. Merge k Sorted Lists", () => {
  let lists = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];
  let linkedLists = [];
  const linkedList = new LinkedList();
  lists.forEach((l) => linkedLists.push(linkedList.fromArray(l)));
  expect(mergeKLists(linkedLists)).toStrictEqual(
    linkedList.fromArray([1, 1, 2, 3, 4, 4, 5, 6])
  );
});

test("24. Swap Nodes in Pairs", () => {
  const linkedList = new LinkedList();
  const list1 = linkedList.fromArray([1, 2, 3, 4]);
  const resultLinkedList = linkedList.fromArray([2, 1, 4, 3]);
  expect(swapPairs(list1, 2)).toStrictEqual(resultLinkedList);
});

test("26. Remove Duplicates from Sorted Array", () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("34. Find First and Last Position of Element in Sorted Array", () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
});

test("35. Search Insert Position", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("75. Sort Colors", () => {
  let nums = [2, 0, 2, 1, 1, 2]
  sortColors(nums)
  expect(nums).toEqual([0, 1, 1, 2, 2, 2])
});
