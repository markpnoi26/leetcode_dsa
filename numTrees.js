/**
 * @param {number} n
 * @return {number}
 */


const numTrees = n => {
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    /**
     * dp[0] was originally thought of as => 0 but setting it to 1
     * made it possible to multiply the right side to the left side of the unique combinations
     * of the BST. The logic made it easier and faster than the original thought of solution.
     */


    for (let i = 2; i <= n; i++) {
        let left = 0, right = i-1
        for (let j = left; j < i; left++, right--, j++) {
            dp[i]+=(dp[left]*dp[right])
        }
    }

    return dp[n]
};



console.log(numTrees(1), 1)
console.log(numTrees(2), 2)
console.log(numTrees(6), 132)