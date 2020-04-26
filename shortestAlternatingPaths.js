/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
const shortestAlternatingPaths = (n, red_edges, blue_edges) => {
    // all wt considered is 1
    // modified dijkstra's algorithm with alternating paths.

    const adjacencyList = {}
    const minDistances = {}
    const answer = new Array(n).fill(-1)

    for (let i=0; i<n; i++) {
        adjacencyList[i] = []
        minDistances[i] = Infinity
    }

    for (let node of red_edges) {
        adjacencyList[node[0]].push({name: node[1], priority: 1, color: "red"})
    }

    for (let node of blue_edges) {
        adjacencyList[node[0]].push({name: node[1], priority: 1, color: "blue"})
    }

    let heap = new PriorityQueue()

    heap.enqueue({name: 0, priority: 0})
    minDistances[0] = 0 

    while (heap.values.length > 0) {
        const currNode = heap.dequeue()

        for (let node of adjacencyList[currNode.name]) {
            if (node.color !== currNode.color) {
                
                heap.enqueue(node)
            }
        }
    }

    for (let node in minDistances) {
        if (minDistances[node] === Infinity) {
            answer.push(-1)
        } else {
            answer.push(minDistances[node])
        }
    }

    return answer
};

class PriorityQueue {

    constructor() {
        this.values = []
    }

    enqueue(node) {
        this.values.push(node)
        this.heapify()
    }

    dequeue() {
        return this.values.shift()
    }

    heapify() {
        this.values.sort((a,b) => a.priority - b.priority)
    }

}

let n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
console.log(shortestAlternatingPaths(n, red_edges, blue_edges), [0,1,-1]) 

n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
console.log(shortestAlternatingPaths(n, red_edges, blue_edges), [0,1,-1])

n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
console.log(shortestAlternatingPaths(n, red_edges, blue_edges), [0,-1,-1])

n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
console.log(shortestAlternatingPaths(n, red_edges, blue_edges), [0,1,2])

n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
console.log(shortestAlternatingPaths(n, red_edges, blue_edges), [0,1,-1])

n = 5, red_edges = [[0,1],[1,2],[2,3],[3,4]], blue_edges=[[1,2],[2,3],[3,1]]
console.log(shortestAlternatingPaths(n, red_edges, blue_edges), [0,1,2,3,7])