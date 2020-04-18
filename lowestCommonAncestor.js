/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

class TreeNode{
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const lowestCommonAncestor =  (root, p, q) => {
    if (!root) return false

    let rootResp = false
    if (root.val === p.val || root.val === q.val) {
        rootResp = true
    }
    let leftResp = lowestCommonAncestor(root.left, p, q)
    let rightResp = lowestCommonAncestor(root.right, p, q)

    if (leftResp instanceof Object) return leftResp
    if (rightResp instanceof Object) return rightResp

    if (leftResp && rightResp || leftResp && rootResp || rightResp && rootResp) {
        return root
    }
    if (leftResp || rightResp || rootResp) return true

};

let root = {
    val: 3,
    left:  {
        val: 5,
        left:  {
            val: 6,
            left: null,
            right: null
        },
        right:  {
            val: 2,
            left: {val: 7, left: null, right: null},
            right: {val: 4, left: null, right: null}
        }
    },
    right:  {
        val: 1,
        left:  {
            val: 0,
            left: null,
            right: null
        },
        right:  {
            val: 8,
            left: null,
            right: null
        }
    }
}


let five = {
    val: 5,
    left:  {
        val: 6,
        left: null,
        right: null
    },
    right:  {
        val: 2,
        left:  {
            val: 7,
            left: null,
            right: null
        },
        right:  {
            val: 4,
            left: null,
            right: null
        }
    }
}


let one = {
    val: 1,
    left:  {
        val: 0,
        left: null,
        right: null
    },
    right: {
        val: 8,
        left: null,
        right: null
    }
}


let six = {
    val: 6,
    left: null,
    right: null
}

let four = {
    val: 4,
    left: null,
    right: null
}


console.log(lowestCommonAncestor(root, five, one).val, 3)
console.log(lowestCommonAncestor(root, five, four).val, 5)
console.log(lowestCommonAncestor(root, six, four).val, 5)