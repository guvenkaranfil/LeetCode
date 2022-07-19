import { BinaryTree, isCousins, rangeSumBST, TreeNode } from "./";

describe("938. Range Sum of BST", () => {
  test("should check the sum", () => {
    const binary = new BinaryTree();

    expect(
      rangeSumBST(binary.fromArray([10, 5, 15, 3, 7, null, 18]), 7, 15)
    ).toBe(32);
  });
});

describe("993. Cousins in Binary Tree", () => {
  test.skip("should check tree has given nodes at same depth level", () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;

    expect(isCousins(node1, 4, 3)).toBe(false);
  });
  
  test.skip("should check tree has given nodes at same depth level", () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;

    expect(isCousins(node1, 2, 3)).toBe(false);
  });

  test("should check tree has given nodes at same depth level - 2", () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);

    node1.left = node2;
    node1.right = node3;
    node2.left = null;
    node2.right = node4;
    node3.right = node5;

    expect(isCousins(node1, 2, 3)).toBe(false);
  });
});
