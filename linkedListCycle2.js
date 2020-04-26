/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if (!head) return null

    let turtle = head
    let bunny = head

    while (true) {
        if (turtle.next === null || bunny.next === null || bunny.next.next === null) return null
        turtle = turtle.next
        bunny = bunny.next.next

        if (turtle === bunny) break
    }

    let pointer1 = turtle
    let pointer2 = head

    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    return pointer1


};




