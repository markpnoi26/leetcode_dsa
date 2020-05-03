/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const addTwoNumbers = (l1, l2) => {
    if (!l1 && !l2) return null
    
    let node1 = l1
    let node2 = l2
    let carry = 0
    let baseNode = new ListNode(0)
    let head = baseNode

    while (node1 !== null && node2 !== null) {
        let total = node1.val + node2.val + carry
        carry = 0
        if (total > 9) {
            carry = 1
        }
        baseNode.next = new ListNode(total%10)
        baseNode = baseNode.next
        node1 = node1.next
        node2 = node2.next
    }

    while (node1 !== null) {
        let total = node1.val + carry
        carry = 0
        if (total > 9) {
            carry = 1
        }
        baseNode.next = new ListNode(total%10)
        baseNode = baseNode.next
        node1 = node1.next
    }

    while (node2 !== null) {
        let total = node2.val + carry
        carry = 0
        if (total > 9) {
            carry = 1
        }
        baseNode.next = new ListNode(total%10)
        baseNode = baseNode.next
        node2 = node2.next
    }

    if (carry > 0) {
        baseNode.next = new ListNode(carry)
    }

    return head.next
};

let l1, l2

l1 =  {
    val: 2,
    next:  { val: 4, next:  { val: 3, next: null } } }
l2 = {
    val: 5,
    next:  { val: 6, next:  { val: 4, next: null } } }

console.log(addTwoNumbers(l1, l2))