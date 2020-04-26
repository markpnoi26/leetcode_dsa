/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

const networkDelayTime = (times, N, K) => {
    const visited = {}
    const minDistance = {};
    const adjacencyList = {};
    const nodeDistance = {}
  
    for (let i = 1; i <= N; i++) {
        visited[i] = false;
        minDistance[i] = Infinity;
        nodeDistance[i] = Infinity;
        adjacencyList[i] = [];
    }
  
    for (let time of times) {
        adjacencyList[time[0]].push({ node: time[1], wt: time[2] });
    }
  
    const myHeap = new PriorityQueue();
  
    visited[K] = true
    minDistance[K] = 0;
    nodeDistance[K] = 0
    myHeap.enqueue(K, 0);
  
    while (myHeap.values.length) {
        let currNode = myHeap.dequeue();
        visited[currNode.val] = true
        if (currNode || minDistance[currNode.val] !== Infinity) {
            for (let node of adjacencyList[currNode.val]) {
            if (visited[node.node]) continue
            minDistance[node.node] = Math.min(
                minDistance[currNode.val] + node.wt,
                minDistance[node.node]
            );
            myHeap.enqueue(node.node, node.wt);
            nodeDistance[node.node] = nodeDistance[currNode.val]+1
            }
        }
    }
  
    let maxDistance = 0
    let lastNode = K
  
    for (let node in minDistance) {
        if (minDistance[node] === Infinity) return -1
        if (nodeDistance[node] > maxDistance) {
            maxDistance = nodeDistance[node]
            lastNode = node
        }
    };
  
    console.log(minDistance)
    return minDistance[lastNode]
};
  
  
class PriorityQueue {
    // priority based on max value. 
    // if min priority is desired, update the <>= signs as noted
    constructor() {
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
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
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
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
                if (
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
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
  
  
  // class PriorityQueue {
  //   constructor() {
  //     this.values = [];
  //   }
  //   enQ(node) {
  //     this.values.push(node);
  //     this.sort();
  //   }
  //   deQ() {
  //     return this.values.shift();
  //   }
  //   sort() {
  //     this.values.sort((a, b) => a.wt - b.wt);
  //   }
  // }
  
  
let times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
n = 4,
k = 2;

console.log(networkDelayTime(times, n, k));

times = [[1,2,1],[2,1,3]], n=2, k=2
console.log(networkDelayTime(times, n, k));

times = [
    [3,5,78],
    [2,1,1],
    [1,3,0],
    [4,3,59],
    [5,3,85],
    [5,2,22],
    [2,4,23],
    [1,4,43],
    [4,5,75],
    [5,1,15],
    [1,5,91],
    [4,1,16],
    [3,2,98],
    [3,4,22],
    [5,4,31],
    [1,2,0],
    [2,5,4],
    [4,2,51],
    [3,1,36],
    [2,3,59]
  ]
n= 5
k= 5
console.log(networkDelayTime(times, n, k));


times = [
    [1,2,1],
    [2,3,2],
    [1,3,2]
],
n = 3,
k = 1
// 2

console.log(networkDelayTime(times, n, k));


times = [
    [2,4,10],[5,2,38],[3,4,33],
    [4,2,76],[3,2,64],[1,5,54],
    [1,4,98],[2,3,61],[2,1,0],
    [3,5,77],[5,1,34],[3,1,79],
    [5,3,2],[1,2,59],[4,3,46],
    [5,4,44],[2,5,89],[4,5,21],
    [1,3,86],[4,1,95]
],
n = 5,
k = 1
// 69

console.log(networkDelayTime(times, n, k));
  