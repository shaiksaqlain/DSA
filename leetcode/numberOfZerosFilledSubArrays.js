/**
 * LeetCode Problem 2348: Number of Zero-Filled Subarrays
 * 
 * Description:
 * Given an integer array `nums`, return the number of subarrays filled with 0.
 * 
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * Example 1:
 * Input: nums = [1,3,0,0,2,0,0,4]
 * Output: 6
 * Explanation: 
 * There are 6 subarrays filled with 0:
 * [0], [0], [0,0], [0], [0], [0,0]
 * 
 * Example 2:
 * Input: nums = [0,0,0,2,0,0]
 * Output: 9
 * Explanation:
 * There are 9 subarrays filled with 0:
 * [0], [0], [0], [0,0], [0,0], [0,0,0], [0], [0], [0,0]
 * 
 * Example 3:
 * Input: nums = [2,10,2019]
 * Output: 0
 * Explanation: There are no subarrays filled with 0.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */

const nums = [0, 0, 0, 2, 0, 0];
var zeroFilledSubarray = function (nums) {
    let result = 0;
    let zeros = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == 0) {
            zeros += 1
        } else {
            result = result + (zeros * (zeros + 1) / 2)
            zeros = 0
        }
    }
    if (zeros) {
        result = result + (zeros * (zeros + 1) / 2)
    }
    return result
};

console.log(zeroFilledSubarray(nums))
