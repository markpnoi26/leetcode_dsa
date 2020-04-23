/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {

    const dependency = {}
    const orderedDependency = {}
    const visited = {}
    const inProgress = {}
    const hasCycle = {}
    const order = []

    for (let i=0; i<numCourses; i++) {
        dependency[i] = []
    }

    for (let clss of prerequisites) {
        dependency[clss[1]].push(clss[0])
    }

    for (let clss in dependency) {
        dfs(clss, dependency[clss], order, dependency, visited, inProgress, hasCycle)
    }

    for (let clss in hasCycle) {
        if (hasCycle[clss]) return []
    }

    return order
};

const dfs = (clss, clsses, order, dependency, visited, inProgress, hasCycle) => {
    if (visited[clss]) return

    visited[clss] = true
    inProgress[clss] = true

    for (let clssItem of clsses) {
        if (inProgress[clssItem]) {
            hasCycle[clssItem] = true
        }
        if (visited[clssItem] === false && inProgress[clssItem] === false) {
            dfs(clssItem, dependency[clssItem], order, dependency, visited, inProgress, hasCycle)
        }
    }

    console.log(clss)
    order.unshift(parseInt(clss, 10))
    inProgress[clss] = false
}




let numCourses = 2, prerequisites=[[1,0]] 
console.log(findOrder(numCourses, prerequisites),[0,1])


numCourses= 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
console.log(findOrder(numCourses, prerequisites), [0,1,2,3], [0,2,1,3])



numCourses =2, prerequisites = [[0,1]]

console.log(findOrder(numCourses, prerequisites),[1,0])