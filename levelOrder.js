/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
    const collection = []
    
    const recurse = (node, level) => {
        if (!node) return
        if (collection[level] === undefined) {
            collection[level] = [node.val]
        } else {
            collection[level].push(node.val)
        }
        
        let nextLevel = level+1
        
        recurse(node.left, nextLevel)
        recurse(node.right, nextLevel)
    }
    
    recurse(root, 0)
    return collection
};

let node = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
       val: 20,
       left: { val: 15, left: null, right: null },
       right: { val: 7, left: null, right: null } } }


console.log(levelOrder(node), [ [3],
[9,20],
[15,7]
])