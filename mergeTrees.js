/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

// class TreeNode {
//     constructor(val) {
//         this.val = val
//         this.left = this.right = null
//     }
// }


var mergeTrees = function(t1, t2) {
    
    
    let newRoot = new TreeNode(t1.val + t2.val) 

    newRoot.right = mergeTrees(t1.right, t2.right)
    newRoot.left = mergeTrees(t1.left, t2.left)
    

    return newRoot
};

// console.log(7+null)