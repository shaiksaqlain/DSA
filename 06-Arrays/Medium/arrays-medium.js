//########################################################## Two Sum ###############################################
function twoSum(array, k) {
    let l = 0, r = array.length - 1;
    while (l < r) {
        let sum = array[l] + array[r];
        if (sum == k) {
            return [l, r];
        }
        if (sum > k) {
            r--;
        }
        if (sum < k) {
            l++
        }
    }
}
function twoSumV1(array, k) {
    const hashMap = {};
    for (let i = 0; i < array.length; i++) {
        const compliment = k - array[i];
        if (hashMap[compliment]) {
            return [hashMap[compliment], i]
        }
        hashMap[array[i]] = i
    }
}
// const array = [2, 6, 5, 8, 11], k = 14;
// console.log(twoSumV1(array, k));

//########################################################## Sort Colors ###############################################
// Better approach 
function sortColors(array) {
    const hashMap = {}
    for (let i = 0; i < array.length; i++) {
        hashMap[array[i]] = (hashMap[array[i]] || 0) + 1
    }
    for (let j = 0; j < hashMap[0]; j++) {
        array[j] = 0
    }
    for (let k = hashMap[0]; k < hashMap[0] + hashMap[1]; k++) {
        array[k] = 1
    }
    for (let l = hashMap[0] + hashMap[1]; l < hashMap[0] + hashMap[1] + hashMap[2]; l++) {
        array[l] = 2
    }
    return array;
}

// Optimal approach - Dutch National flag algorithm. 
function sortColorsv1(array) {
    let low = 0, mid = 0, high = array.length - 1

    while (mid <= high) {
        if (array[mid] == 0) {
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++
        } else if (array[mid] == 1) {
            mid++
        } else {
            [array[high], array[mid]] = [array[mid], array[high]];
            high--;
        }
    }

    return array;
}
// const array = [2, 0, 2, 1, 1, 0]
// console.log(sortColors(array))

//########################################################## Find the Majority Element that occurs more than N/2 times ###############################################

// better approach
function majorityElementNbyTwo(array) {
    const hashMap = {}
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        hashMap[array[i]] = (hashMap[array[i]] || 0) + 1
        if (hashMap[array[i]] > (array.length / 2)) {
            max = array[i];
        }
    }
    return max
}

// Optimal Approach: Moore’s Voting Algorithm:
function majorityElementNbyTwoV1(array) {
    let count = 0
    let element = 0
    for (let i = 0; i < array.length; i++) {
        if (count == 0) {
            element = array[i]
            count = 1
        } else if (element == array[i]) {
            count++
        } else {
            count--
        }
    }
    let elementCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            elementCount++
        }
    }
    if (elementCount > (array.length / 2)) {
        return element
    }
    return -1
}

// const array = [3, 2, 3]
// console.log(majorityElementNbyTwoV1(array))

//########################################################## Kadane's Algorithm : Maximum Subarray Sum in an Array ###############################################
// better approach
function findMaximum(array) {
    let maximum = -Infinity;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        if (sum < 0) {
            sum = 0
        }

        if (sum > maximum) {
            maximum = sum;
        }
    }
    return [startPoint, endPoint]
}

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log(findMaximum(array))

//########################################################## Follow UP Question Kadane's Algorithm : Maximum Subarray Sum in an Array ###############################################
// better approach
function findMaximum(array) {
    let maximum = -Infinity;
    let startPoint = -1
    let endPoint = -1

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]

        const start = -1
        if (sum == 0) {
            start = i
        }

        if (sum < 0) {
            sum = 0
        }

        if (sum > maximum) {
            maximum = sum;
            startPoint = start;
            endPoint = i;
        }
    }
    return [startPoint, endPoint]
}

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log(findMaximum(array))

//########################################################## Stock Buy And Sell ###############################################
// optimal approach
function buySellStock(array) {
    if (!array.length) return 0;
    let buy = array[0], maxProfit = 0;
    for (let i = 0; i < array.length; i++) {
        if (buy > array[i]) {
            buy = array[i]
        }
        if (array[i] - buy > maxProfit) {
            maxProfit = array[i] - buy
        }
    }
    return maxProfit
}
// const array = [7, 1, 5, 3, 6, 4]
// console.log(buySellStock(array))

//########################################################## Rearrange Array Elements by Sign ###############################################

function rearrangeElementsBySign(array) {
    const result = new Array(array.length).fill(0)
    let posiitiveCounter = 0
    let negativeCounter = 1
    let foundPostive = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result[counter] = array[i]
            posiitiveCounter = posiitiveCounter + 2
        } else {
            result[counter] = array[i]
            negativeCounter = negativeCounter + 2
        }
    }
}

// const array = [1, 2, -4, -5]
// console.log(rearrangeElementsBySign(array))

//#################################### next_permutation : find next lexicographically greater permutation ###############################################
//check from last find the sub- array will became large by re arranging it?
// find array[i]< array[i+1] consider it as index or pivot
// find least largest value compared with pivot in sub array.
// reverse the sub array from pivot to n-1

function reverseArray(array, l, r) {
    while (l <= r) {
        [array[l], array[r]] = [array[r], array[l]]
        l++
        r--
    }
    return array
}

function findNextPermutation(array, n) {
    let index = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (array[i + 1] > array[i]) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return array.reverse()
    }
    for (let i = n - 1; i > index; i--) {
        if (array[i] > array[index]) {
            [array[i], array[index]] = [array[index], array[i]]
            break;
        }
    }
    array = reverseArray(array, index + 1, n - 1)
    return array;
}

// const array = [1, 2, 3, 6, 5, 4]
// console.log(findNextPermutation(array, array.length))


//#################################### Leaders in an Array ###############################################

function leadersOfAnArray(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1] && i < array.length - 1) {
            result.push(array[i])
        }
        if (i == array.length - 1) {
            result.push(array[i])
        }
    }
    return result;
}


// const array = [4, 7, 1, 0]
// console.log(leadersOfAnArray(array, array.length))

//#################################### Longest Consecutive Sequence in an Array ###############################################
// check array[i]-1 is present or not if present skip it
// if not start looping check the values 

// O(n2)=> O(n*n)
function longestConsectiveSequence(array) {
    let maxCount = 0;
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array.includes(array[i] - 1)) {
            continue;
        }
        let value = array[i] + 1;
        let count = 1;
        while (array.includes(value)) {
            count++
            value++
            maxCount = Math.max(count, maxCount)
        }
    }
    return maxCount;
}

function longestConsectiveSequencev1(array) {
    const hashSet = new Set()
    let maxCount = 0
    for (let i = 0; i < array.length; i++) {
        hashSet.add(array[i])
    }
    for (item of hashSet) {
        if (!hashSet.has(item - 1)) {
            let count = 1
            let value = item + 1
            while (hashSet.has(value)) {
                count++
                value++
            }
            maxCount = Math.max(count, maxCount)
        }
    }
    return maxCount;
}
// const array = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
// console.log(longestConsectiveSequencev1(array))

//#################################### Set Matrix Zero ###############################################
function setMatrixZero(array) {
    let rowIndex = new Set()
    let colIndex = new Set()
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 0) {
                rowIndex.add(i)
                colIndex.add(j)
            }
        }
    }
    for (i of rowIndex) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = 0
        }
    }
    for (i of colIndex) {
        for (let j = 0; j < array.length; j++) {
            array[j][i] = 0
        }
    }
    return array
}

const matrix = [[0, 2, 3], [4, 5, 6], [7, 0, 9],];
console.log(setMatrixZero(matrix));


//#################################### Rotate Image by 90 degree ###############################################
//better solution
function rotateBy90(array) {
    let result = Array.from({ length: array.length }, () => []);

    let matrixLen = array.length - 1
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result[j][matrixLen] = array[i][j]
        }
        matrixLen--
    }
    return result
}


//optimal solution
function rotateBy90V1(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array[i].length; j++) {
            [array[i][j], array[j][i]] = [array[j][i], array[i][j]]
        }
    }
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].reverse();

    }
    return array
}
// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];
// console.log(rotateBy90(matrix));

//####################################  Spiral Traversal of Matrix###############################################
//better solution
function spiralMatrix(matrix) {
    let top = 0, bottom = matrix.length,
        left = 0, right = matrix[0].length;
    const result = []
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
            result.push(matrix[top][i])
        }
        top++

        for (let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1])
        }
        right--

        if (top < bottom) {
            for (let i = right - 1; i >= left; i--) {
                result.push(matrix[bottom - 1][i])
            }
            bottom--
        }
        if (left < right) {
            for (let i = bottom - 1; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++
        }
    }
    return result
}


// const matrix = [[1, 2, 3, 4], [10, 11, 12, 5][9, 8, 7, 6]]
// console.log(spiralMatrix(matrix));


//#################################### Count Subarray sum Equals K ###############################################

function countSubArraySum(array, k) {
    let count = 0;
    const hashMap = { '0': 1 };
    let presum = 0
    for (let i = 0; i < array.length; i++) {
        presum += array[i]
        const compliment = presum - k
        count += hashMap[compliment] || 0
        hashMap[presum] = (hashMap[presum] || 0) + 1
    }
    return count;
}

const array = [3, 4, 7, 2, -3, 1, 4, 2], k = 7
console.log(countSubArraySum(array, k));