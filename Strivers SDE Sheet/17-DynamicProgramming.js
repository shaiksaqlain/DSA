//#################################### 	Max Product Subarray  ###############################################

function maxProdect(array) {
    let prefixx = 1;
    let suffix = 1;
    let result = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (prefixx == 0) prefixx = 1
        if (suffix == 0) suffix = 1

        prefixx = prefixx * array[i]
        suffix = suffix * array[array.length - 1 - i];

        result = Math.max(prefixx, suffix, result)
    }
    return result;
}

// const nums = [1, 2, 3, 4, 5, 0]
// const nums = [1, 2, -3, 0, -4, -5];
// console.log(maxProdect(nums));



//#################################### 	Longest Increasing Subsequence  ###############################################

function lengthOfLIS(array) {
    const dp = Array(array.length).fill(1);

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));


//#################################### 	Longest Common Subsequence  ###############################################

function longestCommonSubsequence(str1, str2) {
    const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
    for (let i = str1.length - 1; i >= 0; i--) {
        for (let j = str2.length - 1; j >= 0; j--) {
            if (str1[i] == str2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1]
            } else {
                dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j])
            }
        }
    }
    return dp[0][0]
}

// console.log(longestCommonSubsequence("abcde", "ace")); // 3


//#################################### 	Longest Palindrome Subsequence  ###############################################

function minInsertionsToPalindromeLCS(str1) {
    const str2 = str1.split('').reverse().join('')
    const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0))
    for (let i = str1.length - 1; i >= 0; i--) {
        for (let j = str2.length - 1; j >= 0; j--) {
            if (str1[i] == str2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1]
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }
    return dp[0][0];
}

// console.log(minInsertionsToPalindromeLCS("abcde")); // 3


//#################################### 	0/1 Knapsack  ###############################################

function knapsack(weights, values, W) {
    const dp = Array.from({ length: weights.length + 1 }, () => Array(W + 1).fill(0))
    for (let i = 1; i <= weights.length; i++) {
        for (let j = 1; j <= W; j++) {
            if (weights[i - 1] > j) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j],
                    values[i - 1] + dp[i - 1][j - weights[i - 1]]);
            }
        }
    }
    return dp[weights.length][W]
}
// const weights = [1, 3, 4, 6];
// const values = [20, 30, 10, 50];
// const W = 10;
// console.log("Maximum value:", knapsack(weights, values, W));


//#################################### 	Edit Distance  ###############################################


function editDistance(str1, str2) {
    const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0))
    for (let i = 0; i <= str1.length; i++) dp[i][0] = i
    for (let i = 0; i <= str2.length; i++) dp[0][i] = i

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],    // Delete
                    dp[i][j - 1],    // Insert
                    dp[i - 1][j - 1] // Replace
                )
            }
        }
    }
    return dp[str1.length][str2.length]
}
// console.log(editDistance("horse", "ros")); // Output: 3

//#################################### 	Maximum sum increasing subsequence  ###############################################




function maxSumIncreasingSubsequence(array) {
    const dp = [...array];

    for (let i = array.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                dp[i] = Math.max(dp[i], dp[j] + array[i])
            }
        }
    }
    return Math.max(...dp);
}

// console.log(maxSumIncreasingSubsequence([1, 101, 2, 3, 100, 4, 5])); //106