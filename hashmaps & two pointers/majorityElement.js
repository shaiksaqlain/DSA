// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


const nums = [2, 2, 1, 1, 1, 2, 2];


var majorityElement = function (nums) {
    let hashMap = {}
    let max = 0
    let value = 0
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1
        if (hashMap[nums[i]] > max) {
            max = hashMap[nums[i]]
            value = nums[i]
        }
    }
    return value
};

console.log(majorityElement(nums));

