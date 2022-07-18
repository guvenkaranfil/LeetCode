import { findMaxAverage, longestSubstring, countGoodSubstrings } from "./";

describe("Sliding Window", () => {
  test("findMaxAverage", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    expect(findMaxAverage([0, 4, 0, 3, 2], 1)).toBe(4);
    expect(findMaxAverage([5], 1)).toBe(5);
    expect(findMaxAverage([-1], 1)).toBe(-1);
  });

  test("longestSubstring", () => {
    expect(longestSubstring("aaabb", 3)).toBe(3);
    expect(longestSubstring("pababbc", 2)).toBe(5);
  });

  test("countGoodSubstrings", () => {
    expect(countGoodSubstrings("xyzzaz")).toBe(1);
    expect(countGoodSubstrings("aababcabc")).toBe(4);
  });
});
