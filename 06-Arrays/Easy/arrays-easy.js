//########################################################## Largest element in the array ###############################################

function findLargestNumber(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }

    }
    return max;
}

// const ls = [2, 5, 1, 3, 0]
// console.log(findLargestNumber(ls));



//########################################################## Second Largest element in the array ###############################################
// Better Approach 
function findSecondLargestNumberV1(array) {
    let max = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > secondLargest && array[i] != max) {
            secondLargest = array[i]
        }
    }
    return secondLargest;
}

// Optimal Approach 
function findSecondLargestNumberV2(array) {
    let max = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        } else if
            (array[i] > secondLargest && array[i] != max) {
            secondLargest = array[i]
        }

    }
    return secondLargest;
}

// const ls = [2, 5, 1, 3, 4, 0]
// console.log(findSecondLargestNumberV2(ls));




//########################################################## Check if the array is sorted  ###############################################
// Better Approach 

function checkArraySorted(array) {
    let isSorted = true;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            isSorted = false
        }
    }
    return isSorted;
}

// const array = [1, 2, 3, 4, 4, 5]
// console.log(checkArraySorted(array));



//########################################################## Remove duplicates from sorted array  ###############################################
// Better Approach with space
function removeDuplicates(array) {
    const hashSet = new Set();
    for (let i = 0; i < array.length; i++) {
        hashSet.add(array[i])

    }
    return hashSet;
}

// optimal Approach without space
function removeDuplicates(array) {
    let j = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[j] != array[i]) {
            j++
            array[j] = array[i];
        }
    }
    return j + 1;
}
// const array = [1, 1, 2, 2, 2, 3, 3]
// console.log(removeDuplicates(array));

//########################################################## Left Rotate the Array by One  ###############################################

function rotateArraybyOne(array) {
    const temp = array[0]
    const length = array.length - 1
    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i]
    }
    array[length] = temp
    return array
}
// const array = [1, 2, 3, 4, 5]
// console.log(rotateArraybyOne(array));

//########################################################## Rotate array by K elements  ###############################################
function reverseArray(array, l, r) {
    while (l <= r) {
        [array[l], array[r]] = [array[r], array[l]]
        l++
        r--
    }
    return array
}
function rotateArrayByK(array, k) {
    if (k == array.length) {
        return array
    }
    k = k % array.length;


    array = reverseArray(array, 0, array.length - 1);
    array = reverseArray(array, 0, k - 1);
    array = reverseArray(array, k, array.length - 1);
    return array
}
// const array = [1,2,3,4,5,6,7], k = 2
// console.log(rotateArrayByK(array, k));

//########################################################## Move zeros to end  ###############################################

function moveZerosToEnd(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] != 0) {
            array[count++] = array[i]
        }
    }
    for (let j = count; j < array.length; j++) {
        array[count++] = 0
    }
    return array
}
// const array = [1, 0, 2, 3, 0, 4, 0, 1]
// console.log(moveZerosToEnd(array));

//########################################################## Linear Search ###############################################

function linearSearch(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return i
        }
    }
    return -1
}
// const array = [1, 0, 2, 3, 0, 4, 0, 1], n = 4;
// console.log(linearSearch(array, n));

//########################################################## Union in Sorted Arrays ###############################################


function findUnionOfTwoSortedArrays(array1, array2, n, m) {
    const result = []
    let i = 0, j = 0;
    while (i < n && j < m) {
        if (array1[i] < array2[j]) {
            if (!result.includes(array1[i]))
                result.push(array1[i])
            i++
        } else {
            if (!result.includes(array2[j]))
                result.push(array2[j])
            j++
        }
    }
    while (i < n) {
        if (!result.includes(array1[i]))
            result.push(array1[i])
        i++
    }
    while (j < m) {
        if (!result.includes(array2[j]))
            result.push(array2[j])
        j++
    }
    return result;
}

// const n = 5, m = 5, array1 = [1, 2, 3, 4, 5], array2 = [2, 3, 4, 4, 5]
// const n = 10, m = 7, array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], array2 = [2, 3, 4, 4, 5, 11, 12]
// console.log(findUnionOfTwoSortedArrays(array1, array2, n, m))


//####################################################### Find the missing number in an array ###############################################

// this will work for only sorted array's
function findMissingElement(array, n) {
    for (let i = 0; i < n; i++) {
        if (array[i] != i + 1) {
            return i + 1;
        }
    }
    return -1
}

// optimal solution
function findMissingElementV2(array, n) {
    const totalSumOfN = ((n(n + 1)) / 2)
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum = sum + array[i]
    }
    return totalSumOfN - sum
}

// const array = [1,2,3,4,6], n = 5;
// console.log(findMissingElement(array, n));



//####################################################### Find the missing number in an array ###############################################

// this will work for only sorted array's
function ConsecutiveOnes(array) {
    let count = 0
    let maxCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            count = count + 1
            maxCount = Math.max(count, maxCount)
        } else {
            count = 0
        }
    }
    return maxCount
}

// const array = [1, 0, 1, 1, 0, 1];
// console.log(ConsecutiveOnes(array));

//####################################################### Find the number that appears once, and the other numbers twice ###############################################


function findNumberAppearsOnce(array) {
    const hashMap = {};
    let result = -1
    for (let i = 0; i < array.length; i++) {
        hashMap[array[i]] = (hashMap[array[i]] || 0) + 1

    }
    for (key in hashMap) {
        if (hashMap[key] == 1) {
            result = key
        }
    }
    return result;
}

function findNumberAppearsOnceV1(array) {
    const hashMap = new Map();
    let result = -1
    for (let i = 0; i < array.length; i++) {
        hashMap.set(array[i], (hashMap.get(array[i]) || 0) + 1);
    }

    for (const [key, value] of hashMap) {
        if (value == 1) {
            result = key
        }
    }
    return result;
}

function findNumberAppearsOnceV2(array) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result = result ^ array[i]
    }

    return result;
}

// const array = [4, 1, 2, 1, 2];
// console.log(findNumberAppearsOnceV2(array));

//################################################### Longest Subarray with given Sum K (Positives) ###########################################
function longestSubArrayOfSum(array, n, k) {
    let sum = 0;
    let maxLength = 0

    for (let l = 0; l < array.length; l++) {
        let r = l + 1
        sum += array[l]

        while (sum < k && r < array.length) {
            sum += array[r]
            r++
        }
        if (sum == k) {
            maxLength = Math.max(r - l, maxLength);
        }
        sum = 0

    }
    return maxLength;
}

const array = [1, 2, 3, 4, 5], n = 5, k = 3;
console.log(longestSubArrayOfSum(array, n, k));