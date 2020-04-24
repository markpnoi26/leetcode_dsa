/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {

    const dependency = {}
    const visited = {}
    const inProgress = {}
    const hasCycle = {}
    let order = []

    for (let i=0; i<numCourses; i++) {
        dependency[i] = []
        visited[i] = false
        inProgress[i] = false
        hasCycle[i] = false
    }

    for (let clss of prerequisites) {
        dependency[clss[1]].push(clss[0])
    }

    for (let clss in dependency) {
        order = (dfs(clss, dependency[clss], dependency, visited, inProgress, hasCycle)).concat(order)
    }

    for (let clss in hasCycle) {
        if (hasCycle[clss]) return []
    }

    return order
};

const dfs = (clss, clsses, dependency, visited, inProgress, hasCycle) => {
    let order = []
    if (visited[clss]) return order

    inProgress[clss] = true

    for (let clssItem of clsses) {
        if (inProgress[clssItem]) {
            hasCycle[clssItem] = true
        } 
        if (visited[clssItem] === false && inProgress[clssItem] === false) {
            order = (dfs(clssItem, dependency[clssItem], dependency, visited, inProgress, hasCycle)).concat(order)
        }
    }

    order = [parseInt(clss, 10)].concat(order)
    visited[clss] = true
    inProgress[clss] = false
    return order

}




let numCourses = 2, prerequisites=[[1,0]] 
console.log(findOrder(numCourses, prerequisites),[0,1])


numCourses= 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
console.log(findOrder(numCourses, prerequisites), [0,1,2,3], [0,2,1,3])



numCourses =2, prerequisites = [[0,1]]

console.log(findOrder(numCourses, prerequisites),[1,0])