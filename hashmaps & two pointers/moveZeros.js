// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

const nums = [1, 0, 1]
// const nums = [0]
var moveZeroes = function (nums) {
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[i] == 0 && nums[j] != 0) {
            nums[i] = nums[j]
            nums[j] = 0
            i++
        }
        if (nums[i] != 0) {
            i++
        }
        j++
    }
    return nums
};


console.log(moveZeroes(nums));
