/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
    const length = matrix[0].length
    const queue = new PriorityQueue
    let ans = null


    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            queue.enqueue(matrix[i][j], matrix[i][j])
        }
    }
    
    for (let i=0; i<k; i++) {
        ans = queue.dequeue()
    }

    return ans.val
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
            if(element.priority >= parent.priority) break;
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
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                // here
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
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


let [mtx,k] = [[[1,5,9,10],[10,11,13,16],[12,13,15,18],[12,77,82,90]],11]

console.log(kthSmallest(mtx, k), 15)