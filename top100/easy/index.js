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

export { twoSum };
