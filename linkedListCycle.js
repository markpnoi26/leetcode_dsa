/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = head => {
    // solved using floyd's hare/tortoise algorithm (first half only though)
    if (head === null) return false
    let hare = head
    let turtle = head
    
    while (true) {
        if (turtle === null || turtle.next === null) return false
        if (hare === null || hare.next === null) return false
        hare = hare.next.next
        turtle = turtle.next
        if (hare === turtle) {
            return true
        }
        
        
    }
};