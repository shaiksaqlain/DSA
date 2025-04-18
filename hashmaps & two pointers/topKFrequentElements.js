
// 347. Top K Frequent Elements
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function findMax(hashofNums) {
    let maxValue = -Infinity;
    let maxKey;
    for (const [key, value] of Object.entries(hashofNums)) {
        if (maxValue < value) {
            maxValue = value
            maxKey = key
        }
    }
    return parseInt(maxKey);
}

const topKFrequent = function (nums, k) {
    const hashofNums = new Map()
    const result = []
    for (let index = 0; index < nums.length; index++) {
        hashofNums[nums[index]] = 1 + (hashofNums[nums[index]] || 0)
    }

    for (let index = 0; index < k; index++) {
        const max = findMax(hashofNums)
        result[index] = max
        hashofNums[max] = 0
    }
    return result;
}

const nums = [1, 1, 1, 2, 2, 3], k = 2

const output = topKFrequent(nums, k)
console.log(output);
