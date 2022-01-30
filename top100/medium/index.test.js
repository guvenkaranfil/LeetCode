import {
  convert,
  intToRoman,
  isMatch,
  isPalindrome,
  isValid,
  lengthOfLongestSubstring,
  letterCombinations,
  longestCommonPrefix,
  maxArea,
  myAtoi,
  reverse,
  romanToInt,
  threeSum,
  threeSumClosest,
} from "./";

describe("3. Longest Substring Without Repeating Characters", () => {
  test("should return longest non repeating character", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
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

describe("20. Valid Parentheses", () => {
  test("should check given parantheses are valid order or not", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("(]")).toBe(false);
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
