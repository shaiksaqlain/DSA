//#################################### Unique Paths  ###############################################

function uniquePaths(m, n) {
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    dp[m - 1][n - 1] = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dp[i][j] += dp[i][j + 1] + dp[i + 1][j]
        }
    }
    return dp[0][0];
}

//space optimized
function uniquePathsV1(m, n) {
    const dp = Array(n).fill(1)
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            dp[j] = dp[j] + dp[j + 1];
        }
    }
    return dp[0][0];
}

// const m = 3, n = 3;
// console.log(uniquePaths(m, n)); // 6
// const m = 3, n = 6;
// console.log(uniquePaths(m, n)); // 21


//#################################### Longest Common Subsequence  ###############################################


function longestCommonSubsequnece(s1, s2) {
    const dp = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(0));
    for (let i = s1.length - 1; i >= 0; i--) {
        for (let j = s2.length - 1; j >= 0; j--) {
            if (s1[i] == s2[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
            }
        }
    }
    return dp[0][0]
}
// const text1 = "cat", text2 = "crabt";
// console.log(longestCommonSubsequnece(text1, text2));


//#################################### Best Time to Buy And Sell Stock With Cooldown  ###############################################

function maxProfit(prices) {
    const n = prices.length;
    if (n <= 1) return 0;

    // Arrays for each state
    const holdingProfit = Array(n).fill(0); // profit when holding stock
    const soldProfit = Array(n).fill(0);    // profit when sold today
    const idleProfit = Array(n).fill(0);    // profit when idle/cooldown

    // Base case: day 0
    holdingProfit[0] = -prices[0]; // if we buy on first day
    soldProfit[0] = 0;             // cannot sell on first day
    idleProfit[0] = 0;             // do nothing

    for (let i = 1; i < n; i++) {
        holdingProfit[i] = Math.max(holdingProfit[i - 1], idleProfit[i - 1] - prices[i]);
        soldProfit[i] = holdingProfit[i - 1] + prices[i];
        idleProfit[i] = Math.max(idleProfit[i - 1], soldProfit[i - 1]);
    }
    // We return max profit when not holding any stock at the end
    return Math.max(soldProfit[n - 1], idleProfit[n - 1]);
}


function maxProfitv1(stocks) {
    // For today 
    let holdingProfit = -stocks[0];
    let soldProfit = 0;
    let idleProfit = 0;

    for (let i = 1; i < stocks.length; i++) {
        let prevSold = soldProfit;
        soldProfit = holdingProfit + stocks[i]  // Sell today =  till yesterday's profit + current profit;
        holdingProfit = Math.max(holdingProfit, idleProfit - stocks[i]);  //Keep holding or Buy today
        idleProfit = Math.max(idleProfit, prevSold); // Stay idle or enter idle after yesterday's sell
    }
    return Math.max(soldProfit, idleProfit)
}
// const stocks = [1, 3, 4, 0, 4]
// console.log(maxProfit(stocks));
// console.log(maxProfitv1(stocks));




//#################################### Coin Change II  ###############################################

function coinChangeII(coins, amount) {
    const dp = Array.from({ length: coins.length + 1 },
        () => Array(amount + 1).fill(0))
    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i - 1]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[coins.length][amount]
}
// const amount = 4, coins = [1, 2, 3]
// console.log(coinChangeII(coins, amount));

// [     0  1  2  3  4  
//    0 [1, 0, 0, 0, 0],
//    1 [1, 1, 1, 1, 1],
//    2 [1, 1, 2, 2, 3], 
//    3 [1, 1, 2, 3, 4]
// ]


//#################################### Target Sum  ###############################################

function targetSum(nums, target) {
    function dfs(i, sum) {
        if (i === nums.length) {
            return sum === target ? 1 : 0; // return count, not boolean
        }

        // choose + or - for nums[i]
        return dfs(i + 1, sum + nums[i]) +
            dfs(i + 1, sum - nums[i]);
    }
    return dfs(0, 0);
}

function targetSumV1(nums, target) {
    let count = 0
    function backtrack(i, sum) {
        if (i == nums.length) {
            if (sum === target) count++
            return;
        }
        backtrack(i + 1, sum + nums[i]);
        backtrack(i + 1, sum - nums[i]);
    }
    backtrack(0, 0);
    return count;
}

function targetSumWithMemoV2(nums, target) {
    let memo = new Map();
    function backtrack(i, sum) {
        let key = `${i},${sum}`
        if (memo.has(key)) return memo.get(key);
        if (i == nums.length) {
            return sum === target ? 1 : 0;
        }
        const add = backtrack(i + 1, sum + nums[i]);
        const sub = backtrack(i + 1, sum - nums[i]);
        const result = add + sub;
        memo.set(key, result)
        return result
    }
    return backtrack(0, 0);;
}

// const nums = [2, 2, 2], target = 2
// console.log(targetSumWithMemoV2(nums, target));


//#################################### Interleaving String   ###############################################


function InterleavingString(s1, s2, s3) {
    const m = s1.length, n = s2.length;
    if (m + n != s3.length) return false;

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[m][n] = true;
    for (let i = m; i >= 0; i--) {
        for (let j = n; j >= 0; j--) {
            if (i < m && s1[i] == s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true
            }
            if (j < n && s2[j] == s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true
            }
        }
    }
    return dp[0][0]
}

// const s1 = "aaaa", s2 = "bbbb", s3 = "aabbbbaa"
// console.log(InterleavingString(s1, s2, s3));


//####################################  Longest Increasing Path In a Matrix   ###############################################

function longestIncreasingPathInMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    const directions = [
        [-1, 0],// up
        [+1, 0],// down
        [0, +1],// right
        [0, -1],// left
    ]

    function dfs(row, col) {
        if (dp[row][col] !== 0) return dp[row][col];

        let maxLen = 1;
        for (const [dRow, dCol] of directions) {
            const newRow = row + dRow;
            const newCol = col + dCol;

            if (newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                matrix[row][col] < matrix[newRow][newCol]
            ) {
                const newPathLength = 1 + dfs(newRow, newCol);
                maxLen = Math.max(maxLen, newPathLength);
            }
        }

        dp[row][col] = maxLen;
        return maxLen;
    }
    let longestIncreasingPath = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            longestIncreasingPath = Math.max(longestIncreasingPath, dfs(row, col))
        }
    }
    return longestIncreasingPath;
}

// const matrix = [[5, 5, 3],
// [2, 3, 6],
// [1, 1, 1]];
// console.log(longestIncreasingPathInMatrix(matrix));


//####################################  Longest Increasing Path In a Matrix   ###############################################

function numDistinct(s, t) {
    const m = s.length, n = t.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        dp[i][n] = 1;
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s[i] == t[j]) {
                dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
            } else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    return dp[0][0];
}

// [    b  a  g ""
// b  [ 5, 3, 2, 1 ],
// a  [ 2, 3, 2, 1 ],
// b  [ 2, 1, 2, 1 ],
// g  [ 1, 1, 2, 1 ],
// b  [ 1, 1, 1, 1 ],
// a  [ 0, 1, 1, 1 ],
// g  [ 0, 0, 1, 1 ],
// "" [ 0, 0, 0, 1 ]
// ]
// console.log(numDistinct("babgbag", "bag")); // 5


//####################################  Edit Distance  ###############################################

function editDistance(s, t) {
    const m = s.length
    const n = t.length
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i
    for (let i = 0; i <= n; i++) dp[0][i] = i

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(s[i - 1] == t[j - 1]);

            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j - 1],
                    dp[i - 1][j],
                    dp[i][j - 1]
                )
            }
        }
    }
    return dp[m][n]
}
// [
//   [ 0, 1, 2, 3, 4, 5 ],
//   [ 1, 0, 1, 2, 3, 4 ],
//   [ 2, 1, 0, 1, 2, 3 ],
//   [ 3, 2, 1, 0, 1, 2 ],
//   [ 4, 3, 2, 1, 1, 2 ],
//   [ 5, 4, 3, 2, 1, 2 ],
//   [ 6, 5, 4, 3, 2, 1 ],
//   [ 7, 6, 5, 4, 3, 2 ]
// ]
// const word1 = "monkeys", word2 = "money"
// console.log(editDistance(word1, word2));

//####################################  Burst Balloons  ###############################################

function maxCoins(baloons) {
    baloons = [1, ...baloons, 1]
    const n = baloons.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0))

    for (let window = 2; window < n; window++) {
        for (let start = 0; start < n - window; start++) {
            let end = start + window;
            for (let brust = start + 1; brust < end; brust++) {
                dp[start][end] = Math.max(
                    dp[start][end], // current 
                    baloons[start] * baloons[brust] * baloons[end] + // [n-1]* n* [n+1]
                    dp[start][brust] + // left caluculated part for [n-n]....[n-1]
                    dp[brust][end] // right caluculated part for [n+1]....[n+n]
                )
            }
        }
    }
    return dp[0][n - 1]
}

// const nums = [4, 2, 3, 7]
// console.log(maxCoins(nums));
