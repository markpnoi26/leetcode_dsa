/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// const flatten = (root) => {
//     if (!root) return root
//     let newRoot = null
//     let currNode = null

//     const recursion = (node) => {
//         if (!node) return

//         let newNode = new TreeNode(node.val)
//         if (currNode === null) {
//             currNode = newNode
//             newRoot = currNode
//         } else {
//             currNode.right = newNode
//             currNode = newNode
//         }

//         recursion(node.left)
//         recursion(node.right)

//     }

//     recursion(root)

//     root.left = null
//     root.right = newRoot.right
//     return root
// };

// 
// const flatten = root => {
//     if (!root) return root

//     const stack = [root]
//     while(stack.length) {
//         let popped = stack.pop()
//         if (popped.right) {
//             stack.push(popped.right)
//         }
//         if (popped.left) {
//             stack.push(popped.left)
//         }

//         if (stack.length) {
//             let top = stack[stack.length-1]
//             popped.left = null
//             popped.right = top
//         }

//     }

//     return root
// }

const flatten = (root) => {
    if (!root) return root
    let currNode = null

    const recursion = (node) => {
        if (!node) return
        
        recursion(node.right)
        recursion(node.left)

        node.left = null
        node.right = currNode
        currNode = node
    }

    recursion(root)

    return root
};

let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {val: 7, left: null, right: null},
            right: null
        },
        right:  {
            val: 4,
            left: {val: 9, left: null, right: null},
            right: {val: 10, left: null, right: null}
        }
    },
    right:  {
        val: 5,
        left: null,
        right:  {
            val: 6,
            left: null,
            right: null
        }
    }
}


console.log(flatten(root))