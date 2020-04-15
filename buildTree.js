/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

class TreeNode{
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const buildTree = (preorder, inorder) => {
    
    // two base cases are needed, because 
    // slicing array.length == 1 would not work properly via recursion.
    // we get both empty arrays and 1 length arrays through the recursion

    if (preorder.length === 0 && inorder.length === 0) return null
    
    if (preorder.length === 1 && inorder.length === 1) return new TreeNode(preorder[0])

    let subRoot = new TreeNode(preorder[0])
    let leftPre, leftIn, rightPre, rightIn, mid

    for (let i=0;i<inorder.length; i++) {
        if (inorder[i] === preorder[0]) {
            leftIn = inorder.slice(0,i)
            rightIn = inorder.slice(i+1)
            mid = i
        }
    }

    leftPre = preorder.slice(1, mid+1)
    rightPre = preorder.slice(mid+1)

    subRoot.left = buildTree(leftPre, leftIn)
    subRoot.right = buildTree(rightPre, rightIn)

    return subRoot
    
};


let preorder, inorder;

preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log(buildTree(preorder,inorder))

preorder = [3,9,15,20,7], inorder = [9,15,3,20,7]
console.log(buildTree(preorder,inorder))

preorder = [9], inorder = [9]
console.log(buildTree(preorder,inorder))

preorder = [9,15], inorder = [9,15]
console.log(buildTree(preorder,inorder))