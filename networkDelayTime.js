/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

const networkDelayTime = (times, N, K) => {
    const minDistances = {};
    const adjacencyList = {};
  
    for (let i = 1; i <= N; i++) {
        minDistances[i] = Infinity;
        adjacencyList[i] = [];
    }
  
    for (let time of times) {
        adjacencyList[time[0]].push({ name: time[1], wt: time[2] });
    }
  
    const myHeap = new PriorityQueue();

    myHeap.enqueue({name: K, wt: 0})
    minDistances[K] = 0

    while (myHeap.values.length > 0) {
        let currNode = myHeap.dequeue()
        for (let node of adjacencyList[currNode.name]) {
            if (minDistances[node.name] > minDistances[currNode.name]+node.wt) {
                minDistances[node.name] = minDistances[currNode.name]+node.wt
                myHeap.enqueue(node)
            }
        }
    }

    let max = -Infinity
    for (let key in minDistances) {
        max = Math.max(max, minDistances[key])
    }
    return max === Infinity? -1:max
    
};
  

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(node) {
        this.values.push(node);
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.wt - b.wt);
    }
}
  
let times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]],
n = 4,
k = 2;

console.log(networkDelayTime(times, n, k), 2);

times = [[1,2,1],[2,1,3]], n=2, k=2
console.log(networkDelayTime(times, n, k),3);

times = [
    [3,5,78],[2,1,1],[1,3,0],[4,3,59],
    [5,3,85],[5,2,22],[2,4,23],[1,4,43],
    [4,5,75],[5,1,15],[1,5,91],[4,1,16],
    [3,2,98],[3,4,22],[5,4,31],[1,2,0],
    [2,5,4],[4,2,51],[3,1,36],[2,3,59]
  ]
n= 5
k= 5
console.log(networkDelayTime(times, n, k), 31);


times = [
    [1,2,1],[2,3,2],[1,3,2]
],
n = 3,
k = 1
// 2

console.log(networkDelayTime(times, n, k), 2);


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

console.log(networkDelayTime(times, n, k), 69);
  