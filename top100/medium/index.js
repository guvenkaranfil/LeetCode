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

export {
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
};
