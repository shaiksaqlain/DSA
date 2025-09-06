//#################################### 	Climbing Stairs  ###############################################
function climbStairs(n) {
    let one = 1, two = 1;
    for (let i = 0; i < n - 1; i++) {
        const temp = one + two;
        one = two;
        two = temp;
    }
    return two;
}
// const n = 2
// console.log(climbStairs(n));


//#################################### 	Min Climbing Stairs  ###############################################

function minClimbStairs(array) {
    array.push(0);
    for (let i = array.length - 3; i >= 0; i--) {
        array[i] = Math.min(array[i] + array[i + 2], array[i] + array[i + 1])
        // array[i]+= Math.min( array[i + 2],array[i + 1]) Optimized
    }
    return array[0];
}
// const array = [1, 2, 2, 1, 0]
// console.log(minClimbStairs(array));


//#################################### House Robber  ###############################################

function houseRobber(array) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let rob1 = array[0], rob2 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < array.length; i++) {
        const temp = Math.max(rob1 + array[i], rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}

// const nums = [1, 1, 3, 3] //4
// const nums = [1, 3, 1, 3, 100] // 103
// console.log(houseRobber(nums));



//#################################### House Robber II ###############################################

function helperFunction(array) {
    if (array.length == 0) return 0;
    if (array.length == 1) return array[0];

    let rob1 = array[0], rob2 = Math.max(array[0], array[1])

    for (let i = 2; i < array.length; i++) {
        const temp = Math.max(rob1 + array[i], rob2)
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2
}

function houseRobberII(nums) {

    const case1 = helperFunction(nums.slice(0, nums.length - 1))
    const case2 = helperFunction(nums.slice(1))

    return Math.max(case1, case2)
}

// const nums = [2, 9, 8, 3, 6]
// console.log(houseRobberII(nums));

//#################################### Longest Palindromic Substring  ###############################################
function longestPalindromicSubString(s) {
    let start = 0;
    let maxLength = 1;
    function isPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1
                start = left
            }
            left--
            right++
        }
    }
    for (let i = 0; i < s.length; i++) {
        //odd
        isPalindrome(i, i)
        //even
        isPalindrome(i, i + 1)
    }
    return s.substring(start, start + maxLength)
}

// const s = "abbc"
// console.log(longestPalindromicSubString(s));

//#################################### count Palindromic Substrings ###############################################


function countPalindromicSubString(s) {
    let count = 0;
    function isPalindrome(left, right) {
        let tempCount = 0;
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            tempCount++
            left--
            right++
        }
        return tempCount;
    }
    for (let i = 0; i < s.length; i++) {
        count += isPalindrome(i, i)
        count += isPalindrome(i, i + 1)
    }
    return count;
}

// const s = "aaa"
// console.log(countPalindromicSubString(s));


//#################################### Coin Change ###############################################
function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount]
}

// const coins = [1, 5, 10], amount = 12
// console.log(coinChange(coins, amount)); //3

//#################################### Maximum Product Subarray  ###############################################

function maximumProductSubarray(array) {
    let prefix = 1, suffix = 1;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (prefix == 0) prefix = 1;
        if (suffix == 0) suffix = 1;
        prefix = prefix * array[i];
        suffix = suffix * array[array.length - 1 - i];
        result = Math.max(result, prefix, suffix)
    }
    return result;
}

// const nums = [1, 2, -3, 4]
// console.log(maximumProductSubarray(nums));

//#################################### Word Break ###############################################
function wordBreak(s, wordDict) {
    const dp = Array(s.length).fill(false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (word of wordDict) {

            if (s.length - i >= word.length && s.slice(i, i + word.length) == word) {
                dp[i] = dp[i + word.length];
            };
            if (dp[i])
                break;
        }
    }
    return dp[0]
}

// const s = "leetcode", wordDict = ["leet", "code"]
// console.log(wordBreak(s, wordDict));

//#################################### Partition Equal Subset Sum  ###############################################
function partionEqualSubsetSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if (sum % 2 != 0) return false;
    const target = sum / 2;
    let dp = new Set();
    dp.add(0);

    for (let i = 0; i < array.length; i++) {
        const nextDP = new Set();
        for (t of dp) {
            if (t + array[i] == target) return true;
            nextDP.add(t + array[i])
            nextDP.add(t)
        }
        dp = nextDP;
    }
    return dp.has(target)
}
// const nums = [1, 2, 3, 4]
// console.log(partionEqualSubsetSum(nums));

//#################################### Longest Increasing Subsequence  ###############################################

function lengthOfLIS(array) {
    const dp = Array(array.length).fill(1);
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}
//[1, 1, 2, 2,3, 3, 4]
// const nums = [9, 1, 4, 2, 3, 3, 7]
// console.log(lengthOfLIS(nums)); // 4
