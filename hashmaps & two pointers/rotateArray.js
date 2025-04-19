// 189. Rotate Array
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105


const nums = [1, 2], k = 3

function reverseArray(left, right, nums) {
    while (left < right) {
        const temp = nums[right]
        nums[right] = nums[left]
        nums[left] = temp
        left++
        right--
    }
    return nums
}

var rotate = function (nums, k) {

    // if K is greater than the length of array because if k=4 and nums length = 3. 
    // we can consider k=1 because both are equal 
    k = k % nums.length

    // reverse the entire array
    let left = 0, right = nums.length - 1;
    nums = reverseArray(left, right, nums)

    // reverse the first sub  array
    left = 0, right = k - 1;
    nums = reverseArray(left, right, nums)

    // reverse the second sub  array
    left = k, right = nums.length - 1;
    nums = reverseArray(left, right, nums)
    return nums
}

console.log(rotate(nums, k));
