/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s)  => {
    const queue = new PriorityQueue
    const store = {}
    let ans = ''

    for (let i = 0 ; i < s.length; i++) {
        if (store[s[i]] !== undefined) {
            store[s[i]]++
        } else {
            store[s[i]] = 1
        }
    }


    for (let item in store) {
        queue.enqueue(item, store[item])
    }

    while (queue.values.length) {
        let item = queue.dequeue()

        const letter = item.val
        const freq = item.priority

        for (let i = 0 ; i< freq; i++) {
            ans+=letter
        }
    }

    return ans

};


class PriorityQueue {
    // priority based on max value. 
    // if min priority is desired, update the <>= signs as noted
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            // here
            if(element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
  
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                // here
                if(leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                // here
                if(
                    (swap === null && rightChild.priority > element.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
  
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}



let s = "tree"


console.log(frequencySort(s),"eert")


s = "cccaaa"

console.log(frequencySort(s),"cccaaa")


s = "Aabb"

console.log(frequencySort(s),"bbAa")