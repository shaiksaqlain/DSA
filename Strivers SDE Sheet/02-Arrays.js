//#################################### Rotate Array ###############################################

function rotateMatrix90(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array[i].length; j++) {
            [array[i][j], array[j][i]] = [array[j][i], array[i][j]]
        }
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].reverse()
    }

    return array;
}

// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(rotateMatrix90(array));

//#################################### Merge Overlapping Sub-intervals ###############################################


function mergeSubintervals(array) {
    array = array.sort((a, b) => a[0] - b[0])
    const result = [array[0]];
    for (let i = 0; i < array.length; i++) {
        let previous = result[result.length - 1];
        let current = array[i];
        if (previous[1] > current[0]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else {
            result.push(current);
        }
    }
    return result
}

// const array = [[15, 18], [1, 3], [2, 6], [8, 10]];
// console.log(mergeSubintervals(array));

//#################################### Merge sorted Array ###############################################

function mergeSortArrays(array1, array2, n, m, arrayLen) {
    while (m >= 0 && n >= 0) {
        if (array1[m] > array2[n]) {
            array1[arrayLen] = array1[m]
            m--
        } else {
            array1[arrayLen] = array2[n]
            n--
        }
        arrayLen--
    }
    if (n >= 0) {
        while (n >= 0) {
            array1[arrayLen] = array2[n]
            arrayLen--
            n--
        }
    }
    return array1
}
// const arr1 = [1, 5, 9], m = 3, arr2 = [2, 3, 6, 7, 10, 11], n = 6
// console.log(mergeSortArrays(arr1, arr2, n - 1, m - 1, m + n - 1));

//#################################### Find duplicate in N+1 ###############################################
function findDuplicateNPlus1(array) {
    let slow = array[0];
    let fast = array[0];
    do {
        slow = array[slow];
        fast = array[array[fast]]
    } while (slow != fast)

    fast = array[0]

    while (slow != fast) {
        slow = array[slow];
        fast = array[fast]
    }
    return slow
}
// const array = [1, 3, 4, 2, 2, 2]
// console.log(findDuplicateNPlus1(array));


//#################################### Find Missing and Repeated Number###############################################

function findMissingAndRepeated(array) {
    const result = new Array(array.length + 1).fill(0)
    for (let i = 0; i < array.length; i++) {
        result[array[i]]++
    }
    let missing = -1, repeated = -1;

    for (let i = 1; i < result.length; i++) {
        if (result[i] == 0) {
            missing = i
        } else if (result[i] == 2) {
            repeated = i
        }
    }
    return { missing, repeated }
}

// find X-Y=> S - SN => val1
// find X2Y2=>(X+Y)(X-Y)=> S2- SN2 => val2
// find X+Y=> val2/ val1 => val2
// find X=> val1+val2/2
// find Y=> val2-X;

function findMissingAndRepeatedV2(array) {
    let S = 0;
    let S2 = 0;
    const n = array.length
    for (let i = 0; i < array.length; i++) {
        S = S + array[i];
        S2 = S2 + (array[i] * array[i]);
    }
    let SN = (n * (n + 1)) / 2
    let SN2 = (n * (n + 1) * (2 * n + 1)) / 6
    let val1 = S - SN;      // X-Y
    let val2 = S2 - SN2;    // (X-Y)(X+Y)
    val2 = val2 / val1;     // (X+Y)
    let x = (val1 + val2) / 2;
    let y = val2 - x;
    return { missing: x, repeated: y }
}
// const array = [1, 2, 3, 5, 6, 6]
// console.log(findMissingAndRepeated(array));



//####################################### Count inversions in an array ########################################

function merge(array, low, mid, high) {
    let l = low, r = mid + 1, count = 0;
    const temp = [];
    while (l <= mid && r <= high) {
        if (array[l] < array[r]) {
            temp.push(array[l])
            l++
        } else {
            count += (mid - l + 1)
            temp.push(array[r])
            r++
        }
    }
    while (l <= mid) {
        temp.push(array[l])
        l++
    }
    while (r <= high) {
        temp.push(array[r])
        r++
    }

    for (let i = 0; i < temp.length; i++) {
        array[low + i] = temp[i]
    }
    return count;
}


function countInversions(array, low, high) {
    let count = 0;
    if (low >= high) {
        return count;
    }
    const mid = Math.floor((low + high) / 2)
    count += countInversions(array, low, mid)
    count += countInversions(array, mid + 1, high)
    count += merge(array, low, mid, high)
    return count
}

// const array = [5, 3, 2, 1, 4,];
// console.log(countInversions(array, 0, array.length - 1));

