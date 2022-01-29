var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let res = '';
  for (let r = 0; r < numRows; r++) {
    let increment = 2 * (numRows - 1);
    for (let i = r; i < s.length; i += increment) {
      res += s[i];

      if (r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
        res += s[i + increment - 2 * r]
      }
    }
  }

  return res
};

var reverse = function (x) {
  let MIN = -2147483648 // -2^31
  let MAX = 2147483647  // 2^31 - 1

  let res = 0
  while (x) {
    let digit = x % 10;
    x = parseInt(x / 10)

    if (res > Math.floor(MAX / 10) ||
      (res === Math.floor(MAX / 10) && digit >= MAX % 10)) {
      return 0
    }

    if (res < Math.floor(MIN / 10) ||
      (res == Math.floor(MIN / 10) && digit <= MIN % 10)) {
      return 0
    }

    res = (res * 10) + digit
  }

  return res
};

var myAtoi = function (s) {
  /*
    1- Whitespace
    2- +/- symbol
    3- check number digits (0-9)
    4- Check the MAX / MIN
  */

  let MIN_INT = -(2 ** 31)
  let MAX_INT = 2 ** 31 - 1

  let i = 0
  let res = 0
  let negative = 1

  // 1. Whitespace
  while (i < s.length && s[i] == ' ') {
    i += 1
  }

  // 2. + / - symbol
  if (i < s.length && s[i] == '-') {
    i += 1
    negative = -1
  } else if (i < s.length && s[i] == '+') {
    i += 1
  }

  // 3. Check number digits
  let digits = new Set('0123456789')
  while (i < s.length && digits.has(s[i])) {
    res = res * 10 + parseInt(s[i])
    i += 1
  }

  // 4. Check the MAX / MIN int
  res = res * negative
  if (res < 0) {
    return Math.max(res, MIN_INT)
  }

  return Math.min(res, MAX_INT)
};

var isPalindrome = function (x) {
  if (x < 0) return false

  let divider = 1
  while (x >= 10 * divider) {
    divider = divider * 10
  }

  while (x > 0) {
    // let r = x % 10;
    // let l = Math.floor(x / divider)

    if (x % 10 != Math.floor(x / divider)) return false;

    x = x % divider
    x = Math.floor(x / 10)
    divider = divider / 100
  }

  return true;
};

var isMatch = function (s, p) {
  let cache = new Map();

  function dfs(i, j) {
    if (cache.has(`${i}:${j}`)) return cache.get(`${i}:${j}`)

    if (i >= s.length && j >= p.length) return true

    if (j >= p.length) return false

    let match = i < s.length && (s[i] === p[j] || p[j] === '.')

    if (j + 1 < p.length && p[j + 1] === '*') {
      cache.set(`${i}:${j}`, (dfs(i, j + 2) || match && dfs(i + 1, j)))
      return cache.get(`${i}:${j}`)
    }

    if (match) {
      cache.set(`${i}:${j}`, dfs(i + 1, j + 1))
      return cache.get(`${i}:${j}`)
    }

    cache.set(`${i}:${j}`, false)
    return false
  }


  return dfs(0, 0);
};

export { convert, reverse, myAtoi, isPalindrome, isMatch }