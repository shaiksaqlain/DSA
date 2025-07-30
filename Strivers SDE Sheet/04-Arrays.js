//####################################### Two Sum : Check if a pair with given sum exists in Array ########################################


function twoSum(array, target) {
    const hashMap = {}
    for (let i = 0; i < array.length; i++) {
        const compliment = target - array[i];
        if (compliment in hashMap) {
            return [i, hashMap[compliment]]
        }
        hashMap[array[i]] = i
    }
}
// const array = [2, 6, 5, 8, 11], target = 14;
// console.log(twoSum(array, target));

//####################################### Three Sum  ########################################


function threeSum(array, target) {
    array = array.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue;
        let j = i + 1, k = array.length - 1;
        while (j < k) {
            const sum = array[i] + array[j] + array[k];
            if (sum == target) {
                result.push([array[i], array[j], array[k]])
                j++
                k--
                while (j < k && array[j] == array[j - 1]) j++;
                while (j < k && array[k] == array[k + 1]) k--;
            } else if (sum > target) {
                k--
            } else {
                j++
            }
        }
    }
    return result;
}

const array = [-1, 0, 1, 2, -1, -4], target = 0;
console.log(threeSum(array, target));


//####################################### Four Sum | Find Quads that add up to a target value ########################################


function fourSum(array, target) {
    array = array.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue;

        for (let j = i + 1; j < array.length; j++) {
            if (j > i + 1 && array[j] == array[j - 1]) continue;
            let k = j + 1, l = array.length - 1

            while (k < l) {
                const sum = array[i] + array[j] + array[k] + array[l];
                if (sum == target) {
                    result.push([array[i], array[j], array[k], array[l]])
                    k++
                    l--
                    while (k < l && array[k] == array[k - 1]) k++
                    while (k < l && array[l] == array[l + 1]) l--
                } else if (sum > target) {
                    l--
                } else {
                    k++
                }
            }

        }
    }
    return result;
}

// const array = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1], target = 9;
// console.log(fourSum(array, target));

//####################################### Longest Consecutive Sequence in an Array ########################################

function longestConsecutive(params) {
    const set = new Set();
    let maxCount = 0
    for (let i = 0; i < array.length; i++) {
        set.add(array[i])
    }

    for (element of set) {
        if (set.has(element - 1)) {
            continue;
        }
        let count = 1
        let nextElement = element + 1
        while (set.has(nextElement)) {
            count++
            nextElement++
            maxCount = Math.max(maxCount, count)
        }
    }
    return maxCount;
}

// const array = [3, 8, 5, 7, 6]
// console.log(longestConsecutive(array));


//####################################### Largest Subarray with K sum ########################################

function largestSubArrayOfKSum(array, target) {
    const hashMap = new Map();
    let prefixSum = 0;
    let max = 0
    for (let i = 0; i < array.length; i++) {
        prefixSum += array[i];
        if (prefixSum == target) {
            max = i + 1
        }
        if (hashMap.has(prefixSum - target)) {
            const previousIndex = hashMap.get(prefixSum - target)
            max = Math.max(max, i - previousIndex)
        }

        if (!hashMap.has(prefixSum)) {
            hashMap.set(prefixSum, i)
        }
    }
    return max;
}

// const array = [6, -2, 2, -8, 1, 7, 4, -10], target = 0
// console.log(largestSubArrayOfKSum(array, target));


//####################################### Number od Subarray with K sum ########################################

function numberSubArrayOfKSum(array, target) {
    const hashMap = { 0: 1 }
    let prefixSum = 0;
    let count = 0
    for (let i = 0; i < array.length; i++) {
        prefixSum += array[i]
        const compliment = prefixSum - target;
        count += hashMap[compliment] || 0;
        hashMap[prefixSum] = (hashMap[prefixSum] || 0) + 1

    }
    return count;
}

// const array = [3, 1, 2, 4], target = 6
// console.log(numberSubArrayOfKSum(array, target));

//####################################### Count the number of subarrays with given xor K ########################################
function numberSubArrayOfKXOR(array, k) {
    let count = 0;
    let xor = 0;
    const hashMap = { 0: 1 };
    for (let i = 0; i < array.length; i++) {
        xor = xor ^ array[i];
        const x = xor ^ k;
        count += (hashMap[x] || 0)
        hashMap[xor] = (hashMap[xor] || 0) + 1
    }
    return count;
}


// const array = [4, 2, 2, 6, 4], k = 6
// console.log(numberSubArrayOfKXOR(array, k));

//####################################### Length of Longest Substring without any Repeating Character ########################################

function lengthOfLongestSubString(str) {
    const hashMap = {};
    let length = 0;
    let l = 0, r = 1;
    while (r < str.length) {
        if (str[r] in hashMap) {
            l = Math.max(l, hashMap[str[r]] + 1)
        }
        hashMap[str[r]] = r;
        length = Math.max(length, r - l + 1)
        r++
    }
    return length
}

const str = 'abcabcbb';
console.log(lengthOfLongestSubString(str));