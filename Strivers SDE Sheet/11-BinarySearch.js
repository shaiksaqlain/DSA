//########################################################## Nth Root of a Number using Binary Search ###############################################
function findRoot(n, m, mid) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
        answer = answer * mid;
        if (answer > m) {
            return 0;
        }
    }
    if (answer == m) return 1;

    return 2
}

function nthRoot(n, m) {
    let low = 0, high = m;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const rootElement = findRoot(n, m, mid);
        if (rootElement == 1) {
            return mid;
        } else if (rootElement == 0) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return -1;
}
// const n = 4, m = 69;
// console.log(nthRoot(n, m));

//########################################################## Median of Row Wise Sorted Matrix ###############################################
function upperBoundry(target, array) {
    let low = 0, high = array.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] <= target) {
            low = mid + 1
        } else {
            high = mid;
        }
    }
    return low
}

function findMedianInSortedMatrix(n, m, matrix) {
    let low = Infinity, high = -Infinity;
    for (let i = 0; i < n; i++) {
        low = Math.min(low, matrix[i][0]);
        high = Math.max(high, matrix[i][m - 1]);
    }

    let desired = Math.floor(((m * n) / 2));

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        let count = 0;
        for (let i = 0; i < n; i++) {
            count += upperBoundry(mid, matrix[i]);
        }
        if (count <= desired) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return low
}
// const m = 3, n = 3;
// const matrix = [
//     [1, 3, 5],
//     [2, 6, 9],
//     [3, 6, 9]
// ];
// console.log((findMedianInSortedMatrix(n, m, matrix)));


//########################################################## Search Single Element in a sorted array ###############################################


function searchSingleElement(array) {
    let low = 0, high = array.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] != array[mid - 1] && array[mid] != array[mid + 1]) {
            return array[mid]
        }
        else if ((mid % 2 == 1 && array[mid] == array[mid - 1]) || (mid % 2 == 0 && array[mid] == array[mid + 1])) {
            low = mid + 1;
        } else {
            high = mid
        }
    }
}

// const array = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
// console.log(searchSingleElement(array));


//########################################################## Search Element in a Rotated Sorted Array ###############################################
function sreachRotatedSortedArray(array, target) {
    let low = 0, high = array.length;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] == target) {
            return mid;
        }
        if (array[low] >= array[mid]) {
            if (array[low] <= target && target <= array[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            if (array[mid] <= target && target <= array[high]) {
                low = mid - 1
            } else {
                high = mid + 1
            }
        }
    }
}

// const array = [4, 5, 6, 7, 0, 1, 2, 3], target = 0;
// console.log(sreachRotatedSortedArray(array, target));


//########################################################## Median of Two Sorted Arrays of different sizes ###############################################

function findMedianInTwoSortedArrays(array1, array2, n, m) {
    if (n > m) findMedianInTwoSortedArrays(array2, array1, m, n);
    let low = 0;
    let high = n;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = Math.floor((n + m + 1) / 2) - mid1;
        let left1 = (mid1 == 0) ? -Infinity : array1[mid1 - 1];
        let left2 = (mid2 == 0) ? -Infinity : array2[mid2 - 1];
        let right1 = (mid1 == n) ? Infinity : array1[mid1];
        let right2 = (mid2 == m) ? Infinity : array2[mid2];

        if (left1 <= right2 && left2 <= right1) {
            if ((n + m) % 2 == 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
            } else {
                return (Math.max(left1, left2))
            }
        }

        if (left1 > right2) {
            high = mid1 - 1
        } else {
            low = mid1 + 1
        }

    }

}

// const n = 3, array1 = [1, 3, 8], m = 4, array2 = [7, 9, 10, 11]

// console.log(findMedianInTwoSortedArrays(array1, array2, n, m));


//########################################################## K-th Element of two sorted arrays ###############################################

function findKthInTwoSortedArrays(array1, array2, k) {
    if (array1.length > array2.length) return findKthInTwoSortedArrays(array2, array1, k);
    const n = array1.length;
    const m = array2.length

    let low = Math.max(0, k - m); // low = Math.max(0, k - m) → ensures you take at least enough from arr1 so that arr2 isn't overloaded.
    let high = Math.min(k, n); // high = Math.min(k, n) → ensures you don’t take more than arr1 has or more than needed.
    while (low <= high) {
        const mid1 = Math.floor((low + high) / 2);
        const mid2 = Math.floor((n + m + 1) / 2) - mid1;

        const left1 = (mid1 == 0) ? -Infinity : array1[mid1 - 1];
        const left2 = (mid2 == 0) ? -Infinity : array2[mid2 - 1];
        const right1 = (mid1 == n) ? Infinity : array1[mid1]
        const right2 = (mid2 == m) ? Infinity : array2[mid2]

        if (left1 <= right2 && left2 <= right1) {
            if ((n + m) % 2 == 0) {
                return ((Math.max(left1, left2) + Math.min(right1, right2)) / 2)
            } else {
                return Math.max(left1, left2)
            }
        }
        if (left1 > right2) {
            high = mid1 - 1
        } else {
            low = mid1 + 1
        }
    }

}

// const array1 = [2, 3, 6, 7, 9], array2 = [1, 4, 8, 10], k = 0
// console.log(findKthInTwoSortedArrays(array1, array2, k));

//########################################################## Allocate Minimum Number of Pages ###############################################
function isPossibleAllocation(books, students, pagesLimit) {
    let currentPages = 0;
    let studentCount = 1
    for (let book of books) {
        if (currentPages + book > pagesLimit) {
            studentCount++;
            currentPages = book;
            if (studentCount > students) {
                return false
            }
        } else {
            currentPages += book
        }
    }
    return true
}

function allocateBooks(students, books) {
    let low = Math.max(...books)
    let high = 0;
    for (let book of books) {
        high += book;
    }

    let answer = 0;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (isPossibleAllocation(books, students, mid)) {
            high = mid - 1;
            answer = mid
        } else {
            low = mid + 1
        }
    }
    return answer
}

// const students = 2, books = [12, 34, 67, 90]

// console.log(allocateBooks(students, books));


//##########################################################  Aggressive Cows ###############################################

function canPlaceCows(stalls, cows, minDist) {
    let count = 1; 
    let lastPlaced = stalls[0];

    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - lastPlaced >= minDist) {
            count++;
            lastPlaced = stalls[i];
        }
        if (count >= cows) return true; 
    }
    return false;
}

function aggressiveCows(stalls, cows) {
    stalls.sort((a, b) => a - b);

    let low = 1;
    let high = stalls[stalls.length - 1] - stalls[0];
    let answer = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canPlaceCows(stalls, cows, mid)) {
            answer = mid;
            low = mid + 1; // try for larger distance
        } else {
            high = mid - 1;
        }
    }
    return answer;
}

console.log(aggressiveCows([1, 2, 8, 4, 9], 3)); // Output: 3