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
const isPalindrome = (head) => {
    if (!head) return true
    const store = []

    let currNode = head
    while (true) {
        store.push(currNode.val)
        if (currNode.next === null) break
        currNode = currNode.next
    }
    console.log(store)
    const halfWay = Math.floor(store.length/2)
    const fullLen = store.length-1

    for (let i=0; i<halfWay; i++) {
        if (store[i] !== store[fullLen - i]) return false
    }
    return true
};

// O(n) time O(1) space if we reverse and traverse to get the exact same pattern

let head = { val: 1, next: { val: 2, next: null } }
console.log(isPalindrome(head), false)

head = {
    val: 1,
    next: { val: 2, next: { val: 2, next: {val: 1, next: null} } } }
console.log(isPalindrome(head), true)