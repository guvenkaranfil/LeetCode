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

import { LinkedListNode } from "../dataStructures/linkedList";
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

const lengthOfLongestSubstring = function (s) {
  let aPointer = 0;
  let bPointer = 0;
  let max = 0;

  const characters = new Set();

  while (bPointer < s.length) {
    if (!characters.has(s[bPointer])) {
      characters.add(s[bPointer]);
      bPointer++;
      max = Math.max(characters.size, max);
    } else {
      characters.delete(s[aPointer]);
      aPointer++;
    }
  }
  return max;
};

const findMedianforOneArray = (arr) => {
  if (arr.length % 2 === 0) {
    return (
      (arr[Math.floor(arr.length / 2 - 1)] + arr[Math.floor(arr.length / 2)]) /
      2
    );
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return findMedianforOneArray(nums1.length === 0 ? nums2 : nums1);
  }

  let A = nums1;
  let B = nums2;
  let total = nums1.length + nums2.length;
  let half = Math.floor(total / 2);

  if (nums1.length > nums2.length) {
    A = nums2;
    B = nums1;
  }

  let l = 0;
  let r = A.length - 1;
  while (true) {
    let i = Math.floor((l + r) / 2);
    let j = half - i - 2;

    let Aleft = i >= 0 ? A[i] : -Infinity;
    let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
    let BLeft = j >= 0 ? B[j] : -Infinity;
    let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

    // partition is correct
    if (Aleft <= Bright && BLeft <= Aright) {
      // odd
      if (total % 2) {
        return Math.min(Aright, Bright);
      }

      return (Math.max(Aleft, BLeft) + Math.min(Aright, Bright)) / 2;
    } else if (Aleft > Bright) {
      r = i - 1;
    } else {
      l = i + 1;
    }
  }
};

var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let res = "";
  for (let r = 0; r < numRows; r++) {
    let increment = 2 * (numRows - 1);
    for (let i = r; i < s.length; i += increment) {
      res += s[i];

      if (r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
        res += s[i + increment - 2 * r];
      }
    }
  }

  return res;
};

var reverse = function (x) {
  let MIN = -2147483648; // -2^31
  let MAX = 2147483647; // 2^31 - 1

  let res = 0;
  while (x) {
    let digit = x % 10;
    x = parseInt(x / 10);

    if (
      res > Math.floor(MAX / 10) ||
      (res === Math.floor(MAX / 10) && digit >= MAX % 10)
    ) {
      return 0;
    }

    if (
      res < Math.floor(MIN / 10) ||
      (res == Math.floor(MIN / 10) && digit <= MIN % 10)
    ) {
      return 0;
    }

    res = res * 10 + digit;
  }

  return res;
};

var myAtoi = function (s) {
  /*
    1- Whitespace
    2- +/- symbol
    3- check number digits (0-9)
    4- Check the MAX / MIN
  */

  let MIN_INT = -(2 ** 31);
  let MAX_INT = 2 ** 31 - 1;

  let i = 0;
  let res = 0;
  let negative = 1;

  // 1. Whitespace
  while (i < s.length && s[i] == " ") {
    i += 1;
  }

  // 2. + / - symbol
  if (i < s.length && s[i] == "-") {
    i += 1;
    negative = -1;
  } else if (i < s.length && s[i] == "+") {
    i += 1;
  }

  // 3. Check number digits
  let digits = new Set("0123456789");
  while (i < s.length && digits.has(s[i])) {
    res = res * 10 + parseInt(s[i]);
    i += 1;
  }

  // 4. Check the MAX / MIN int
  res = res * negative;
  if (res < 0) {
    return Math.max(res, MIN_INT);
  }

  return Math.min(res, MAX_INT);
};

var isPalindrome = function (x) {
  if (x < 0) return false;

  let divider = 1;
  while (x >= 10 * divider) {
    divider = divider * 10;
  }

  while (x > 0) {
    // let r = x % 10;
    // let l = Math.floor(x / divider)

    if (x % 10 != Math.floor(x / divider)) return false;

    x = x % divider;
    x = Math.floor(x / 10);
    divider = divider / 100;
  }

  return true;
};

var isMatch = function (s, p) {
  let cache = new Map();

  function dfs(i, j) {
    if (cache.has(`${i}:${j}`)) return cache.get(`${i}:${j}`);

    if (i >= s.length && j >= p.length) return true;

    if (j >= p.length) return false;

    let match = i < s.length && (s[i] === p[j] || p[j] === ".");

    if (j + 1 < p.length && p[j + 1] === "*") {
      cache.set(`${i}:${j}`, dfs(i, j + 2) || (match && dfs(i + 1, j)));
      return cache.get(`${i}:${j}`);
    }

    if (match) {
      cache.set(`${i}:${j}`, dfs(i + 1, j + 1));
      return cache.get(`${i}:${j}`);
    }

    cache.set(`${i}:${j}`, false);
    return false;
  }

  return dfs(0, 0);
};

var maxArea = function (height) {
  /* Brute Force Solution */
  // let res = 0;

  // for (let l = 0; l < height.length; l++) {
  //   for (let r = l + 1; r < height.length; r++) {
  //     let area = (r - l) * Math.min(height[l], height[r])
  //     res = Math.max(res, area)
  //   }
  // }

  // return res

  let res = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return res;
};

var intToRoman = function (num) {
  let symList = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ];

  let res = "";
  for (let [val, sym] of symList.reverse()) {
    let count = Math.floor(num / val);
    if (count) {
      res += sym.repeat(count);
      num = num % val;
    }
  }

  return res;
};

var romanToInt = function (s) {
  let symList = new Map();
  symList.set("I", 1);
  symList.set("IV", 4);
  symList.set("V", 5);
  symList.set("IX", 9);
  symList.set("X", 10);
  symList.set("XL", 40);
  symList.set("L", 50);
  symList.set("XC", 90);
  symList.set("C", 100);
  symList.set("CD", 400);
  symList.set("D", 500);
  symList.set("CM", 900);
  symList.set("M", 1000);

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (symList.has(s.substring(i, i + 2))) {
      res += symList.get(s.substring(i, i + 2));
      i++;
    } else if (symList.has(s[i])) {
      res += symList.get(s[i]);
    }
  }

  return res;
};

var longestCommonPrefix = function (strs) {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (i == s.length || s[i] !== strs[0][i]) {
        return res;
      }
    }

    res += strs[0][i];
  }

  return res;
};

var threeSum = function (nums) {
  nums.sort();

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (i > 0 && num == nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (r > l) {
      let threeSum = num + nums[l] + nums[r];

      if (threeSum > 0) {
        r -= 1;
      } else if (threeSum < 0) {
        l += 1;
      } else {
        res.push([num, nums[l], nums[r]]);

        l += 1;
        while (nums[l] == nums[l - 1] && r > l) {
          l += 1;
        }
      }
    }
  }

  return res;
};

var threeSumClosest = function (nums, target) {
  let res = nums[0] + nums[1] + nums[nums.length - 1];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (r > l) {
      let threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum > target) {
        r -= 1;
      } else if (threeSum < target) {
        l += 1;
      } else {
        l += 1;
        while (nums[l] == nums[l - 1] && r > l) {
          l += 1;
        }
      }

      if (Math.abs(threeSum - target) < Math.abs(res - target)) {
        res = threeSum;
      }
    }
  }

  return res;
};

var isValid = function (s) {
  let stack = [];
  let closeToOpen = new Map();
  closeToOpen.set(")", "(");
  closeToOpen.set("]", "[");
  closeToOpen.set("}", "{");

  for (let c of s) {
    if (closeToOpen.has(c)) {
      if (stack.length && stack[stack.length - 1] == closeToOpen.get(c)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return !stack.length ? true : false;
};

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  let res = [];
  let digitToChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };

  function backtrack(i, currentStr) {
    if (currentStr.length === digits.length) {
      res.push(currentStr);
      return;
    }

    for (let c of digitToChar[digits[i]]) {
      backtrack(i + 1, currentStr + c);
    }
  }

  backtrack(0, "");

  return res;
};

var removeNthFromEnd = function (head, n) {
  if (!head.next) return head.next;

  let current = head;
  let listLength = 0;
  while (current) {
    listLength++;
    current = current.next;
  }

  if (listLength - n === 0) {
    return head.next;
  }

  current = head;
  let count = 1;
  while (current && current.next) {
    if (listLength - n === count) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }

    count++;
  }

  return head;
};

// Two pointer approach
// var removeNthFromEnd = function (head, n) {
//   let start = new LinkedListNode();
//   start.next = head;

//   let fast = start;
//   let slow = start;

//   for (let i = 0; i < n; i++) {
//     fast = fast.next;
//   }

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }

//   slow.next = slow.next.next;

//   return start.next;
// };

var swapPairs = function (head) {
  let current = head;

  while (current && current.next) {
    let temp = current.val;
    current.val = current.next.val;
    current.next.val = temp;

    current = current.next.next;
  }

  return head;
};

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let min = j + 1;
      let max = nums.length - 1;
      while (min < max) {
        const sum = nums[i] + nums[j] + nums[min] + nums[max];
        if (sum === target) {
          res.push([nums[min], nums[max], nums[i], nums[j]]);
          while (nums[min] === nums[min + 1]) min++;
          while (nums[max] === nums[max - 1]) max--;
          min++;
          max--;
        } else if (sum > target) max--;
        else min++;
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }

  return res;
};

var mergeTwoLists = function (list1, list2) {
  if (!list2) {
    liste2 = new LinkedListNode();
  }

  let dummy = new LinkedListNode();
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
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
};

var mergeKLists = function (lists) {
  if (lists.length === 0) return [];

  if (lists.length <= 2) {
    return mergeTwoLists(lists[0], list[1]);
  }

  let head = mergeTwoLists(lists[0], lists[1]);
  let dummy = head;

  for (let i = 2; i < lists.length; i++) {
    dummy = mergeTwoLists(dummy, lists[i]);
  }
  return dummy;
};

export {
  twoSum,
  addTwoNumbers,
  removeElement,
  removeDuplicates,
  lengthOfLongestSubstring,
  findMedianSortedArrays,
  convert,
  reverse,
  myAtoi,
  isPalindrome,
  isMatch,
  maxArea,
  intToRoman,
  romanToInt,
  longestCommonPrefix,
  threeSum,
  threeSumClosest,
  isValid,
  letterCombinations,
  removeNthFromEnd,
  swapPairs,
  fourSum,
  mergeKLists,
};
