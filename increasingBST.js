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


var increasingBST = function(root) {
    const nodes = {}
    let left = 1
    for (let i=0; i<root.length; i++) {
        let right = left + 1
        if (root[i] !== null) {
            let newNode = new TreeNode(root[i])
            if (root[left] !== undefined) {
                newNode.left = root[left]
            } else {
                newNode.left = null
            }
            
            if (root[right] !== undefined) {
                newNode.right = root[right]
            } else {
                newNode.right = null
            }
            left = right+1
            nodes[newNode.val] = newNode
        } 
    }

    let rootNode = nodes[root[0]]
    let returnArr = dfsTreeTraverse(rootNode, nodes)
    returnArr.pop()
    return returnArr
    
};

function dfsTreeTraverse(node, nodes) {
    let arr = []
    let right = node.right
    let left = node.left

    if (left !== null) {
        arr = dfsTreeTraverse(nodes[left], nodes).concat(arr)
    }
    arr.push(node.val)
    arr.push(null)

    if (right !== null) {
        arr = arr.concat(dfsTreeTraverse(nodes[right], nodes))
    }

    return arr
}

                            //    r
console.log(increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]), [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]) 
                        //              p q
                        //    0 1 2 3 4 5    6 7  8    9   10   11 12
// Input
//        5                      0
//       / \
//     3    6              1          2
//    / \    \
//   2   4    8         3    4     5     6
//  /        / \ 
// 1        7   9     7 8  9 10  11 12  13 14

// Output
//  1
//   \
//    2
//     \
//      3
//       \
//        4
//         \
//          5
//           \
//            6
//             \
//              7
//               \
//                8
//                 \
//                  9  