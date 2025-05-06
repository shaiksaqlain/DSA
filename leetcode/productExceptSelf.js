// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const nums = [-1, 1, 0, -3, 3]
// const nums = [1, 2, 3, 4]

var productExceptSelf = function (nums) {
    const result = []
    let prefix = 1;
    for (let index = 0; index < nums.length; index++) {
        result[index] = prefix
        prefix = prefix * nums[index]
    }

    let suffix = 1;
    for (let index = nums.length - 1; index >= 0; index--) {
        result[index] = suffix * result[index]
        suffix = suffix * nums[index]

    }
    return result
}

console.log(productExceptSelf(nums));
