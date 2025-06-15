//####################################### Find the elements that appears more than N/3 times in the array ########################################
function findNBy3(array) {
    let element1 = null, element2 = null, count1 = 0, count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (count1 == 0 && array[i] != element2) {
            element1 = array[i]
            count1++
        } else if (count2 == 0 && array[i] != element1) {
            element2 = array[i]
            count2++
        } else if (array[i] == element1) {
            count1++
        } else if (array[i] == element2) {
            count2++
        } else {
            count1--
            count2--
        }
    }
    count1 = 0, count2 = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] == element1) count1++
        if (array[index] == element2) count2++
    }
    const majorityCheck = Math.floor(array.length / 3);
    const result = []
    if (count1 > majorityCheck && element1 != null)
        result.push(element1)
    if (count2 > majorityCheck && element2 != null)
        result.push(element2)
    return result;
}
// const array = [0, 0, 0]
// const array = [11, 33, 33, 11, 33, 11]
// console.log(findNBy3(array))

//####################################### 3 Sum : Find triplets that add up to a zero ########################################

function threeSum(array) {
    const result = []
    array = array.sort()
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue
        let j = i + 1, k = array.length - 1
        while (j < k) {
            const sum = array[i] + array[j] + array[k]
            if (sum === 0) {
                result.push([array[i], array[j], array[k]])
                j++
                k--
                while (j < k && array[j] == array[j - 1]) continue
                while (j < k && array[k] == array[k - 1]) continue
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return result;
}

//t0 -> [-1, 0, 1, 2, -1, -4]
//t1 -> [1, 2, 3, 4]
//t2 -> [0, 0, 0, 0]
// const array = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(array))




//####################################### 4 Sum | Find Quads that add up to a target value ########################################

function fourSum(array, target) {
    const result = []
    array = array.sort((a, b) => a - b)
    for (let i = 0; i < array.length - 3; i++) {
        if (i > 0 && array[i] == array[i - 1]) continue
        for (let j = i + 1; j < array.length - 2; j++) {
            if (j > i + 1 && array[j] == array[j - 1]) continue
            let k = j + 1, l = array.length - 1
            while (k < l) {
                const sum = array[i] + array[j] + array[k] + array[l]
                if (sum === target) {
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
};
//t0 ->  [1,0,-1,0,-2,2], target = 0
//t1 ->  [4,3,3,4,4,2,1,2,1,1], target = 9
// const array = [-1, 0, -5, -2, -2, -4, 0, 1, -2], target = -9
// console.log(fourSum(array, target));

//####################################### Length of the longest subarray with zero Sum ########################################


function longestSubArrayWithLengthZero(array, target) {
    const hashMap = { 1: 2 };


    let sum = 0, max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (sum == target) {
            max = Math.max(max, i + 1);
        } else {
            if (sum in hashMap) {
                max = Math.max(max, i - hashMap[sum]);
            } else {
                hashMap[sum] = i
            }
        }
    }
    return max
}

// const array = [9, -3, 3, -1, 6, -5], target = 0
// console.log(longestSubArrayWithLengthZero(array, target));


//####################################### Count the number of subarrays with given xor K ########################################


function countNumberofSubArraysXOROfK(array, k) {
    const hashMap = { 0: 1 };
    let xor = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
        xor = xor ^ array[i];
        const x = xor ^ k

        count += hashMap[x] || 0;
        hashMap[xor] = (hashMap[xor] || 0) + 1
    }
    return count;
}

// const array = [4, 2, 2, 6, 4], k = 6
// const array = [1, 2, 3], k = 10
// console.log(countNumberofSubArraysXOROfK(array, k));



//####################################### Merge two Sorted Arrays Without Extra Space ########################################


function mergeTwoSortedArrays(arr1, arr2, m, n, arrLen) {
    while (m >= 0 && n >= 0) {
        if (arr1[m] > arr2[n]) {
            arr1[arrLen] = arr1[m]
            m--
        } else {
            arr1[arrLen] = arr2[n]
            n--
        }
        arrLen--
    }
    if (n > 0) {
        while (n >= 0) {
            arr1[arrLen] = arr2[n]
            n--;
            arrLen--;
        }
    }
    return arr1;
}

// const array = [4, 2, 2, 6, 4], k = 6

// const arr1 = [1, 3, 5], m = 3, arr2 = [2, 4, 6], n = 3
// const arr1 = [4, 5, 6, 0, 0, 0], m = 3;
// const arr2 = [1, 2, 3], n = 3;
// console.log(mergeTwoSortedArrays(arr1, arr2, m - 1, n - 1, m + n - 1));


//####################################### Merge Overlapping Sub-intervals ########################################

function mergeOverlaping(array) {
    array = array.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!result.length || result[result.length - 1][1] < array[i][0]) {
            result.push(array[i])
        } else {
            last = result[result.length - 1]
            if (last[1] >= array[i][0]) {
                last[1] = Math.max(last[1], array[i][1])
                result[result.length - 1] = last
            }
        }
    }
    return result;
}
// const array = [[1, 3], [2, 6], [8, 10], [15, 18]]
// console.log(mergeOverlaping(array));

//####################################### Find the repeating and missing numbers ########################################
function findRepeatedAndMissing(array) {
    const hashMap = {}
    let missing = -1, repeated = -1;
    for (let i = 0; i < array.length; i++) {
        hashMap[array[i]] = (hashMap[array[i]] || 0) + 1
    }
    for (let i = 1; i <= array.length; i++) {
        const count = hashMap[i] || 0;
        if (count === 0) {
            missing = i;
        } else if (count > 1) {
            repeated = i;
        }
    }

    return [repeated, missing]
}

// const array = [1, 2, 3, 4, 4]
// console.log(findRepeatedAndMissing(array));

//####################################### Maximum Product Subarray in an Array ########################################


function findMaximumProduct(array) {
    let prefix = 1, suffix = 1, max = -Infinity;
    for (let i = 0; i < array.length; i++) {

        if (suffix == 0) suffix = 1
        if (prefix == 0) prefix = 1

        prefix = prefix * array[i]
        suffix = suffix * array[array.length - 1 - i]
        max = Math.max(prefix, suffix, max)

    }
    return max;
}

const array = [1,2,-3,0,-4,-5]
console.log(findMaximumProduct(array));