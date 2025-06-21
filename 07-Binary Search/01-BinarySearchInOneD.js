//########################################################## Binary Search: Explained ###############################################

function binarySearch(array, target) {
    let low = 0, high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1
}

//Recursive binary search

function binarySearchRecursive(array, target, low, high) {
    if (low > high) {
        return -1
    }
    const mid = Math.floor((low + high) / 2)
    if (array[mid] == target) {
        return mid;
    } else if (array[mid] > target) {
        return binarySearchRecursive(array, target, low, mid - 1)
    } else {
        return binarySearchRecursive(array, target, mid + 1, high)
    }
}

// const ls = [1, 3, 5, 7, 9], target = 9;

// const ls = [3, 4, 6, 7, 9, 12, 16, 17], target = 6;
// console.log(binarySearchRecursive(ls, target, 0, ls.length - 1));
// console.log(binarySearch(ls, target));


//########################################################## Binary Search: Lower Boundry ###############################################
function lowerBoundry(array, target) {
    let low = 0, high = array.length - 1;
    let ans = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] >= target) {
            ans = mid;
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }
    return ans
}

// const ls = [1, 3, 5, 7, 9], target = 9;
// const ls = [1, 2, 4, 4, 6, 9], target = 5;
// console.log(lowerBoundry(ls, target));


//########################################################## Binary Search: upper  Boundry ###############################################
function upperBound(array, target) {
    let low = 0, high = array.length - 1;
    let ans = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] > target) {
            ans = mid;
            high = mid - 1
        } else {
            low = mid + 1;
        }
    }
    return ans
}

// const array = [3, 5, 8, 9, 15, 19], target = 9;

// console.log(upperBound(array, target)); //4




//########################################################## Binary Search:Search Insert Position ###############################################
function searchIndexPosition(array, target) {
    let low = 0, high = array.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low
}

// const array = [10, 20, 30, 40], target = 25;

// console.log(searchIndexPosition(array, target)); 


//########################################################## Binary Search:Floor and Ceil in Sorted Array ###############################################

function floorAndCeil(array, target) {
    let low = 0, high = array.length - 1;
    let floor = -1;
    let ceil = -1;

    // ceil
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)

        if (array[mid] >= target) {
            high = mid - 1
            ceil = mid
        } else {
            low = mid + 1;
        }
    }


    low = 0, high = array.length - 1;
    // floor 
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)

        if (array[mid] <= target) {
            low = mid + 1;
            floor = mid
        } else {

            high = mid - 1
        }
    }
    return [array[ceil], array[floor]]
}


// const array = [3, 4, 4, 7, 8, 10], target = 8;
// console.log(floorAndCeil(array, target)); 



//########################################################## Binary Search:Last occurrence in a sorted array ###############################################
function lastOccuranceInASortedArray(array, target) {
    let low = 0, high = array.length - 1;
    let ans = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] == target) {
            ans = mid
            low = mid + 1
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
}

// const array = [3, 4, 13, 13, 13, 20, 40], target = 13;

// console.log(lastOccuranceInASortedArray(array, target)); 

//########################################################## Binary Search: Count Occurrences in Sorted Array ###############################################

function findFirstIndex(array, target) {
    let low = 0, high = array.length - 1;
    let firstIndex = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] == target) {
            firstIndex = mid
            high = mid - 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return firstIndex;
}

function findLastIndex(array, target) {
    let low = 0, high = array.length - 1;
    let lastIndex = -1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] == target) {
            lastIndex = mid
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return lastIndex;
}
function countOccurrenceInASortedArray(array, target) {
    const firstIndex = findFirstIndex(array, target)
    const lastIndex = findLastIndex(array, target)
    if (firstIndex == -1 && lastIndex == -1)
        return -1
    return lastIndex - firstIndex + 1;
}

// const array = [2, 2, 3, 3, 3, 3, 4], target = 3;
// console.log(countOccurrenceInASortedArray(array, target)); 


//########################################################## Binary Search: Search in Rotated Sorted Array I ###############################################

function rotateSortedArray(array, target) {
    let low = 0, high = array.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] >= array[low]) {
            if (target >= array[low] && target <= array[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (target >= array[mid] && target <= array[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}

// const array = [4, 5, 6, 7, 0, 1, 2], target = 5
// console.log(rotateSortedArray(array, target));



//########################################################## Binary Search: Search in Rotated Sorted Array IIy ###############################################

function rotateSortedArrayV2(array, target) {
    let low = 0, high = array.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (array[mid] == target) {
            return true;
        }
        if (array[low] == array[mid] && array[high] == array[mid]) {
            high--
            low++
        }
        if (array[mid] >= array[low]) {
            if (target >= array[low] && target <= array[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (target >= array[mid] && target <= array[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return false
}

// const array = [1, 1, 1, 1, 1, 1, 1], target = 2
// console.log(rotateSortedArrayV2([1, 1, 3, 1], 3));



//########################################################## Binary Search: Minimum in Rotated Sorted Array ###############################################

function findMinimum(array) {
    let low = 0, high = array.length - 1
    let ans = Infinity
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        ans = Math.min(ans, array[low])

        if (array[mid] >= array[low]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return ans
}

// const array = [4, 5, 6, 7, 0, 1, 2, 3]
// console.log(findMinimum(array));



//########################################################## Binary Search: find how many times rotated. ###############################################

function findRotation(array) {
    let low = 0, high = array.length - 1
    let index = -1, ans = Infinity;
    while (low <= high) {

        const mid = Math.floor((low + high) / 2)
        if (array[low] <= array[high]) {
            if (array[low] < ans) {
                ans = array[low];
                index = low;
            }
            break;
        }

        if (array[low] <= array[mid]) {
            if (ans >= array[mid]) {
                ans = array[mid]
                index = mid
            }
            low = mid + 1
        } else {
            if (ans >= array[mid]) {
                ans = array[mid]
                index = mid
            }
            high = mid - 1
        }
    }

    return [{ ratationAt: index, minimum: ans }]
}

// const array = [4, 5, 6, 7, 0, 1, 2, 3]
// console.log(findRotation(array));

//########################################################## Binary Search:Search Single Element in a sorted array ###############################################

function searchSingle(array) {
    let low = 0, high = array.length - 1
    while (low <= high) {

        const mid = Math.floor((low + high) / 2)
        if (array[mid - 1] != array[mid] && array[mid] != array[mid + 1]) {
            return array[mid]
        }

        if ((mid % 2 == 1 && array[mid] == array[mid - 1]) || (mid % 2 == 0 && array[mid] == array[mid + 1])) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1;
}

// const array = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
// console.log(searchSingle(array));



//########################################################## Binary Search: Find Peak ###############################################

function findPeak(array) {
    let low = 1, high = array.length - 1, len = array.length
    if (len - 1 == 1) return array;
    if (array[0] > array[1]) return array[0]
    if (array[len - 1] > array[len - 2]) return array[len - 1]

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
            return { index: mid, value: array[mid] }
        }

        if (array[mid] > array[mid - 1]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1]
console.log(findPeak(array));