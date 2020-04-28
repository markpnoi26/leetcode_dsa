/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    if (!head) return head
    if (head.next === null) return null

    let earlyNode = head
    let prevNode = null
    let delayNode = head
    let pointer = 0

    while(earlyNode !== null) {
        if (pointer >= n) {
            prevNode = delayNode
            delayNode = delayNode.next
        }
        pointer++
        earlyNode = earlyNode.next
    }

    // console.log(prevNode, delayNode)
    if (prevNode) {
        prevNode.next = delayNode.next
    } else {
        return delayNode.next
    }

    return head
    
};

let head = {
    val: 1,
    next: { 
        val: 2, 
        next: { 
            val: 3, 
            next: {
                val: 4, 
                next: { 
                    val:5, 
                    next:null } 
                } 
            } 
        } 
    }
  
console.log(removeNthFromEnd(head, 2))


head = {val:1, next: {val:2, next: null}}
console.log(removeNthFromEnd(head, 2))