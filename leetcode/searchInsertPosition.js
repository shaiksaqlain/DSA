// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


const nums = [1, 3, 5, 6], target = 4

var searchInsert = function (nums, target) {
    let l = 0, r = nums.length;

    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        console.log({ l, r, mid });
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] > target) {
            r = mid;
        }
        if (nums[mid] < target) {
            l = mid + 1
        }
    }

    
    return l;
};

console.log(searchInsert(nums, target));
