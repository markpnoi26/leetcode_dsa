/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
    const dependency = {}
    const visited = {}
    const inProgress = {}
    const containsCycle = {}

    for (let i = 0; i<numCourses; i++) {
        dependency[i] = []
        visited[i] = false
        inProgress[i] = false
        containsCycle[i] = false
    }

    for (let cls of prerequisites) {
        // i.e. 0 needs 1 to complete
        // if [0, 1]
        // each dependency node points to its dependents
        dependency[cls[1]].push(cls[0])
    }

    for (let cls in dependency) {
        dfs(cls, dependency[cls], dependency, visited, inProgress, containsCycle)
    }
    // console.log(containsCycle)
    for (let cls in containsCycle) {
        if (containsCycle[cls]) return false
    }

    return true
}


const dfs =  (cls, clses, dependency, visited, inProgress, containsCycle) => {
    visited[cls] = true
    inProgress[cls] = true

    for (let clsItem of clses) {
        if (inProgress[clsItem]) {
            containsCycle[clsItem] = true
        }

        if (visited[clsItem] === false && inProgress[clsItem] === false) {
            dfs(clsItem, dependency[clsItem], dependency, visited, inProgress, containsCycle)
        }
    }

    inProgress[cls] = false
}




let = numCourses = 2, prerequisites = [[1,0]]
console.log(canFinish(numCourses, prerequisites), true)

numCourses = 2, prerequisites = [[1,0],[0,1]]
console.log(canFinish(numCourses, prerequisites), false)