class TreeNode {
  constructor(val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  fromArray(values) {
    if (values.length === 1) {
      return new TreeNode(values[0]);
    }

    let root = new TreeNode(values[0]);
    let stack = [root];
    values.shift();

    while (values !== null && values.length > 0) {
      const currentNode = stack.pop();

      if (values[0] || values[0] === null) {
        const rightTreeNode = new TreeNode();
        currentNode.right = rightTreeNode;
        stack.push(rightTreeNode);
      }

      if (values[0] || values[0] === null) {
        const leftTreeNode = new TreeNode(values[0]);
        currentNode.left = leftTreeNode;
        stack.push(leftTreeNode);
      }

      values.shift();
    }

    return root;
  }

  binaryToArray(root) {
    const result = [];
    const stack = [root];

    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.val);

      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }

    return result;
  }
}

var rangeSumBST = function (root, low, high) {
  let stack = [root];

  let sum = 0;
  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val && low <= current.val && current.val <= high) {
      sum += current.val;
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

var isCousins = function (root, x, y) {
  let parents = [];
  let depths = [];

  function dfs(node, parent, depth) {
    if (!node) {
      return;
    }

    if (node.val === x || node.val === y) {
      parents.push(parent);
      depths.push(depth);
    }

    dfs(node.left, node, depth + 1);
    dfs(node.right, node, depth + 1);
  }

  dfs(root, null, 0);

  if (parents.length === 2 && depths.length === 2) {
    if (parents[0] == parents[1]) return false;
    if (depths[0] != depths[1]) return false;

    return true;
  }

  return false;
};
export { TreeNode, BinaryTree, rangeSumBST, isCousins };
