import { twoSum } from ".";

describe("twoSum Problem", () => {
  test("should get the target indices of [1,2] ", () => {
    const indices = twoSum([2, 1, 5, 3], 4);

    expect(indices).toStrictEqual([1, 3]);
  });
  test("should get the target indices of [2,7,11,15] [0,1] ", () => {
    const indices = twoSum([2, 7, 11, 15], 9);

    expect(indices).toStrictEqual([0, 1]);
  });
});
