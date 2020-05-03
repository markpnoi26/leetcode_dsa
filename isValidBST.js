/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
    if (!root) return true

    let max = -Infinity
    let answer = true

    const dfs = (node) => {
        if (node === null) return 
    
        dfs(node.left)
        if (max < node.val) {
            max = node.val
        } else {
            answer = false
        }
        dfs(node.right)
    
    }

    dfs(root)

    return answer
};

let inValidNode1 = {
    val: 5,
    left: { val: 1, left: null, right: null },
    right: {
       val: 6,
       left:  { val: 3, left: null, right: null },
       right:  { val: 7, left: null, right: null } } }

let inValidNode2 = {
    val: 5,
    left:  { val: 1, left: null, right: null },
    right: {
       val: 4,
       left:  { val: 3, left: null, right: null },
       right:  { val: 7, left: null, right: null } } }

let validNode1 =  {
    val: 2,
    left:  { val: 1, left: null, right: null },
    right:  { val: 3, left: null, right: null } }

let validNode2 = {
    val: 5,
    left: {
       val: 3,
       left:  { val: 2, left: null, right: null },
       right:  { val: 4, left: null, right: null } },
    right: {
       val: 8,
       left:  { val: 6, left: null, right: {val: 7, left: null, right: null} },
       right:  { val: 9, left: null, right: null } } }
  

console.log(isValidBST(inValidNode1), false)
console.log(isValidBST(inValidNode2), false)
console.log(isValidBST(validNode1), true)
console.log(isValidBST(validNode2), true)
  