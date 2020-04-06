/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = people => {

    people.sort((a,b) => {
        if (a[0] !== b[0]) {
            // sort tallest first
            return b[0] - a[0]
        } else {
            // if same height sort by nums of people than person is taller or equal height
            return a[1] - b[1]
        }
    })

    const result = []
    // need to splice into the correct index
    // because the heights are already sorted, and k in front will not exceed the nums of people,
    // we need to sort the new array by people in front. People in front can be shorter, will not affect k
    for (let person of people) {
        result.splice(person[1], 0, person)
    }

    return result
};


let people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
console.log(reconstructQueue(people), [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]])

people = [[1,0],[2,0]]

console.log(reconstructQueue(people), [[1,0],[2,0]])