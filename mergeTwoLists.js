

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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

var mergeTwoLists = function(l1, l2) {

    if (l1 === null) {
        return l2
    }
    
    if (l2 === null) {
        return l1
    }
    
    if (l1.val < l2.val) {
        l1nextNode = l1.next
        l1.next = mergeTwoLists(l1nextNode, l2) 
        return l1
    } else if (l1.val > l2.val) {
        l2nextNode = l2.next
        l2.next = mergeTwoLists(l1, l2nextNode)
        return l2
    } else {
        l1nextNode = l1.next
        l1.next = mergeTwoLists(l1nextNode, l2) 
        return l1
    }

};

const l1 = {
    val: 1,
    next:  { val: 2, next:  { val: 4, next: null } } }
const l2= {
    val: 1,
    next:  { val: 3, next:  { val: 4, next: null } } }


console.log(mergeTwoLists(l1, l2))