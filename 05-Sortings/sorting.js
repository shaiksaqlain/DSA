//########################################################## selection sort ###############################################
//i=0
//find the minimum value in array, start inner loop from j=i+1
//keep min value in array[i] position. array[i] value in min position.
// increment i by 1

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min])
                [array[j], array[min]] = [array[min], array[j]]
        }
    }
    return array
}

// const ls = [5, 4, 3, 2, 1]
// const sortedArray = selectionSort(ls)
// console.log(sortedArray);


//########################################################## Bubble sort ###############################################
//compares the adjacent elements everytime.
//push the max element to last
//start i = n-1 because in bubble sort last element will be in always started position after one iteration so we will avoid it.
// example for first iteration nth is avoided , for second nth & nth-1 and so on...


function bubbleSort(array) {
    const n = array.length
    let isSwapHappened = false;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
                isSwapHappened = true
            }
        }
        if (!isSwapHappened) {
            break;
        }
    }
    return array;
}
// const ls = [1, 2, 3, 4, 5]
// const ls = [9, 9, 4, 7, 1]
// const sortedArray = bubbleSort(ls)
// console.log(sortedArray);




//########################################################## Insertion sort ###############################################
//Insertion sort is all about choosing one element and keeping it in their place


function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0 && array[j - 1] > array[j]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]]
            j--
        }
    }
    return array;
}
// const ls = [1, 2, 3, 4, 5]
// const ls = [10, 9, 4, 7, 1]
// const sortedArray = insertionSort(ls)
// console.log(sortedArray);



//########################################################## Merge Sort ###############################################

function merge(array, low, mid, high) {
    let temp = [];
    let i = low, j = mid + 1
    while (i <= mid && j <= high) {
        if (array[i] < array[j]) {
            temp.push(array[i])
            i++
        } else {
            temp.push(array[j])
            j++
        }
    }
    for (let index = i; index <= mid; index++) {
        temp.push(array[index])
    }
    for (let index = j; index <= high; index++) {
        temp.push(array[index])
    }
    for (let k = 0; k < temp.length; k++) {
        array[low + k] = temp[k];
    }
    return array
}

function mergeSort(array, low, high) {
    if (low >= high) {
        return
    };

    const mid = Math.floor((low + high) / 2)
    mergeSort(array, low, mid);
    mergeSort(array, mid + 1, high);
    const result = merge(array, low, mid, high)
    return result
}
// const ls = [10, 9, 4, 7, 1]
// const sortedArray = mergeSort(ls, 0, ls.length - 1)
// console.log(sortedArray);



//########################################################## Quick Sort ###############################################

function findPartionIndex(array, low, high) {
    let l = low + 1, r = high;
    const pivot = array[low]
    while (l < r) {
        while (array[l] <= pivot && l <= high)
            l++
        while (array[r] > pivot && r >= low)
            r--
        if (l < r) {
            [array[l], array[r]] = [array[r], array[l]];
        }
    }

    [array[low], array[r]] = [array[r], array[low]];
    return r;
}

function quickSort(array, low, high) {
    if (low >= high) {
        return
    };
    const partionIndex = findPartionIndex(array, low, high)
    quickSort(array, low, partionIndex - 1)
    quickSort(array, partionIndex + 1, high)
    return array
}
const ls = [1, 2, 10, 8, 9, 4, 7, 1]
const sortedArray = quickSort(ls, 0, ls.length - 1)
console.log(sortedArray);


