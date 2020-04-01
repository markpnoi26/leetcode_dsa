
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


const diameterOfBinaryTree = root => {
    if (root === null) return 0
    let rootDiam = maxDepth(root.right) + maxDepth(root.left)

    return (Math.max(rootDiam, diameterOfBinaryTree(root.right), diameterOfBinaryTree(root.left)))
 };


const maxDepth = node => {
    if (node === null) return 0
    let depth = 1, leftDepth = 0, rightDepth = 0

    if (node.right !== null) {
        rightDepth += maxDepth(node.right)
    }

    if (node.left !== null) {
        leftDepth += maxDepth(node.left) 
    }

    depth = depth + (Math.max(rightDepth, leftDepth))

    return depth
}




let tree = {
    val: 1,
    left:
      {
       val: 2,
       left:  { val: 4, left: null, right: null },
       right:  { val: 5, left: null, right: null } },
    right:  { val: 3, left: null, right: null } }

console.log(diameterOfBinaryTree(tree), 3)