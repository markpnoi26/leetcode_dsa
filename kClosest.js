/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    
    // solve by using a heap
    // loop through all possible points and store as heap.
    
    // at each iteration, solve for the ecludian distance, store in heap with
    // store = {[ecludeeanDistance]: [[x,y],....]} sort by ecludeanDistance.
    // loop through store, store in heap, return based on Kth
    // return points based on store[K]
    const store = {}
    const ans = []
    const heap = new PriorityQueue
    
    for (let i = 0; i<points.length; i++) {
        let [x, y] = points[i]

        let ecludeanDistance = Math.sqrt(x**2 + y**2)

        heap.enqueue(points[i], ecludeanDistance)

    }

    for (let i = 0; i<K; i++) {
        ans.push(heap.dequeue().val)
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


let points = [[1,3],[-2,2]], k = 1

console.log(kClosest(points, k), [[-2,2]])

points = [[3,3],[5,-1],[-2,4]], k = 2
console.log(kClosest(points, k), [[3,3],[-2,4]])