/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}


const increasingBST = (root) => {
    prevNode = null
    const recurse = (node) => {
        if (!node) return
        
        recurse(node.right)
        let newNode = new TreeNode(node.val)
        newNode.right = prevNode
        prevNode = newNode
        recurse(node.left)

    }

    recurse(root)
    return prevNode
}



let tree = {
    val: 5,
    left: {
        val: 3,
        left:  {
            val: 2,
            left: {val: 1, left: null, right: null},
            right: null
        },
        right:  {
            val: 4,
            left: null,
            right: null
        }
    },
    right:  {
        val: 6,
        left: null,
        right:  {
            val: 8,
            left: {val: 7, left: null, right: null},
            right: {val: 9, left: null, right: null}
        }
    }
}

console.log(increasingBST(tree)) 
