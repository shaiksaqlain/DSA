function twoSum(array, target) {
    const hashMap = {}
    for (let i = 0; i < array.length; i++) {
        const compliment = target - array[i]
        if (compliment in hashMap) {
            return [hashMap[compliment], i]
        }
        hashMap[array[i]] = i
    }
    return [-1, -1]
}

// const array = [2, 6, 5, 8, 11], target = 15
// console.log(twoSum(array, target));

function sort1sAnd0s(array) {
    let low = 0, mid = 0, high = array.length - 1
    while (mid < high) {
        if (array[mid] == 0) {
            [array[mid], array[low]] = [array[low], array[mid]]
            low++
            mid++
        } else if (array[mid] == 1) {
            mid++
        } else if (array[mid] == 2) {
            [array[high], array[mid]] = [array[mid], array[high]]
            high--
        }

    }
    return array
}

// const array = [2, 0, 2, 1, 1, 0]
// console.log(sort1sAnd0s(array));

function majority(array) {
    let element = -1;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (count == 0) {
            element = array[i]
            count++
        } else if (array[i] == element) {
            count++
        } else {
            count--
        }
    }

    for (let j = 0; j < array.length; j++) {
        if (array[j] == element) {
            count++
        }
    }

    if (count >= Math.floor(array.length / 2)) {
        return element
    }
    return -1
}
// const array = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4]
// console.log(majority(array));




function MaximumSubArray(array) {
    let sum = -Infinity;
    let maxSum = -Infinity;
    let tempstart = 0
    let startPoint = 0;
    let endPoint = 0;
    for (let i = 0; i < array.length; i++) {
        if (sum == 0) {
            tempstart = i
        }
        sum += array[i];
        if (sum < 0) {
            sum = 0
        }
        if (sum > maxSum) {
            maxSum = sum
            startPoint = tempstart
            endPoint = i
        }
    }
    console.log({ startPoint }, { endPoint });

    return maxSum;
}
// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log(MaximumSubArray(array));


function buySellStock(array) {
    if (array.length == 0) return -1;
    let buyStock = array[0]
    let maxProfit = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < buyStock) {
            buyStock = array[i]
        }
        if (maxProfit < array[i] - buyStock) {
            maxProfit = array[i] - buyStock
        }
    }

    return maxProfit
}


// const array = [7, 1, 5, 3, 6, 4]
// console.log(buySellStock(array));

function reverseArray(array, i, j) {
    while (i < j) {
        [array[i], array[j]] = [array[j], array[i]]
        i++
        j--
    }
    return array;
}

function nextPermuntation(array) {
    let index = -1
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] < array[i + 1]) {
            index = i;
            break
        }
    }
    if (index == -1) {
        return array.reverse();
    }
    for (let i = array.length - 1; i > index; i--) {
        if (array[index] < array[i]) {
            [array[index], array[i]] = [array[i], array[index]]
            break;
        }
    }
    array = reverseArray(array, index + 1, array.length - 1)
    return array;
}

// const array = [2, 4, 3, 1]
// console.log(nextPermuntation(array));

function longestConsecutive() {
    const hashSet = new Set()
    let maxCount = 0
    for (let i = 0; i < array.length; i++) {
        hashSet.add(array[i])
    }
    for (let j = 0; j < array.length; j++) {
        if (hashSet.has(array[j] - 1)) {
            continue;
        }
        let count = 1;
        let value = array[j] + 1
        while (hashSet.has(value)) {
            count++
            value++
        }
        maxCount = Math.max(count, maxCount)
    }
    return maxCount;
}

// const array = [3, 8, 5, 7, 6]
// console.log(longestConsecutive(array));


function setZeros(array) {
    const rowIndexs = new Set()
    const colIndexs = new Set()
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] == 0) {
                rowIndexs.add(i)
                colIndexs.add(j)
            }
        }
    }

    for (i of rowIndexs) {
        for (let j = 0; j < array[0].length; j++) {
            array[i][j] = 0
        }
    }
    for (i of colIndexs) {
        for (let j = 0; j < array.length; j++) {
            array[j][i] = 0
        }
    }
    return array
}

// const array = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// console.log(setZeros(array));



function rotateMatrix(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array[i].length; j++) {
            [array[i][j], array[j][i]] = [array[j][i], array[i][j]]
        }
    }
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].reverse()
    }

    return array
}


// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(rotateMatrix(array));


function spiralMatrix(matrix) {
    let top = 0, bottom = matrix.length;
    let left = 0, right = matrix[0].length;
    const result = []

    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            result.push(matrix[top][i])
        }
        top++
        console.log(right - 1);

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
// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// console.log(spiralMatrix(matrix));

// Count Subarray sum Equals K

function countSubarraysumEqualsK(array, k) {
    const hashMap = { 0: 1 };
    let count = 0
    let prefixSum = 0
    for (let i = 0; i < array.length; i++) {
        prefixSum += array[i];

        const compliment = prefixSum - k;
        count += (hashMap[compliment] || 0)

        hashMap[prefixSum] = (hashMap[prefixSum] || 0) + 1
    }
    return count;
}

const array = [1,2,3], k = 3
console.log(countSubarraysumEqualsK(array, k));