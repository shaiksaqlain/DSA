

//####################################### Search in a sorted 2D matrix ########################################

function searchInMatrix(array, target, m, n) {
    let low = 0, high = (m * n + 1);
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const rowIndex = Math.floor(mid / m);
        const colIndex = Math.floor(mid % m);
        if (array[rowIndex][colIndex] == target) {
            return true;
        } else if (array[rowIndex][colIndex] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false
}

// const matrix = [[1, 3, 5], [7, 9, 11], [13, 15, 17]], target = 9;
// console.log(searchInMatrix(matrix, target, matrix.length - 1, matrix[0].length - 1));



//####################################### Implement Pow(x,n) | X raised to the power N ########################################

function powXN(x, n) {
    if (n == 0) return 1;
    let N = n
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    let answer = 1
    while (N > 0) {
        if (N % 2 == 1) {
            answer = answer * x;
        }
        x = x * x;
        N = Math.floor(N / 2)
    }
    return answer
}

// const x = 2, n = 10;
// console.log(powXN(x, n));
// console.log(powXN(2, -2)); 


//####################################### Find the Majority Element that occurs more than N/2 times ########################################

function MajorityNBy2(array, n) {
    let element = -1, count = 0;
    for (let i = 0; i < array.length; i++) {
        if (element == -1) {
            element = array[i]
            count = 1
        } else if (element == array[i]) {
            count++
        } else {
            count--
        }
    }
    count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            count++;
        }
    }

    if (count > (n / 2)) {
        return element
    }
    return -1
}

// const n = 5, array = [1, 1, 1, 2, 3]
// console.log(MajorityNBy2(array, n));


//####################################### Find the Majority Element that occurs more than N/3 times ########################################


function MajorityNBy3(array, n) {
    let element1 = -1, element2 = -1, count1 = 0, count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (element1 == -1 && element2 != array[i]) {
            element1 = array[i]
            count1 = 1
        } else if (element2 == -1 && element1 != array[i]) {
            element2 = array[i]
            count2 = 1
        } else if (element1 == array[i]) {
            count1++
        } else if (element2 == array[i]) {
            count2++
        } else {
            count1--
            count2--
        }
    }
    count1 = 0
    count2 = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element1) {
            count1++;
        }
        if (array[i] == element2) {
            count2++
        }
    }
    const ls = []
    if (count1 > (n / 3)) {
        ls.push(element1)
    }
    if (count2 > (n / 3)) {
        ls.push(element2)
    }
    return ls;
}

// const n = 6, array = [11, 33, 33, 11, 33, 11]
// console.log(MajorityNBy3(array, n));


//####################################### Find the Majority Element that occurs more than N/3 times ########################################


//####################################### Reverse Pairs | Hard Interview Question ########################################

function merge(array, low, mid, high) {
    let l = low, r = mid + 1, temp = []

    while (l <= mid && r <= high) {
        if (array[l] < array[r]) {
            temp.push(array[l])
            l++
        } else {
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
    return array;
}

function countPairs(array, low, mid, high) {
    let r = mid + 1, count = 0;
    for (let i = low; i <= mid; i++) {
        while (r <= high && array[i] > (2 * array[r])) {
            r++
        }
        count += (r - (mid + 1))
    }
    return count
}

function mergeSort(array, low, high) {
    let count = 0
    if (low >= high) {
        return count;
    }
    const mid = Math.floor((low + high) / 2)
    count += mergeSort(array, low, mid)
    count += mergeSort(array, mid + 1, high)
    count += countPairs(array, low, mid, high)
    merge(array, low, mid, high);
    return count
}

const array = [1, 3, 2, 3, 1];
console.log(mergeSort(array, 0, array.length - 1));
