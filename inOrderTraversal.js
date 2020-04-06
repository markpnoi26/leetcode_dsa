/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {

    if (!root) return []
    if (root.left === root.right === null) {
        return [root.val]
    }

    let output = []
    output = output.concat(inorderTraversal(root.left))
    output.push(root.val)
    output = output.concat(inorderTraversal(root.right))

    return output

}

const inorderTraversalIterate = root => {
    // iterative solution
    
    const output = []
    const stack = []

    while (root || stack.length) {
        if (root) {
          stack.push(root);
          root = root.left;
        } else {
          root = stack.pop();
          output.push(root.val);
          root = root.right;
        }
      }
    return output
}

const root = {
    val: 1,
    left: null,
    right: {
       val: 2,
       left: { val: 3, left: null, right: null },
       right: null } }


// console.log(inorderTraversal(root))
console.log(inorderTraversalIterate(root), [1,3,2])