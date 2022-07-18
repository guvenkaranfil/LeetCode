var findMaxAverage = function (nums, k) {
  let total = Number.MIN_SAFE_INTEGER;
  let runningSum = 0;

  for (let index = 0; index < k; index++) {
    runningSum += nums[index];
  }

  total = Math.max(runningSum, total);

  let slow = 0;
  for (let fast = k; fast < nums.length; fast++) {
    runningSum += nums[fast];
    runningSum -= nums[slow];

    total = Math.max(runningSum, total);

    slow++;
  }

  return total / k;
};

var longestSubstring = function (s, k) {
  if (k === 1) return s.length;

  let maxUnique = new Set(s);
  let maxLen = 0;

  for (let i = 1; i <= maxUnique.size; i++) {
    const freq = new Map();
    let start = 0,
      currUnique = 0,
      countAtLeastK = 0;

    for (let end = 0; end < s.length; end++) {
      freq.set(s[end], (freq.get(s[end]) || 0) + 1);

      if (freq.get(s[end]) === k) countAtLeastK++;
      if (freq.get(s[end]) === 1) currUnique++;

      while (currUnique > i) {
        if (freq.get(s[start]) === k) countAtLeastK--;
        freq.set(s[start], freq.get(s[start]) - 1);
        if (!freq.get(s[start])) currUnique--;
        start++;
      }
      if (currUnique === countAtLeastK) {
        maxLen = Math.max(maxLen, end - start + 1);
      }
    }
  }
  return maxLen;
};

var countGoodSubstrings = function (s) {
  let max = 0;

  const isUnique = (word) => {
    const uniqueChars = new Set(word).size;

    if (uniqueChars === 3) return true;

    return false;
  };

  let left = 0;
  let right = 3;
  while (right <= s.length) {
    if (isUnique(s.substring(left, right))) max++;

    left++;
    right++;
  }

  return max;
};

export { findMaxAverage, longestSubstring, countGoodSubstrings };
