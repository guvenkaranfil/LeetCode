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


export { convert, reverse }