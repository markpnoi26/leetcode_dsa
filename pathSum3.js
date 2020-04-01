/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
    const queue = []
    queue.push(root)
    let sumCount = 0
    while (queue.length > 0) {
        let frontNode = queue[0]
        if (frontNode.left || frontNode.right) {
            if (frontNode.left !== null) queue.push(frontNode.left)
            if (frontNode.right !== null) queue.push(frontNode.right)
        }
        sumCount+=countToSum(frontNode, 0, sum)
        queue.shift()
    }

    return sumCount
};

const countToSum = (node, currSum, sumTarget) => {
    let sumCount = 0
    
    if (node === null) return sumCount
    let sumToLeaf = currSum+node.val
    if (sumToLeaf === sumTarget) {
        sumCount++
    } 
    sumCount =  sumCount + countToSum(node.left, sumToLeaf, sumTarget) + countToSum(node.right, sumToLeaf, sumTarget)

    // returns the number of times currSum === sumTarget
    return sumCount
    
}


const tree = {
    val: 10,
    left: {
       val: 5,
       left:  { val: 3, 
                left: {val: 3,left: null,right: null}, 
                right: {val:-2, left: null, right: null} },
       right:  { val: 2, left: null, right: {val: 1, left: null, right: null} } },
    right: {
       val: -3,
       left: null,
       right: { val: 11, left: null, right: null } } }

console.log(pathSum(tree, 8), 3)
console.log(pathSum(tree, 18), 3)

//        10
//       /  \
//      5   -3
//     / \    \
//    3   2   11
//   / \   \
//  3  -2   1
  

// 10 - 3 + 11 = 18
// 10 + 5 + 3 + 3 = 21
// 10 + 5 + 3 - 2 = 16
// 10 + 5 + 2 + 1 = 18