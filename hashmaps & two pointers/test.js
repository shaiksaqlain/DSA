// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// let i = 0, j = ls.length - 1;

// while (i < j) {
//     if (ls[i] + ls[j] == target) {
//         console.log(i, j);
//         break;
//     }
//     if ((ls[i] + ls[j]) < target) {
//         i++;
//     }
//     if ((ls[i] + ls[j]) > target) {
//         j--;
//     }

// }


// const ls = [3, 2, 4], target = 6
// let hash = {}

// for (let index = 0; index < ls.length; index++) {
//     const diff = target - ls[index]
//     if (diff in hash) {
//         console.log([hash[diff], index]);
//         break;
//     }
//     hash[ls[index]] = index
// }


// const data = {
//     '3': 0,
//     '2': 1,
//     '4': 2
// }



// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]


let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let i = 1, j = 1;
while (j < nums.length) {
    if (nums[j] == nums[j - 1]) {
        j = j + 1
    }
    if (nums[j] != nums[j - 1]) {
        nums[i] = nums[j]
        i = i + 1;
        j = j + 1
    }
}
for (let index = i; index < nums.length; index++) {
    nums[index] = "_";

}
console.log(nums);

console.log(i);


