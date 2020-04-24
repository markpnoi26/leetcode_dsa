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


const sortList = (head) => {
    if (!head) return head
    const nodes = []

    currNode = head
    while (currNode !== null) {
        // traverse and collect
        let nextNode = currNode.next 
        currNode.next = null
        nodes.push(currNode)
        currNode = nextNode
    } 

    for (let node of mergeSort(nodes)) {
        if (currNode === null) {
            head = node
            currNode = node
        } else {
            currNode.next = node
            currNode = node
        }
    }

    return head
    
};

const mergeSort = (array) => {

    if (array.length === 1) return array
    let mid = Math.floor(array.length/2) 
    return merge(mergeSort(array.slice(0,mid)), mergeSort(array.slice(mid)))
}

const merge = (arr1, arr2) => {
    let arr = []

    while (arr1[0] !== undefined && arr2[0] !== undefined) {
        if (arr1[0].val < arr2[0].val) {
            arr.push(arr1.shift())
        } else {
            arr.push(arr2.shift())
        }
    }

    if (arr1[0] !== undefined && arr2[0] === undefined) {
        arr = arr.concat(arr1)
    } 
    if (arr2[0] !== undefined && arr1[0] === undefined) {
        arr = arr.concat(arr2)
    }
    return arr
}

let head = {
    val: 4,
    next: { val: 2, next: { val: 1, next: {val: 3, next: null} } } }

console.log(sortList(head))
  