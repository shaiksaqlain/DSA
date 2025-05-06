const nums = [1, 2, 3]

function hasDuplicate(nums) {
    const set = new Set();
    for (let index = 0; index < nums.length; index++) {
        if (set.has(nums[index])) {
            return true
        }
        set.add(nums[index])
    }
    return false
}
console.log(hasDuplicate(nums))
