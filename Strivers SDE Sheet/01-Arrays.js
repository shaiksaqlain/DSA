
//#################################### Set Matrix Zero ###############################################
function setMatrixZero(array) {
    const rowZeros = new Set()
    const columnZeros = new Set()

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 0) {
                rowZeros.add(i)
                columnZeros.add(j)
            }
        }
    }

    for (i of rowZeros) {
        for (let j = 0; j < array.length; j++) {
            array[i][j] = 0
        }
    }
    for (i of columnZeros) {
        for (let j = 0; j < array.length; j++) {
            array[j][i] = 0
        }
    }
    return array
}

const array = [[1, 0, 3], [4, 5, 6], [0, 8, 9]];
console.log(setMatrixZero(array));

//#################################### Pascal triangle ###############################################
function findElementInPascal(r, c) {
    let result = 1;
    for (let i = 1; i < c; i++) {
        result = result * (r - i)
        result = result / i
    }
    return result
}

function printNthRowInPascal(n) {
    let result = 1;
    let pascalRow = result + " "
    for (let i = 1; i < n; i++) {
        result = result * (n - i)
        result = result / i
        pascalRow = pascalRow + result + ' '
    }
    return pascalRow;
}

function printPascalTriangle(n) {
    for (let j = 1; j <= n; j++) {
        const result = printNthRowInPascal(j);
        console.log(result);
    }
}
// const n = 5, r = 5, c = 3;
// console.log(findElementInPascal(r, c))
// console.log(printNthRowInPascal(n))
// console.log(printPascalTriangle(n))

//#################################### Next Permutation ###############################################
function reverseArray(arr, left, right) {

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

function nextPermutation(array) {
    let pivot = -1;
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i + 1] > array[i]) {
            pivot = i;
            break;
        }
    }
    if (pivot === -1) {
        return reverseArray(array, 0, array.length - 1);
    }

    for (let i = array.length - 1; i > pivot; i--) {
        if (array[i] > array[pivot]) {
            [array[i], array[pivot]] = [array[pivot], array[i]]
            break;
        }
    }

    return reverseArray(array, pivot + 1, array.length - 1)
}
// const array = [1, 2, 3, 6, 5, 4]
// console.log(nextPermutation(array))



//#################################### Kadane's Algorithm : Maximum Subarray Sum in an Array ###############################################

function maximumSumInSubArray(array) {
    let maximumSum = -Infinity;
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
        if (sum < 0) {
            sum = 0
        } else if (sum > maximumSum) {
            maximumSum = sum;
        }
    }
    return maximumSum
}

// const array = [4, -1, 2, 1]
// console.log(maximumSumInSubArray(array))


//#################################### Sort an array of 0s, 1s and 2s ###############################################

function sort012(array) {
    let low = 0, mid = 0, high = array.length - 1;
    while (mid <= high) {
        if (array[mid] == 0) {
            [array[low], array[mid]] = [array[mid], array[low]]
            low++
            mid++
        } else if (array[mid] == 1) {
            mid++
        } else {
            [array[high], array[mid]] = [array[mid], array[high]]
            high--
        }
    }
    return array;
}

// const array = [2, 0, 2, 1, 1, 0]
// console.log(sort012(array))


//#################################### Stock Buy And Sell ###############################################


function buySellStock(array) {
    let stockBought = array[0];
    let maxProfit = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] < stockBought) {
            stockBought = array[i]
        } else if (maxProfit < array[i] - stockBought) {
            maxProfit = array[i] - stockBought
        }
    }
    return maxProfit;
}

// const array = [7, 1, 5, 3, 6, 4]
// console.log(buySellStock(array))