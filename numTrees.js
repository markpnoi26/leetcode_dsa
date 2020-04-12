/**
 * @param {number} n
 * @return {number}
 */


const numTrees = n => {
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        let left = 0, right = i-1, product = 0

        for (let j = left; j < i; left++, right--, j++) {
            if (left === 0) {
                product+=dp[right]
            } else if (right === 0) {
                product+=dp[left]
            } else {
                product+=(dp[left]*dp[right])
            }
        }

        dp[i] = product
        
    }

    return dp[n]
};



console.log(numTrees(1), 1)
console.log(numTrees(2), 2)
console.log(numTrees(6), 132)