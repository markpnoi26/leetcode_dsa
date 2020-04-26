/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */
const shortestAlternatingPaths = (n, red_edges, blue_edges) => {
    // all wt considered is 1
    // modified dijkstra's algorithm with alternating paths.

    const redAdjacencyList = {}
    const blueAdjacencyList = {}
    const minDistances = {}
    const answer = new Array(n).fill(-1)

    for (let i=0; i<n; i++) {
        redAdjacencyList[i] = []
        blueAdjacencyList[i] = []
        minDistances[i] = {red: Infinity, blue: Infinity}
    }

    for (let node of red_edges) {
        redAdjacencyList[node[0]].push({name: node[1], priority: 1})
    }

    for (let node of blue_edges) {
        blueAdjacencyList[node[0]].push({name: node[1], priority: 1})
    }

    let heap = new PriorityQueue()

    heap.enqueue({name: 0, priority: 0})
    minDistances[0] = {red: 0, blue: 0}

   
    console.log(redAdjacencyList)
    console.log(blueAdjacencyList)
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