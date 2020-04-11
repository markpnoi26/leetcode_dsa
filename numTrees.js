/**
 * @param {number} n
 * @return {number}
 */


const numTrees = n => {
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1



    for (let i = 2; i < n; i++) {
        

        dp[i] +=
    }

    console.log(dp)
    return dp[n]
};



console.log(numTrees(1), 1)
console.log(numTrees(2), 2)
console.log(numTrees(6), 132)