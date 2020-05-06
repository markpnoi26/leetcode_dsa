/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
    if (k === 1) return head

    let fastPointer = head
    let delayPointer = head
    let slicedList = null
    let delay = 1

    let newHead = null
    let currTail = null
    while (fastPointer !== null) {
        if (delay === k) {
            slicedList = delayPointer
            delayPointer = fastPointer.next
            fastPointer.next = null
            fastPointer = delayPointer
            delay = 1

            let reversed = reverseLinkedList(slicedList)
            if (!currTail && !newHead) {
                currTail = reversed.tail
                newHead = reversed.current
            }
            currTail.next = reversed.current
            currTail = reversed.tail
        } else {
            fastPointer = fastPointer.next
            delay++
        }

    }


    currTail.next = delayPointer
    return newHead
};

const reverseLinkedList = (head) => {
    let tail = head
    let previous = null
    let next = head.next
    let current = head

    while (next !== null) {
        current.next = previous
        previous = current
        current = next
        next = current.next
        if (next === null) {
            current.next = previous
        }
    }

    return {
        current,
        tail
    }
}
