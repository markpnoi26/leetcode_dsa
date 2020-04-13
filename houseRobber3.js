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

const rob = (root) => {
    if (!root) return 0

    let rootResult = robTree(root)
    return Math.max(rootResult.robbed, rootResult.notRobbed)
};

const robTree = node => {
    if (!node) return({robbed:0, notRobbed:0})

    let leftChild = robTree(node.left)
    let rightChild = robTree(node.right)
    
    let nodeRob = Math.max(node.val+leftChild.notRobbed+rightChild.notRobbed, node.val+leftChild.notRobbed, node.val+rightChild.notRobbed)
    let nodeNotRobbed = Math.max(leftChild.robbed+rightChild.robbed, leftChild.robbed+rightChild.notRobbed, rightChild.robbed+leftChild.notRobbed, leftChild.notRobbed+rightChild.notRobbed)


    return({robbed:nodeRob, notRobbed:nodeNotRobbed})

}


let tree = {
    val: 3,
    left: {
       val: 2,
       left: null,
       right: { val: 3, left: null, right: null } },
    right: {
       val: 3,
       left: null,
       right: { val: 1, left: null, right: null } } }
  

console.log(rob(tree), 7)

tree =  {
    val: 3,
    left: {
       val: 4,
       left:  { val: 1, left: null, right: null },
       right:  { val: 3, left: null, right: null } },
    right: {
       val: 5,
       left: null,
       right:  { val: 1, left: null, right: null } } }

console.log(rob(tree), 9)