/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

class TreeNode{
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const buildTree = (inorder, postorder) => {

    if (inorder.length === 0 && postorder.length === 0) return null
    if (inorder.length === 1 && postorder.length === 1) return new TreeNode(postorder[0])

    let root = postorder.pop(), rightIn, rightPost, leftIn, leftPost, leftInLen
    let subNode = new TreeNode(root) 


    for (let i = 0; i<inorder.length; i++) {
        if (inorder[i] === root) {
            leftIn = inorder.slice(0,i)
            rightIn = inorder.slice(i+1)
        }
    }

    leftInLen = leftIn.length
    leftPost = postorder.slice(0, leftInLen)
    rightPost = postorder.slice(leftInLen)


    subNode.right = buildTree(rightIn, rightPost)
    subNode.left = buildTree(leftIn, leftPost)
    
    return subNode
};


let inorder = [9,3,15,20,7]
let postorder = [9,15,7,20,3]

console.log(buildTree(inorder, postorder))


inorder = [4,2,5,1,3,6], postorder = [4,5,2,6,3,1]
console.log(buildTree(inorder, postorder))