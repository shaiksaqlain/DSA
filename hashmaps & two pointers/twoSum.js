// Two Integer Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]

const nums = [3, 4, 5, 6], target = 7

function twoSum(nums, target) {
    let hashMap = {}

    for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        if (diff in hashMap)
            return [hashMap[diff], index];
        hashMap[nums[index]] = index;
    }
    return false
}

console.log(twoSum(nums, target));
