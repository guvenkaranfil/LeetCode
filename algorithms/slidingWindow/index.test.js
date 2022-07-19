import {
  findMaxAverage,
  longestSubstring,
  countGoodSubstrings,
  minimumDifference,
} from "./";

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

  test("minimumDifference", () => {
    expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
    expect(
      minimumDifference([87063, 61094, 44530, 21297, 95857, 93551, 9918], 6)
    ).toBe(74560);
  });
});
