/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    if (!head) return head
    const nodes = []

    let currNode = head

    while (currNode !== null) {
        // collect all nodes
        let tempHolder = currNode.next
        currNode.next = null
        nodes.push(currNode)
        currNode = tempHolder
    }


    for (let i = 0; i < nodes.length; i += 2) {
        if (nodes[i + 1] !== undefined) {
            // swap nodes, connect
            let temp = nodes[i + 1]
            nodes[i + 1] = nodes[i]
            nodes[i] = temp
        }
    }

    currNode = nodes[0]
    head = currNode
    for (let i = 1; i < nodes.length; i++) {
        currNode.next = nodes[i]
        currNode = nodes[i]
    }

    return head
};