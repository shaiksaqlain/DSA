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

const nums = [1, 2, 0, 2, 3, 0, 1]
// const nums = [0]
var moveZeroes = function (nums) {
    let counter = 0
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== 0) {
            nums[counter++] = nums[index]
        }
    }
    while (counter < nums.length) {
        nums[counter++] = 0
    }
    return nums;
};


console.log(moveZeroes(nums));
